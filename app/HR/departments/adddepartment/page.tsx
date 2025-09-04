"use client";
import React, { useState, useEffect } from "react";
import { FaUsers, FaHome, FaCalendarPlus, FaHistory, FaBuilding, FaBars, FaSignOutAlt, FaTachometerAlt, FaPlaneDeparture, FaCalendarAlt, FaSitemap } from "react-icons/fa";
import Link from "next/link";
import styles from "./page.module.css";

export default function AddDepartment() {
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

    const [deptName, setDeptName] = useState("");
    const [salaryRange, setSalaryRange] = useState("");
    const [managerName, setManagerName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("New Department:", { deptName, salaryRange, managerName });
    };

  const handleCancel = () => {
    setDeptName("");
    setSalaryRange("");
    setManagerName("");
  };

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
              <Link href="/HR/leaverequest" >
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

          <div className={styles["container-edit"]}>
      <h2><i className="fas fa-plus-circle"></i> New Department</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dept-name">Department Name</label>
        <input
          type="text"
          id="dept-name"
          name="deptName"
          placeholder="e.g. IT, Marketing"
          value={deptName}
          onChange={(e) => setDeptName(e.target.value)}
          required
        />

        <label htmlFor="salary-range">Salary Range</label>
        <input
          type="text"
          id="salary-range"
          name="salaryRange"
          placeholder="e.g. 20-40"
          value={salaryRange}
          onChange={(e) => setSalaryRange(e.target.value)}
          required
        />

        <label htmlFor="manager-name">Manager Name</label>
        <input
          type="text"
          id="manager-name"
          name="managerName"
          placeholder="e.g. John Smith"
          value={managerName}
          onChange={(e) => setManagerName(e.target.value)}
          required
        />

        <div style={{ marginTop: "1rem" }}>
          <button type="submit" className={styles.btn}>Add Department</button>
          <button
            type="button"
            className={styles.btnSecondary}
            id="btn-secondary"
            onClick={handleCancel}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
      </main>
    </div>
    </div>
  );
}
