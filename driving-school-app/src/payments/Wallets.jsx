import React, { useState } from "react";
import {
  FaWallet,
  FaPlusCircle,
  FaArrowDown,
  FaHistory,
  FaCreditCard,
} from "react-icons/fa";
import "./payments.css";// make sure path matches your project

export default function Wallet() {
  // Mock initial state (replace with real API / Firestore)
  const [balance, setBalance] = useState(150.0);
  const [transactions, setTransactions] = useState([
    { id: 1, type: "topup", amount: 500, date: "2025-10-01", note: "Card top-up", status: "Successful" },
    { id: 2, type: "withdraw", amount: 200, date: "2025-09-22", note: "Payout to bank", status: "Successful" },
    { id: 3, type: "charge", amount: 120, date: "2025-08-15", note: "Lesson booking", status: "Successful" },
  ]);

  const [topupAmount, setTopupAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [method, setMethod] = useState("card"); // card | eft | wallet
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Helpers
  const addTransaction = (tx) => {
    setTransactions((prev) => [{ id: Date.now(), ...tx }, ...prev]);
  };

  // Mock top-up flow
  const handleTopup = (e) => {
    e.preventDefault();
    setError("");
    const amt = Number(topupAmount);
    if (!amt || amt <= 0) return setError("Enter a valid top-up amount.");
    setLoading(true);

    // Simulate API/payment gateway
    setTimeout(() => {
      setBalance((b) => +(b + amt).toFixed(2));
      addTransaction({ type: "topup", amount: amt, date: new Date().toLocaleDateString(), note: `Top-up (${method})`, status: "Successful" });
      setTopupAmount("");
      setLoading(false);
    }, 700);
  };

  // Mock withdraw flow
  const handleWithdraw = (e) => {
    e.preventDefault();
    setError("");
    const amt = Number(withdrawAmount);
    if (!amt || amt <= 0) return setError("Enter a valid withdraw amount.");
    if (amt > balance) return setError("Insufficient balance.");
    setLoading(true);

    setTimeout(() => {
      setBalance((b) => +(b - amt).toFixed(2));
      addTransaction({ type: "withdraw", amount: amt, date: new Date().toLocaleDateString(), note: "Withdraw to bank", status: "Pending" });
      setWithdrawAmount("");
      setLoading(false);
    }, 700);
  };

  return (
    <div className="crud-container wallet-page">
      <div className="wallet-header">
        <div className="wallet-title">
          <FaWallet className="wallet-icon" />
          <div>
            <h2>Wallet</h2>
            <p className="muted">Balance, top-ups and withdrawals</p>
          </div>
        </div>

        <div className="wallet-balance-card">
          <div className="balance-label">Available Balance</div>
          <div className="balance-amount">R{balance.toFixed(2)}</div>
        </div>
      </div>

      {/* Controls */}
      <div className="wallet-controls">
        <form onSubmit={handleTopup} className="wallet-form">
          <label className="form-label">Top-up amount (ZAR)</label>
          <div className="input-row">
            <input
              type="number"
              min="1"
              step="0.01"
              placeholder="e.g. 250"
              value={topupAmount}
              onChange={(e) => setTopupAmount(e.target.value)}
            />
            <select value={method} onChange={(e) => setMethod(e.target.value)}>
              <option value="card">Card</option>
              <option value="eft">Bank EFT</option>
              <option value="wallet">Internal Wallet</option>
            </select>
            <button type="submit" className="btn add-btn" disabled={loading}>
              <FaPlusCircle /> {loading ? "Processing..." : "Top Up"}
            </button>
          </div>
        </form>

        <form onSubmit={handleWithdraw} className="wallet-form">
          <label className="form-label">Withdraw to bank (ZAR)</label>
          <div className="input-row">
            <input
              type="number"
              min="1"
              step="0.01"
              placeholder="e.g. 300"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
            <button type="submit" className="btn withdraw-btn" disabled={loading}>
              <FaArrowDown /> {loading ? "Processing..." : "Withdraw"}
            </button>
          </div>
        </form>
      </div>

      {error && <div className="wallet-error">{error}</div>}

      {/* Recent Transactions */}
      <div className="wallet-transactions">
        <div className="tx-header">
          <h3>Recent Transactions</h3>
          <div className="tx-actions">
            <button className="btn small-btn"><FaHistory /> View All</button>
            <button className="btn small-btn"><FaCreditCard /> Export</button>
          </div>
        </div>

        <div className="tx-list">
          {transactions.length === 0 && <div className="muted">No transactions yet</div>}
          {transactions.map((tx) => (
            <div className="tx-item" key={tx.id}>
              <div className={`tx-type ${tx.type}`}>{tx.type === "topup" ? "Top-up" : tx.type === "withdraw" ? "Withdraw" : "Charge"}</div>
              <div className="tx-meta">
                <div className="tx-desc">{tx.note}</div>
                <div className="tx-date muted">{tx.date}</div>
              </div>
              <div className="tx-amount">R{tx.amount.toFixed(2)}</div>
              <div className={`tx-status ${tx.status.toLowerCase()}`}>{tx.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
