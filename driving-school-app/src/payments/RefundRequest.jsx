import React, { useState } from "react";
import { FaUndoAlt } from "react-icons/fa";
import "./payments.css";

export default function RefundRequest(){
  const [form, setForm] = useState({ txId:"", amount:"", reason:"" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // send to backend / firestore
    setSubmitted(true);
  };

  return (
    <div className="crud-container">
      <h2>Request a Refund</h2>
      <p>Submit a refund request — our finance team will review and respond.</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{maxWidth:700}}>
          <div style={{marginBottom:12}}>
            <label>Transaction ID</label><br />
            <input type="text" value={form.txId} onChange={e=>setForm({...form, txId:e.target.value})} required style={{width:"100%", padding:8, borderRadius:8}}/>
          </div>

          <div style={{marginBottom:12}}>
            <label>Amount (ZAR)</label><br />
            <input type="number" value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})} required style={{width:"100%", padding:8, borderRadius:8}}/>
          </div>

          <div style={{marginBottom:12}}>
            <label>Reason</label><br />
            <textarea value={form.reason} onChange={e=>setForm({...form, reason:e.target.value})} required style={{width:"100%", padding:8, borderRadius:8}} rows={5}/>
          </div>

          <button className="btn btn-refresh" type="submit"><FaUndoAlt /> Submit Refund Request</button>
        </form>
      ) : (
        <div style={{padding:20, background:"rgba(255,255,255,0.04)", borderRadius:10}}>
          <h3>Refund Submitted</h3>
          <p>We received your refund request. We will contact you by email within 3–5 business days.</p>
        </div>
      )}
    </div>
  );
}
