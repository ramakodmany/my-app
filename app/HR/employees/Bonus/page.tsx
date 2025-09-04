"use client";
import React, { useState, useEffect } from "react";
import { FaUsers, FaHome, FaCalendarPlus, FaHistory, FaBuilding, FaBars, FaSignOutAlt, FaTachometerAlt, FaPlaneDeparture, FaCalendarAlt, FaSitemap } from "react-icons/fa";
import Link from "next/link";
import styles from "./page.module.css";

export default function Bonus() {
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

    const [bonus, setBonus] = useState("");
    const salary = 10000; 
    const rate = "5 - Excellent";

    const handleSave = () => {
        console.log({
            salary,
            rate,
            bonus,
        });
    alert(`Salary: ${salary}, Rate: ${rate}, Bonus: ${bonus}`);
  };


  return (
    <div className={styles.dashboard}>
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <div className={styles.logo}>
          <i className ="fas fa-home"></i> HR Dashboard
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/HR/hrdashboard">
                <i className="fas fa-home"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link href="/HR/jobpost" >
                <i className="fas fa-briefcase"></i> Job Posts
              </Link>
            </li>
            <li>
              <Link href="/HR/uploadcv">
                <i className="fas fa-upload"></i> Uploaded CVs
              </Link>
            </li>
            <li>
              <Link href="/HR/employees" className={styles.active}>
                <i className="fas fa-users"></i> Employees
              </Link>
            </li>
            <li>
              <Link href="/HR/leaverequest">
                <i className="fas fa-calendar-alt"></i> Leave Requests
              </Link>
            </li>
            <li>
              <Link href="/HR/departments" >
                <i className="fas fa-building"></i> Departments
              </Link>
            </li>
            <li>
              <Link href="/HR/ResignationPredictions">
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
              <Link href="/HR/secondinterview">
                <i className="fas fa-clipboard-check"></i>  Second Interview Mark
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles['sidebar-footer']}>
          <a href="#">
            <i className="fas fa-sign-out-alt"></i> Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles['main-content']}>
        <header className={styles.header}>
          <div className={styles['header-actions']}>
            <button
              className={styles['toggle-btn']}
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              <FaBars />
            </button>
            <h1>
              <i className ="fas fa-users"></i> Set Bonus
            </h1>
          </div>
        </header>

         <div className={styles["employee-card"]}>
      <div className={styles["employee-photo"]}>
        <img src="/photo/2.png" alt="Employee Photo" style={{ width: "150px", borderRadius: "8px" }} />
      </div>

      <div className={styles['employee-info']} style={{ flexGrow: 1 }}>
        <h2>Sarah Arnaout</h2>

        <p><strong>Department Name:</strong> IT</p>
        <p><strong>Education:</strong> Bachelor</p>
        <p><strong>Rate:</strong> {rate}</p>
        <p><strong>Email:</strong> sarah.arnaout@gmail.com</p>
        <p><strong>Job Role:</strong> Developer</p>
        <p><strong>Salary:</strong> {salary}$</p>

        <p>
          <strong>Bonus:</strong>{" "}
          <input 
            type="text" 
            value={bonus} 
            onChange={(e) => setBonus(e.target.value)} 
            placeholder="Enter bonus"
          />
        </p>

        <button 
          className={styles.btn} 
          onClick={handleSave} 
          style={{ marginTop: "1rem", padding: "0.8rem 1.5rem", borderRadius: "6px", backgroundColor: "#1F406E", color: "white" }}
        >
          Save
        </button>
      </div>
    </div>
      </main>
    </div>
    </div>
  );
}
