import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchClubById } from '../services/api';
import RegistrationForm from '../components/RegistrationForm';
import LoadingSpinner from '../components/LoadingSpinner';
import styles from './ClubDetailPage.module.css';

function ClubDetailPage() {
  const { id } = useParams();
  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadClub = async () => {
      try {
        setLoading(true);
        const res = await fetchClubById(id);
        setClub(res.data);
        setError(null);
      } catch (err) {
        setError('Could not find this club.');
      } finally {
        setLoading(false);
      }
    };
    loadClub();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!club) return null;

  return (
    <div className={styles.pageContainer}>
      <header className={styles.clubHeader}>
        <h1 className={styles.clubName}>{club.name}</h1>
        {club.originDate && <p className={styles.clubOrigin}>Established: {new Date(club.originDate).toLocaleDateString()}</p>}
      </header>
      <div className={styles.contentWrapper}>
        <main className={styles.mainContent}>
          <h2>About Us</h2>
          <p className={styles.description}>{club.detailedDescription}</p>
          <h2>Our Past Events</h2>
          <div className={styles.eventGallery}>
            {club.events && club.events.length > 0 ? (
              club.events.map((event, i) => (
                <div key={i} className={styles.eventCard}>
                  <img src={event.imageUrl || 'https://via.placeholder.com/400x200.png?text=Event'} alt={event.title} />
                  <div className={styles.eventInfo}>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))
            ) : ( <p>No past events to show.</p> )}
          </div>
        </main>
        <aside className={styles.sidebar}>
          <RegistrationForm clubId={club.id} clubName={club.name} />
        </aside>
      </div>
    </div>
  );
}
export default ClubDetailPage;