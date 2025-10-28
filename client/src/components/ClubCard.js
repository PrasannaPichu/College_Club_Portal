import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ClubCard.module.css';
function ClubCard({ club }) {
  const imgUrl = club.imageUrl || 'https://via.placeholder.com/400x200.png?text=Club+Event';
  return (
    <Link to={`/club/${club.id}`} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={styles.cardImage}><img src={imgUrl} alt={club.name} /></div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{club.name}</h3>
        <p className={styles.cardTagline}>{club.tagline}</p>
        <span className={styles.cardLink}>Learn More &rarr;</span>
      </div>
    </Link>
  );
}
export default ClubCard;