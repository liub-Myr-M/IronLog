import 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className={styles.landingBody}>
      <header className={styles.landingHeader}>
        <div className={styles.logo}>Iron Log</div>
        <nav className={styles.landingNav}>
          <Link to="/auth">
            <button
              className={styles.btnSecondary}
              style={{
                padding: '0.7rem 1.5rem',
                backgroundColor: '#1c1514',
                border: '1px solid white',
              }}
            >
              Мій профіль
            </button>
          </Link>
        </nav>
      </header>

      <main className={styles.hero}>
        <div style={{ flex: 1 }}>
          <h1 className={styles.title}>
            Твоє тренування.
            <br />
            Жодних зайвих деталей.
          </h1>
          <p className={styles.subtitle}>
            Записуй підходи, відслідковуй 1RM та будуй графіки прогресу. Працює офлайн,
            синхронізується всюди. Забудь про блокноти.
          </p>
          <div className={styles.btnGroup}>
            <button className={styles.btnPrimary}>Android</button>
            <button className={styles.btnSecondary}>iOS (Beta)</button>
          </div>
        </div>
        <div className={styles.phoneMockup}>
          <div style={{ color: '#00ff00', padding: '2rem', fontSize: '1.1rem' }}>Жим лежачи</div>
          <div style={{ padding: '1rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '150px',
              }}
            >
              <div style={{ backgroundColor: '#00ff00', width: '40px', height: '60%' }}></div>
              <div style={{ backgroundColor: '#00ff00', width: '40px', height: '75%' }}></div>
              <div style={{ backgroundColor: '#00ff00', width: '40px', height: '90%' }}></div>
              <div style={{ backgroundColor: '#00ff00', width: '40px', height: '100%' }}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
