import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AuthPage.module.css';

export default function AuthPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Мій профіль</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            defaultValue="ivan@ironlog.com"
          />
          <input
            type="password"
            placeholder="Пароль"
            className={styles.input}
            defaultValue="123456"
          />
          <button type="submit" className={styles.btn}>
            Вхід
          </button>
        </form>
        <p className={styles.footerText}>
          Ще немає профілю?{' '}
          <a href="#" className={styles.link}>
            Реєстрація
          </a>
        </p>
      </div>
    </div>
  );
}
