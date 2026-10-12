import 'react';
import Sidebar from '../../components/Sidebar.jsx';
import styles from './DashboardPage.module.css';

export default function DashboardPage() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Вітаємо, User!</h1>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>NS</div>
            <div>Name Surname</div>
          </div>
        </header>

        <div className={styles.gridWidgets}>
          <div className={styles.widget} style={{ gridColumn: '1 / 2' }}>
            <p className={styles.widgetTitle}>Динаміка 1RM: Жим лежачи (кг)</p>
            <div
              style={{
                height: '250px',
                backgroundColor: '#222',
                border: '2px dashed #444',
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#444',
              }}
            >
              [Графік 1RM]
            </div>
          </div>
          <div className={styles.widget} style={{ gridColumn: '2 / 3' }}>
            <p className={styles.widgetTitle}>Тоннаж за тиждень (кг)</p>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: '#00ff00', margin: '1rem 0' }}>
              12,450
            </div>
            <p style={{ color: '#a0a0a0' }}>+ 5.2% від минулого тижня</p>
          </div>
        </div>
      </main>
    </div>
  );
}
