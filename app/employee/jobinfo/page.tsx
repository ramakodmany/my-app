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
import styles from "./page.module.css";

export default function JobInfo() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const jobDetails = {
    department: "IT",
    jobName: "Frontend Developer",
    description: "Responsible for building user interfaces using React and Next.js.",
    status: "Active",
  };

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
                <Link href="/employee/leavehistory">
                  <i className="fas fa-history"></i> Leave History
                </Link>
              </li>
              <li>
                <Link
                  href="/employee/jobinfo"
                  className={styles.active}
                >
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
                <i className="fas fa-building"></i> Job Details
              </h1>
            </div>
          </header>

          {/* Job Info Card */}
          <div className={styles["job-card"]}>
            <h2>Employee Job Information</h2>
            <p>
              <strong>Department:</strong> {jobDetails.department}
            </p>
            <p>
              <strong>Job Name:</strong> {jobDetails.jobName}
            </p>
            <p>
              <strong>Description:</strong> {jobDetails.description}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`${styles.status} ${
                  styles[jobDetails.status.toLowerCase()]
                }`}
              >
                {jobDetails.status}
              </span>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
