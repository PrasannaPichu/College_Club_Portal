import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './LoginPage.module.css';

function LoginPage() {
  const [mode, setMode] = useState('student'); // 'student' or 'admin'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Call your new Spring Boot login endpoint
      const res = await axios.post('http://localhost:8081/api/auth/login', {
        username: username,
        password: password
      });
      
      // If login is successful
      setLoading(false);
      
      // Store user info (simple version)
      localStorage.setItem('user', JSON.stringify(res.data));
      
      // Redirect to the new admin dashboard
      navigate('/admin/dashboard');

    } catch (err) {
      setLoading(false);
      setError('Login failed. Please check your username and password.');
    }
  };

  const handleStudentLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // This is a DUMMY login as requested
    // It just pretends to log in and redirects to the homepage.
    setTimeout(() => {
      setLoading(false);
      navigate('/'); // Redirect to homepage
    }, 1000);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.toggleButtons}>
          <button 
            className={mode === 'student' ? styles.active : ''}
            onClick={() => setMode('student')}>
            Student
          </button>
          <button 
            className={mode === 'admin' ? styles.active : ''}
            onClick={() => setMode('admin')}>
            Admin
          </button>
        </div>

        {mode === 'student' && (
          <form onSubmit={handleStudentLogin} className={styles.loginForm}>
            <h2>Student Login</h2>
            <p>Please enter your college register number.</p>
            <div className={styles.formGroup}>
              <label>Register Number</label>
              <input type="text" placeholder="e.g., 43111359" required />
            </div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input type="password" placeholder="Your Password" required />
            </div>
            {error && <p className={styles.errorMsg}>{error}</p>}
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        )}

        {mode === 'admin' && (
          <form onSubmit={handleAdminLogin} className={styles.loginForm}>
            <h2>Admin Login</h2>
            <p>Please enter your admin credentials.</p>
            <div className={styles.formGroup}>
              <label>Username</label>
              <input 
                type="text" 
                placeholder="admin" 
                required 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className={styles.errorMsg}>{error}</p>}
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
export default LoginPage;