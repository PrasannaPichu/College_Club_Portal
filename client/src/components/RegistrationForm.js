import React, { useState } from 'react';
import { submitRegistration } from '../services/api';
import styles from './RegistrationForm.module.css';

function RegistrationForm({ clubId, clubName }) {
  const [form, setForm] = useState({ clubId, name: '', regNo: '', dept: '', year: '', phone: '', reason: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const hC = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const hS = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);
    const data = { ...form, year: parseInt(form.year) || 0 };
    submitRegistration(data)
      .then(res => {
        setSuccess(true);
        setSubmitting(false);
        setForm({ ...form, name: '', regNo: '', dept: '', year: '', phone: '', reason: '' });
      })
      .catch(err => {
        setError(err.response?.data?.message || 'Registration failed.');
        setSubmitting(false);
      });
  };

  if (success) {
    return (
      <div className={styles.formContainer}>
        <h3 className={styles.successMsg}>Successfully registered!</h3>
        <p>The club president will contact you soon.</p>
        <button onClick={() => setSuccess(false)} className={styles.formButton}>Register Again</button>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <h3>Register for {clubName}</h3>
      <form onSubmit={hS}>
        <div className={styles.formGroup}><label>Full Name</label><input type="text" name="name" value={form.name} onChange={hC} required /></div>
        <div className={styles.formGroup}><label>Register Number</label><input type="text" name="regNo" value={form.regNo} onChange={hC} required /></div>
        <div className={styles.formGroup}><label>Department</label><input type="text" name="dept" value={form.dept} onChange={hC} required /></div>
        <div className={styles.formGroup}><label>Year (1-4)</label><input type="number" name="year" value={form.year} onChange={hC} min="1" max="4" required /></div>
        <div className={styles.formGroup}><label>10-Digit Phone</label><input type="tel" name="phone" value={form.phone} onChange={hC} pattern="[0-9]{10}" required /></div>
        <div className={styles.formGroup}><label>Why are you interested?</label><textarea name="reason" rows="4" value={form.reason} onChange={hC} required /></div>
        {error && <p className={styles.errorMsg}>{error}</p>}
        <button type="submit" className={styles.formButton} disabled={submitting}>{submitting ? 'Submitting...' : 'Register Now'}</button>
      </form>
    </div>
  );
}
export default RegistrationForm;