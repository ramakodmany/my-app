"use client";
import React, { useState, useEffect } from "react";
import { FaUsers, FaHome, FaCalendarPlus, FaHistory, FaBuilding, FaBars, FaSignOutAlt, FaTachometerAlt, FaPlaneDeparture, FaCalendarAlt, FaSitemap } from "react-icons/fa";
import Link from "next/link";
import styles from "./page.module.css";

export default function EmployeeDashboard() {
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

  return (
    <div className={styles.dashboard}>
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <div className={styles.logo}>
          <i className  ="fa-solid fa-users"></i> Employee
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/employee/employeedashboard" className={styles.active}>
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
              <Link href="/employee/jobinfo">
                <i className="fas fa-building"></i> Job Information
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
              <i className  ="fa-solid fa-users"></i> Employee Dashboard
            </h1>
          </div>
        </header>

        {/* Employee Info */}
        <div className={styles['employee-info-card']}>
          <div className={styles.details}>
            <h2>Sarah Arnaout</h2>
            <p>
              <span>Email:</span> sarah.arnaout@gmail.com
            </p>
            <p>
              <span>Phone:</span> +963 938 885 620
            </p>
            <p>
              <span>Department:</span> IT
            </p>
            <p>
              <span>National ID:</span> 12345678910
            </p>
          </div>
        </div>

        {/* Widgets */}
        <div className={styles['widgets-grid']}>
          <div className={styles.widget}>
            <div className={styles['widget-header']}>
              <i className="fas fa-calendar-plus"></i> Request Leave
            </div>
            <div className={styles['metric-card']}>
              <div className={styles['metric-icon']}>
                <FaPlaneDeparture />
              </div>
              <div>
                <div className={styles['metric-value']}>Submit New</div>
                <div className={styles['metric-label']}>Send new leave request</div>
              </div>
            </div>
            <div className={styles['chart-container']}>
              <Link href="/employee/Requestleavework">Request Now</Link>
            </div>
          </div>

          <div className={styles.widget}>
            <div className={styles['widget-header']}>
              <i className="fas fa-history"></i> Leave History
            </div>
            <div className={styles['metric-card']}>
              <div className={styles['metric-icon']}>
                <FaCalendarAlt />
              </div>
              <div>
                <div className={styles['metric-value']}>5 Leaves</div>
                <div className={styles['metric-label']}>Last 6 months</div>
              </div>
            </div>
            <div className={styles['chart-container']}>
              <Link href="/employee/leavehistory">View History</Link>
            </div>
          </div>

          <div className={styles.widget}>
            <div className={styles['widget-header']}>
              <i className="fas fa-building"></i> Department
            </div>
            <div className={styles['metric-card']}>
              <div className={styles['metric-icon']}>
                <FaSitemap />
              </div>
              <div>
                <div className={styles['metric-value']}>IT Dept.</div>
                <div className={styles['metric-label']}>Manager: Tarek B.</div>
              </div>
            </div>
            <div className={styles['chart-container']}>
              <Link href="/employee/jobinfo">View Details</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}
