"use client";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import styles from "./page.module.css";

export default function Prediction() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [predictions, setPredictions] = useState([
    { id: 1, name: "Alice Smith", department: "IT", risk: 0 },
    { id: 2, name: "Mohammed Ali", department: "HR", risk: 0 },
    { id: 3, name: "Layla Hasan", department: "Finance", risk: 0 },
  ]);

  const handleRiskChange = (id: number, value: string) => {
    setPredictions((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, risk: Number(value) } : emp
      )
    );
  };

  const handleView = (id: number) => {
    console.log("View details for employee ID:", id);
    alert(`View details for employee ID: ${id}`);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContainer}>
        {/* Sidebar */}
        <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
          <div className={styles.logo}>
            <i className="fas fa-home"></i> HR Dashboard
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/HR/hrdashboard">
                  <i className="fas fa-home"></i> Dashboard
                </Link>
              </li>
              <li>
                <Link href="/HR/jobpost">
                  <i className="fas fa-briefcase"></i> Job Posts
                </Link>
              </li>
              <li>
                <Link href="/HR/uploadcv">
                  <i className="fas fa-upload"></i> Uploaded CVs
                </Link>
              </li>
              <li>
                <Link href="/HR/employees">
                  <i className="fas fa-users"></i> Employees
                </Link>
              </li>
              <li>
                <Link href="/HR/leaverequest">
                  <i className="fas fa-calendar-alt"></i> Leave Requests
                </Link>
              </li>
              <li>
                <Link href="/HR/departments">
                  <i className="fas fa-building"></i> Departments
                </Link>
              </li>
              <li>
                <Link href="/HR/ResignationPredictions" >
                  <i className="fas fa-user-slash"></i> Resignation Predictions
                </Link>
              </li>
              <li>
                <Link href="/HR/PromotionPrediction">
                  <i className="fas fa-arrow-up"></i> Promotion Prediction
                </Link>
              </li>
              <li>
                <Link href="/HR/addjob">
                  <i className="fas fa-briefcase"></i> Add Jobs
                </Link>
              </li>
              <li>
                <Link href="/HR/secondinterview" className={styles.active}>
                  <i className="fas fa-clipboard-check"></i> Second Interview Mark
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles["sidebar-footer"]}>
            <a href="#">
              <i className="fas fa-sign-out-alt"></i> Logout
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className={styles["main-content"]}>
          <header className={styles.header}>
            <div className={styles["header-actions"]}>
              <button
                className={styles["toggle-btn"]}
                onClick={() => setSidebarOpen((prev) => !prev)}
              >
                <FaBars />
              </button>
              <h1>
                <i className="fas fa-clipboard-check"></i> Second Interview Mark
              </h1>
            </div>
          </header>

          <div className={styles["table-container"]}>
            <h2><i className="fas fa-clipboard-check"></i> Set Mark</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Employee Name</th>
                  <th>Department</th>
                  <th>Predicted Risk</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {predictions.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.department}</td>
                    <td>
                      <input
                        type="number"
                        value={emp.risk}
                        onChange={(e) => handleRiskChange(emp.id, e.target.value)}
                        placeholder="0"
                        className={styles.mark}
                        
                      />
                    </td>
                    <td>
                      <button
                        className={styles.btn}
                        onClick={() => handleView(emp.id)}
                      >
                        Save
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
