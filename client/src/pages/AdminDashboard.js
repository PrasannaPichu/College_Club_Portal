import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './AdminDashboard.module.css';

function AdminDashboard() {
  const [regs, setRegs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // If not logged in, redirect to login page
      navigate('/login');
    }

    // Fetch protected data
    const fetchRegistrations = async () => {
      try {
        const res = await axios.get('http://localhost:8081/api/admin/registrations');
        setRegs(res.data);
        setLoading(false);
      } catch (err) {
        // If token is invalid or expired
        console.error(err);
        setLoading(false);
        // You would ideally handle 401/403 errors here
        // and redirect to login
        navigate('/login');
      }
    };
    
    fetchRegistrations();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>Admin Dashboard</h1>
        {user && <span className={styles.welcome}>Welcome, {user.username}!</span>}
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </header>
      
      <h2>All Student Registrations</h2>
      
      <div className={styles.tableContainer}>
        <table className={styles.regTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Reg. Number</th>
              <th>Department</th>
              <th>Year</th>
              <th>Phone</th>
              <th>Club ID</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {regs.map((reg) => (
              <tr key={reg.id}>
                <td>{reg.name}</td>
                <td>{reg.regNo}</td>
                <td>{reg.dept}</td>
                <td>{reg.year}</td>
                <td>{reg.phone}</td>
                <td>{reg.clubId}</td>
                <td>{reg.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AdminDashboard;