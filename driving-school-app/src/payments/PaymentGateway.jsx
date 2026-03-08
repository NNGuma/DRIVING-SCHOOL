import React, { useState } from "react";
import {
  FaCreditCard,
  FaUniversity,
  FaMoneyBillWave,
  FaLock,
} from "react-icons/fa";
import "./payments.css";

export default function PaymentGateway() {
  const [selectedMethod, setSelectedMethod] = useState("card");

  const handlePayment = () => {
    alert("Payment processed successfully!");
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment Gateway</h2>
      <p className="payment-subtitle">
        Securely complete your payment using any method below.
      </p>

      {/* ==== Payment Method Selection ===== */}
      <div className="payment-methods">
        <div
          className={`payment-method ${
            selectedMethod === "card" ? "active" : ""
          }`}
          onClick={() => setSelectedMethod("card")}
        >
          <FaCreditCard className="method-icon" />
          <span>Credit / Debit Card</span>
        </div>

        <div
          className={`payment-method ${
            selectedMethod === "eft" ? "active" : ""
          }`}
          onClick={() => setSelectedMethod("eft")}
        >
          <FaUniversity className="method-icon" />
          <span>Bank EFT</span>
        </div>

        <div
          className={`payment-method ${
            selectedMethod === "cash" ? "active" : ""
          }`}
          onClick={() => setSelectedMethod("cash")}
        >
          <FaMoneyBillWave className="method-icon" />
          <span>Cash Payment</span>
        </div>
      </div>

      {/* ==== Payment Details Section ===== */}
      <div className="payment-box">
        {selectedMethod === "card" && (
          <>
            <h3 className="box-title">Card Details</h3>
            <input placeholder="Card Holder Name" />
            <input placeholder="Card Number" />
            <div className="row">
              <input placeholder="MM/YY" />
              <input placeholder="CVV" />
            </div>
          </>
        )}

        {selectedMethod === "eft" && (
          <>
            <h3 className="box-title">Bank Information</h3>
            <input placeholder="Account Holder Name" />
            <input placeholder="Account Number" />
            <input placeholder="Bank Name" />
            <input placeholder="Branch Code" />
          </>
        )}

        {selectedMethod === "cash" && (
          <>
            <h3 className="box-title">Cash Payment Info</h3>
            <p className="cash-note">
              You selected cash payment. Please bring the cash to the office.
            </p>
          </>
        )}

        <button className="pay-btn" onClick={handlePayment}>
          <FaLock className="lock-icon" />
          Process Payment
        </button>
      </div>
    </div>
  );
}
