"use client";
import React, { useState, useEffect } from "react";
import { FaUsers, FaHome, FaCalendarPlus, FaHistory, FaBuilding, FaBars, FaSignOutAlt, FaTachometerAlt, FaPlaneDeparture, FaCalendarAlt, FaSitemap } from "react-icons/fa";
import Link from "next/link";
import styles from "./page.module.css";

export default function Departments() {
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

    const departments = [
        { name: "IT", salaryRange: "10-20", managerId: 2, employees: 50 },
        { name: "Marketing", salaryRange: "20-30", managerId: 4, employees: 30 },
  ];

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
              <Link href="/HR/departments" className={styles.active}>
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
              <i className ="fas fa-building"></i> Departments
            </h1>
          </div>
        </header>

          <div className={styles["table-container"]}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2><i className="fas fa-building"></i> Departments</h2>
        <Link className={styles.btn} href="/HR/departments/adddepartment">
          <i className="fas fa-plus"></i> Add Department
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary Range</th>
            <th>Manager ID</th>
            <th>No. of Employees</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept, index) => (
            <tr key={index}>
              <td>{dept.name}</td>
              <td>{dept.salaryRange}</td>
              <td>{dept.managerId}</td>
              <td>{dept.employees}</td>
              <td>
                <button className={styles['btn-reject']}>Delete</button>
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
