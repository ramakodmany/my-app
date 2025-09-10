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
          <i className ="fas fa-home"></i> HR Dashboard
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/HR/hrdashboard" className={styles.active}>
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
              <i className ="fas fa-home"></i> HR Dashboard
            </h1>
          </div>
        </header>


        {/* Widgets */}
        <div className={styles['widgets-grid']}>
          <div className={styles.widget}>
            <div className={styles['widget-header']}>
              <i className="fas fa-briefcase"></i> Job Posts
            </div>
            <div className={styles['metric-card']}>
              <div className={styles['metric-icon']}>
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div>
                <div className={styles['metric-value']}>12</div>
                <div className={styles['metric-label']}>Available Positions</div>
              </div>
            </div>
            <div className={styles['chart-container']}>
              <Link href="/HR/jobpost">View Job Posts</Link>
            </div>
          </div>

          <div className={styles.widget}>
            <div className={styles['widget-header']}>
              <i className="fas fa-file-upload"></i> Uploaded CVs
            </div>
            <div className={styles['metric-card']}>
              <div className={styles['metric-icon']}>
                <i className="fas fa-user"></i>
              </div>
              <div>
                <div className={styles['metric-value']}>89</div>
                <div className={styles['metric-label']}>CVs Submitted</div>
              </div>
            </div>
            <div className={styles['chart-container']}>
              <Link href="/HR/uploadcv">View Uploaded CVs</Link>
            </div>
          </div>


          <div className={styles.widget}>
            <div className={styles['widget-header']}>
              <i className="fas fa-users"></i> Employees
            </div>
            <div className={styles['metric-card']}>
              <div className={styles['metric-icon']}>
                <i className="fas fa-address-card"></i>
              </div>
              <div>
                <div className={styles['metric-value']}>150</div>
                <div className={styles['metric-label']}>Active Employees</div>
              </div>
            </div>
            <div className={styles['chart-container']}>
              <Link href="/HR/employees">View Employees</Link>
            </div>
          </div>

        <div className={styles.widget}>
            <div className={styles['widget-header']}>
              <i className="fas fa-calendar-times"></i> Leave Requests
            </div>
            <div className={styles['metric-card']}>
              <div className={styles['metric-icon']}>
                <i className="fas fa-plane-departure"></i>
              </div>
              <div>
                <div className={styles['metric-value']}>24</div>
                <div className={styles['metric-label']}>Pending Requests</div>
              </div>
            </div>
            <div className={styles['chart-container']}>
              <Link href="/HR/leaverequest">View Leave Requests</Link>
            </div>
        </div>

        <div className={styles.widget}>
            <div className={styles['widget-header']}>
              <i className="fas fa-building"></i> Departments
            </div>
            <div className={styles['metric-card']}>
              <div className={styles['metric-icon']}>
                <i className="fas fa-sitemap"></i>
              </div>
              <div>
                <div className={styles['metric-value']}>6</div>
                <div className={styles['metric-label']}>Departments</div>
              </div>
            </div>
            <div className={styles['chart-container']}>
              <Link href="/HR/departments">View Departments</Link>
            </div>
        </div>

        <div className={styles.widget}>
            <div className={styles['widget-header']}>
              <i className="fas fa-user-slash"></i> Resignation Predictions
            </div>
            <div className={styles['metric-card']}>
              <div className={styles['metric-icon']}>
                <i className="fas fa-chart-line"></i>
              </div>
              <div>
                <div className={styles['metric-value']}>20%</div>
              </div>
            </div>
            <div className={styles['chart-container']}>
              <Link href="/HR/ResignationPredictions">Resignation Predictions</Link>
            </div>
        </div>

        <div className={styles.widget}>
            <div className={styles['widget-header']}>
              <i className="fas fa-arrow-up"></i>Promotion Prediction
            </div>
            <div className={styles['metric-card']}>
              <div className={styles['metric-icon']}>
                <i className="fas fa-plus"></i>
              </div>
              <div>
                <div className={styles['metric-value']}>20%</div>
              </div>
            </div>
            <div className={styles['chart-container']}>
              <Link href="/HR/PromotionPrediction">Promotion Prediction</Link>
            </div>
        </div>

        <div className={styles.widget}>
            <div className={styles['widget-header']}>
              <i className="fas fa-briefcase"></i>Add Jobs
            </div>
            <div className={styles['metric-card']}>
              <div className={styles['metric-icon']}>
                <i className="fas fa-briefcase"></i>
              </div>
              <div>
                <div className={styles['metric-value']}>20%</div>
              </div>
            </div>
            <div className={styles['chart-container']}>
              <Link href="/HR/addjob">Add Job</Link>
            </div>
        </div>

        <div className={styles.widget}>
            <div className={styles['widget-header']}>
              <i className="fas fa-folder-open"></i> Second Interview Mark
            </div>
            <div className={styles['metric-card']}>
              <div className={styles['metric-icon']}>
                <i className="fas fa-clipboard-check"></i>
              </div>
              <div>
                <div className={styles['metric-value']}>20</div>
              </div>
            </div>
            <div className={styles['chart-container']}>
              <Link href="/HR/secondinterview">Set Second Interview Mark </Link>
            </div>
        </div>

        </div>
      </main>
    </div>
    </div>
  );
}
