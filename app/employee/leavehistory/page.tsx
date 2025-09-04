"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaUsers,
  FaHome,
  FaCalendarPlus,
  FaHistory,
  FaBuilding,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import styles from "./page.module.css"; // نفس الـ CSS تبع Dashboard و RequestLeave

export default function LeaveHistory() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const leaveData = [
    { id: 1, type: "Vacation", start: "2024-05-01", end: "2024-05-05", status: "Approved" },
    { id: 2, type: "Sick Leave", start: "2024-04-10", end: "2024-04-12", status: "Pending" },
    { id: 3, type: "Emergency", start: "2024-03-22", end: "2024-03-23", status: "Rejected" },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContainer}>
        {/* Sidebar */}
        <aside
          className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}
        >
          <div className={styles.logo}>
            <i className="fa-solid fa-users"></i> Employee
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/employee/employeedashboard">
                  <i className="fas fa-home"></i> Dashboard
                </Link>
              </li>
              <li>
                <Link href="/employee/Requestleavework">
                  <i className="fas fa-calendar-plus"></i> Request Leave Work
                </Link>
              </li>
              <li>
                <Link
                  href="/employee/leavehistory"
                  className={styles.active}
                >
                  <i className="fas fa-history"></i> Leave History
                </Link>
              </li>
              <li>
                <Link href="/employee/jobinfo">
                  <i className="fas fa-building"></i> Job Information
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
                <i className="fas fa-history"></i> Leave History
              </h1>
            </div>
          </header>

          {/* Table Section */}
          <div className={styles["table-container"]}>
            <h2>
              <FaHistory /> My Leave Requests
            </h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Leave Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {leaveData.map((leave) => (
                  <tr key={leave.id}>
                    <td>{leave.id}</td>
                    <td>{leave.type}</td>
                    <td>{leave.start}</td>
                    <td>{leave.end}</td>
                    <td>
                      <span className={`${styles.status} ${styles[leave.status.toLowerCase()]}`}>
                        {leave.status}
                      </span>
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
