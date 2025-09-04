"use client";
import styles from "./page.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAddressBook, FaBars, FaArrowRight, FaArrowUp } from "react-icons/fa";

function JobPosting() {
  const jobs = [
    { id: 1, title: "HTML", desc: "Markup language for web pages." },
    { id: 2, title: "CSS", desc: "Styles the layout of web pages." },
    { id: 3, title: "JavaScript", desc: "Adds interactivity to websites." },
    { id: 4, title: "PHP", desc: "Server-side scripting language." },
    { id: 5, title: "SQL", desc: "Language for managing databases." },
  ];
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
    // Close menu on resize / ESC
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 992) setMenuOpen(false);
      };
  
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
  
      window.addEventListener("resize", handleResize);
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);
  
    const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.jobposting}>
      {/* Header */}
      <header className={styles.header}>
        <section className={styles.flex}>
          <Link href="/" className={styles.logo}>
            <FaAddressBook aria-hidden="true" />
            <span> Intelligent Hire</span>
          </Link>

          <nav
            id="primary-navigation"
            className={`${styles.navbar} ${menuOpen ? styles.active : ""}`}
            aria-label="Primary"
          >
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/" onClick={closeMenu}>
              About
            </Link>
            <Link href="/" onClick={closeMenu}>
              Contact Us
            </Link>
          </nav>

          <Link href="/login" className={styles.btn}>
            Login
          </Link>

          <button
            id="menu-btn"
            className={styles.menuBtn}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <FaBars />
          </button>
        </section>
      </header>
      <div className={styles["form-container"]}>
        <form>
          <h2>ADS</h2>
          <table className={styles.table}> 
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th className={styles.th}>Number</th>
                <th className={styles.th}>Title</th>
                <th className={styles.th}>Description</th>
                <th className={styles.th}>Details</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {jobs.map((job) => (
                <tr key={job.id} className={styles.tr}>
                  <td className={styles.td}>{job.id}</td>
                  <td className={styles.td}>{job.title}</td>
                  <td className={styles.td}>{job.desc}</td>
                  <td className={styles.td}>
                    <Link href="/jobdetails" className={styles["btn"]}>
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
export default JobPosting;
