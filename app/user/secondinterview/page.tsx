"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

function SecondInterview() {
  const [sidebarActive, setSidebarActive] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  // Handle responsive sidebar
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth <= 992) setSidebarActive(false);
    else setSidebarActive(true);
  }, [windowWidth]);

  return (
    <div className={styles.secondInterview}>
      {/* Toggle Button */}
      <button
        className={styles.toggleBtn}
        onClick={() => setSidebarActive(!sidebarActive)}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${
          sidebarActive ? styles.active : styles.hidden
        }`}
      >
        <div className={styles.logo}>Dashboard</div>
        <div className={styles.welcomemessage}>
                Welcome !
            </div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <i className="bi bi-speedometer2"></i> Home
              </Link>
            </li>
            <li>
              <Link href="/user/jobposting"><i className="bi bi-arrow-right-circle"></i> View Job post</Link>
            </li>
            <li>
              <Link href="/user/userprofile">
                <i className="bi bi-speedometer2"></i> User profile
              </Link>
            </li>
            <li>
              <Link href="/user/uploadcv">
                <i className="bi bi-file-earmark-arrow-up"></i> Upload CV
              </Link>
            </li>
            <li>
              <Link href="/user/onlineinterview">
                <i className="bi bi-camera-video"></i> Online Interview
              </Link>
            </li>
            <li>
              <Link href="/user/secondinterview" className={styles.active}>
                <i className="bi bi-calendar-check"></i> Second Interview
              </Link>
            </li>
            <li>
              <Link href="/user/extrainfo">
                <i className="bi bi-info-circle"></i> Extra Information
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="bi bi-box-arrow-right"></i> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className={styles["main-content"]}>
        <h2 className={styles.title}>Second Interview Details</h2>

        <div className={styles.detailsWrapper}>
          <div className={styles["interview-details-card"]}>
            <h3>Your Second Interview is Scheduled!</h3>
            <p>
              <strong>Date:</strong> Monday, June 10, 2025
            </p>
            <p>
              <strong>Time:</strong> 2:00 PM - 3:00 PM (Your Local Time)
            </p>
            <p>
              <strong>Interviewer:</strong> Ms. Tarek
            </p>
            <p>We look forward to speaking with you again!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondInterview;
