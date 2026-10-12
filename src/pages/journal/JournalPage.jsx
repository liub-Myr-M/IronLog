import React from 'react';
import Sidebar from '../../components/Sidebar.jsx';
import styles from './JournalPage.module.css';

export default function JournalPage() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Твій Журнал</h1>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>UN</div>
            <div>Name Surname</div>
          </div>
        </header>

        <div className={styles.searchBar}>
          <input type="text" placeholder="Пошук вправи..." className={styles.searchInput} />
          <input type="date" className={styles.filterInput} />
          <select className={styles.filterInput}>
            <option>Усі вправи</option>
            <option>Жим лежачи</option>
            <option>Станова тяга</option>
          </select>
        </div>

        <table className={styles.trainingTable}>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Назва</th>
              <th>Основна вправа</th>
              <th>Тоннаж</th>
              <th>Час</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>15 Грудня 2023</strong>
              </td>
              <td>Жим + Спина</td>
              <td>Жим лежачи (115кг x 3)</td>
              <td>
                <strong>4,800 кг</strong>
              </td>
              <td>1:20:00</td>
            </tr>
            <tr>
              <td>
                <strong>12 Грудня 2023</strong>
              </td>
              <td>Leg Day</td>
              <td>Присідання (140кг x 5)</td>
              <td>
                <strong>5,200 кг</strong>
              </td>
              <td>1:45:00</td>
            </tr>
            <tr>
              <td>
                <strong>10 Грудня 2023</strong>
              </td>
              <td>Full Body A</td>
              <td>Станова тяга (160кг x 2)</td>
              <td>
                <strong>3,500 кг</strong>
              </td>
              <td>1:10:00</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
