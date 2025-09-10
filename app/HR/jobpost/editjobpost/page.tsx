"use client";
import React, { useState, useEffect } from "react";
import { FaUsers, FaHome, FaCalendarPlus, FaHistory, FaBuilding, FaBars, FaSignOutAlt, FaTachometerAlt, FaPlaneDeparture, FaCalendarAlt, FaSitemap } from "react-icons/fa";
import Link from "next/link";
import styles from "./page.module.css";

export default function EditJobPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Job Updated:", { title, description });
  };


  return (
    <div className={styles.dashboard}>
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar}`}>
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
              <Link href="/HR/jobpost" className={styles.active}>
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
            <h1>
              <i className ="fas fa-briefcase"></i>Edit Job Posts
            </h1>
          </div>
        </header>
      
      <div className={styles['container-edit']}>
      <h2>Edit Job Posting</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Job Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="description">Job Description</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <div className={styles.actions}>
          <button type="submit" className={styles.btn}>
            Save Changes
          </button>
          <button
            type="button"
            className={styles.btnSecondary}
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

