"use client"; 

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

function UserProfile() {
  const [sidebarActive, setSidebarActive] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

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
    <div className={styles.container}>
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
              <Link href="/"><i className="bi bi-speedometer2"></i> Home</Link>
            </li>
            <li>
              <Link href="/user/jobposting"><i className="bi bi-arrow-right-circle"></i> View Job post</Link>
            </li>
            <li>
              <Link href="/user/userprofile" className={styles.active}>
                <i className="bi bi-speedometer2"></i> User profile
              </Link>
            </li>
            <li>
              <Link href="/user/uploadcv"> <i className="bi bi-file-earmark-arrow-up"></i> Upload CV</Link>
            </li>
            <li>
              <Link href="/user/onlineinterview"><i className="bi bi-camera-video"></i> Online Interview</Link>
            </li>
            <li>
              <Link href="/user/secondinterview"><i className="bi bi-calendar-check"></i> Second Interview</Link>
            </li>
            <li>
              <Link href="/user/extrainfo"><i className="bi bi-info-circle"></i> Extra Information</Link>
            </li>
            <li>
              <Link href=""><i className="bi bi-box-arrow-right"></i> Logout</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <h2 className={styles.center}>Welcome !</h2>

        <div className={styles.progressContainer}>
          <div className={styles.progressLine}></div>

          <div className={styles.step}>
            <Link href="/user/uploadcv">
              <div className={`${styles.circle} ${styles.active}`}>
                <i className="bi bi-upload"></i>
              </div>
            </Link>
            <div className={styles.label}>Upload your CV</div>
          </div>

          <div className={styles.step}>
            <Link href="/user/onlineinterview">
              <div className={styles.circle}>
                <i className="bi bi-camera-video"></i>
              </div>
            </Link>
            <div className={styles.label}>Online Interview</div>
          </div>

          <div className={styles.step}>
            <Link href="/user/secondinterview">
              <div className={styles.circle}>
                <i className="bi bi-calendar-check"></i>
              </div>
            </Link>
            <div className={styles.label}>Second Interview</div>
          </div>

          <div className={styles.step}>
            <Link href="/user/extrainfo">
              <div className={styles.circle}>
                <i className="bi bi-pencil-square"></i>
              </div>
            </Link>
            <div className={styles.label}>Input Extra Information</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
