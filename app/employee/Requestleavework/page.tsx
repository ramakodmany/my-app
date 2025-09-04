"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaUsers, FaHome, FaCalendarPlus, FaHistory, FaBuilding, FaBars, FaSignOutAlt,} from "react-icons/fa";
import styles from "./page.module.css"; 

export default function RequestLeaveWork() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContainer}>
        {/* Sidebar */}
        <aside
          className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}
        >
          <div className={styles.logo}>
            <i className  ="fa-solid fa-users"></i> Employee
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/employee/employeedashboard">
                  <i className="fas fa-home"></i> Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/employee/Requestleavework"
                  className={styles.active}
                >
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
                <i className="fas fa-calendar-plus"></i> Request Leave
              </h1>
            </div>
          </header>

          {/* Form Section */}
          <section className={styles["form-container"]}>
            <h2>Leave Request Form</h2>
            <form>
              <div className={styles["form-group"]}>
                <label htmlFor="leave-type">Leave Type</label>
                <select id="leave-type" name="leave-type" required>
                  <option value="">-- Select --</option>
                  <option value="sick">Sick Leave</option>
                  <option value="vacation">Vacation</option>
                  <option value="emergency">Emergency Leave</option>
                  <option value="maternity">Maternity Leave</option>
                  <option value="bereavement">Bereavement Leave</option>
                  <option value="marriage">Marriage Leave</option>
                  <option value="training">Training Leave</option>
                  <option value="unpaid">Unpaid Leave</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles["form-group"]}>
                <label htmlFor="start-date">Start Date</label>
                <input type="date" id="start-date" name="start-date" required />
              </div>

              <div className={styles["form-group"]}>
                <label htmlFor="end-date">End Date</label>
                <input type="date" id="end-date" name="end-date" required />
              </div>

              <div className={styles["form-group"]}>
                <label htmlFor="reason">Reason</label>
                <textarea
                  id="reason"
                  name="reason"
                  placeholder="Explain your reason..."
                  required
                ></textarea>
              </div>

              <div className={styles["form-group"]}>
                <button type="submit" className={styles.btn}>Submit Request</button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
