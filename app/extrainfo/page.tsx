"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

function ExtraInfo() {
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
    <div className={styles.extrainfo}>
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
              <Link href="/jobposting"><i className="bi bi-arrow-right-circle"></i> View Job post</Link>
            </li>
            <li>
              <Link href="/userprofile">
                <i className="bi bi-speedometer2"></i> User profile
              </Link>
            </li>
            <li>
              <Link href="/uploadcv">
                <i className="bi bi-file-earmark-arrow-up"></i> Upload CV
              </Link>
            </li>
            <li>
              <Link href="/onlineinterview">
                <i className="bi bi-camera-video"></i> Online Interview
              </Link>
            </li>
            <li>
              <Link href="/secondinterview">
                <i className="bi bi-calendar-check"></i> Second Interview
              </Link>
            </li>
            <li>
              <Link href="/extrainfo" className={styles.active}>
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
      <div className={styles["main-content-online"]}>
        <div className={styles["container-extra"]}>
          {/* Image Box */}
          <div className={styles["image-box"]}>
            <img src="/photo/4.png" alt="Profile" />
          </div>

          {/* Form Box */}
          <div className={styles["form-box-extra"]}>
            <h2>Personal Information</h2>
            <form>
              <div className={styles["form-row"]}>
                <div className={styles["form-group"]}>
                  <label htmlFor="father">Father name</label>
                  <input type="text" id="father" name="father" />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="mother">Mother name</label>
                  <input type="text" id="mother" name="mother" />
                </div>
              </div>

              <div className={styles["form-row"]}>
                <div className={styles["form-group"]}>
                  <label htmlFor="mobile">Phone number</label>
                  <input type="number" id="mobile" name="mobile" />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="national_id" >National ID</label>
                  <input type="number" id="national_id" name="national_id" />
                </div>
              </div>

              <div className={styles["form-row"]}>
                <div className={styles["form-group"]}>
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" name="address" />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" name="city" />
                </div>
              </div>

              <div className={styles["form-group"]}>
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender">
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>

              <div className={styles["form-group"]}>
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" />
              </div>

              <div className={styles["form-group"]}>
                <label htmlFor="profile">Upload Profile Photo</label>
                <input type="file" id="profile" name="profile" accept="image/*" />
              </div>

              <button type="submit" className={styles.btn}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtraInfo;
