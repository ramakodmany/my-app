"use client"; 

import { useEffect, useState } from "react";
import "boxicons/css/boxicons.min.css";
import Link from "next/link"; 

import styles from "./page.module.css";

function UploadCV() {
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
    <div className={styles.uploadcv}>

      <button
        className={styles.toggleBtn}
        onClick={() => setSidebarActive(!sidebarActive)}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Sidebar*/}
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
              <Link href="/jobposting"><i className="bi bi-arrow-right-circle"></i> View Job post</Link>
            </li>
            <li>
              <Link href="/userprofile">
                <i className="bi bi-speedometer2"></i> User profile
              </Link>
            </li>
            <li>
              <Link href="/uploadcv"  className={styles.active}>
              <i className="bi bi-file-earmark-arrow-up"></i> Upload CV</Link>
            </li>
            <li>
              <Link href="/onlineinterview"><i className="bi bi-camera-video"></i> Online Interview</Link>
            </li>
            <li>
              <Link href="/secondinterview"><i className="bi bi-calendar-check"></i> Second Interview</Link>
            </li>
            <li>
              <Link href="/extrainfo"><i className="bi bi-info-circle"></i> Extra Information</Link>
            </li>
            <li>
              <Link href=""><i className="bi bi-box-arrow-right"></i> Logout</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className={styles.mainContentUpload}>
        <div className={styles.container}>
          <div className={styles["form-box"]}>
            <form>
              <h1>Welcome</h1>

                <div className={styles["input-box"]}>
                    <input type="tel"  placeholder="phone number" pattern="[0-9]{10}" required />
                    <i className="bx bx-phone-call"></i>
                </div>

              <div className="cv-upload-container">
                <label htmlFor="cv-upload" className={styles["cv-upload-label"]}>
                  <p>Select CV file (PDF or DOCX)</p>
                  <i className="fas fa-cloud-upload-alt"></i>
                  <input
                    type="file"
                    id="cv-upload"
                    accept=".pdf,.docx"
                    className="cv-upload-input"
                  />
                </label>
                <br />
                <Link id="upload-btn" className={styles.btn} href="/User/onlineinterview">
                  Submit
                </Link>
              </div>
            </form>
          </div>

          <div className={styles["toggle-box"]}>
            <div className={`${styles["toggle-panel"]} ${styles["toggle-left"]}`}>
              <h1>Great having you</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default  UploadCV;