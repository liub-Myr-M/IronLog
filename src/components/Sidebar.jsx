import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>IRON LOG</div>
      <nav className={styles.nav}>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
        >
          <span className={styles.icon}>📊</span> Дашборд
        </NavLink>
        <NavLink
          to="/journal"
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
        >
          <span className={styles.icon}>📖</span> Журнал тренувань
        </NavLink>
      </nav>
      <NavLink to="/" className={styles.logout}>
        Вихід
      </NavLink>
    </aside>
  );
}
