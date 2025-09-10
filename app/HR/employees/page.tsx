"use client";
import React, { useState, useEffect } from "react";
import { FaUsers, FaHome, FaCalendarPlus, FaHistory, FaBuilding, FaBars, FaSignOutAlt, FaTachometerAlt, FaPlaneDeparture, FaCalendarAlt, FaSitemap } from "react-icons/fa";
import Link from "next/link";
import styles from "./page.module.css";

export default function Employees() {
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

  const employees = [
    { id: 1, firstName: "Sarah", lastName: "Arnaout",department:"IT", email: "sarah.arnaout@gmail.com" },
    { id: 2, firstName: "Rama", lastName: "Alkodmani", department:"IT" ,email: "rama.alkodmani@gmail.com" },
    { id: 3, firstName: "Roaa", lastName: "Jadini", department:"IT",email: "roaa.jadini@gmail.com" },
  ];

  const handleAction = (id: number, action: string) => {
    console.log(`Action: ${action}, Employee ID: ${id}`);
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
              <Link href="/HR/employees" className={styles.active}>
                <i className="fas fa-users"></i> Employees
              </Link>
            </li>
            <li>
              <Link href="/HR/leaverequest">
                <i className="fas fa-calendar-alt"></i> Leave Requests
              </Link>
            </li>
            <li>
              <Link href="/HR/departments" >
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
              <i className ="fas fa-users"></i> Employees Information
            </h1>
          </div>
        </header>

        <div className={styles["table-container"]}>
            <h2><i className="fas fa-users"></i> Employees</h2>
            <table>
                <thead className={styles.table}>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department</th>
                    <th>Actions</th>
                    </tr>
                </thead>
            <tbody>
                {employees.map((emp) => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.email}</td>
                        <td>{emp.department}</td>
                        <td>
                            <Link className={styles.btn} href="/HR/employees/Bonus"
                                style={{ marginRight: "5px" }} > Bonus </Link>
                            <Link className={styles.btn} href="/HR/employees/Evaluation"
                                style={{ marginRight: "5px" }} > Evaluation </Link>
                            <Link className={styles.btn} href='/HR/employees/Salary'> Salary </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
    </div>

      </main>
    </div>
    </div>
  );
}
