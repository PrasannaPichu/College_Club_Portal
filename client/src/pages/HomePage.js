import React, { useState, useEffect } from 'react';
import { fetchAllClubs } from '../services/api';
import ClubCard from '../components/ClubCard';
import LoadingSpinner from '../components/LoadingSpinner';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom'; // <-- ADD THIS

function HomePage() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadClubs = async () => {
      try {
        setLoading(true);
        const response = await fetchAllClubs();
        setClubs(response.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Failed to load clubs. Is the backend server running?');
      } finally {
        setLoading(false);
      }
    };
    
    loadClubs();
  }, []); 

  const renderContent = () => {
    // ... (no changes in this function)
    if (loading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return <p className={styles.error}>{error}</p>;
    }
    return (
      <div className={styles.clubGrid}>
        {clubs.map(club => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.homeContainer}>
      {/* --- START OF NEW CODE --- */}
      <Link to="/login" className={styles.loginButton}>
        Login
      </Link>
      {/* --- END OF NEW CODE --- */}

      <header className={styles.heroHeader}>
  <div className={styles.titleContainer}> {/* Add a container for centering */}
    <img 
      src="\logo.jpg"
      alt="Club Portal Logo" 
      className={styles.headerLogo} // Add a class for styling
    />
    <h1>Welcome to the Club Portal</h1>
  </div>
  <p>Discover, Connect, and Grow with Your Community</p>
</header>
      {renderContent()}
    </div>
  );
}
export default HomePage;