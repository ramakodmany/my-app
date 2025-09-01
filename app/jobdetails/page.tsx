"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { FaAddressBook, FaBars, FaArrowRight, FaArrowUp } from "react-icons/fa";



function JobDetails() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

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

    <div className={`jobposting ${styles.jobposting}`}>
      <header className={styles.header}>
        <section className={styles.flex}>
          <Link href="/" className={styles.logo}>
            <FaAddressBook aria-hidden="true" />
            <span> Intelligent Hire</span>
          </Link>

          <nav
            id="primary-navigation"
            className={`${styles.navbar} ${menuOpen ? styles.active : ""}`}
            aria-label="Primary">
            <Link href="/" onClick={closeMenu}> Home </Link>
            <Link href="/" onClick={closeMenu}> About</Link>
            <Link href="/" onClick={closeMenu}> Contact Us </Link>
            <Link href="/jobposting" onClick={closeMenu}> Job Post </Link>
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
      <div className={styles["ad-container"]}>
        <h1 className={styles["ad-title"]}>
          Frontend Web Developer Internship
        </h1>

        <p className={styles["ad-description"]}>
          Join our dynamic team as a Frontend Web Developer Intern. You will work
          closely with our senior developers on exciting projects using HTML,
          CSS, JavaScript, and modern frameworks like React or Vue. This is a
          great opportunity to gain real-world experience, build your portfolio,
          and potentially secure a full-time role.
          <br />
          <br />
        </p>

        <div className={styles.buttonscontainer}>
            <a href="/login" className={`${styles.btn}`}>
                <i className="bi bi-send-fill me-2"></i>Apply Now
            </a>
            <a href="/jobposting" className={`${styles.btn}`}>
                <i className="bi bi-send-fill me-2"></i>Job Posting
            </a>
        </div>
      </div>
    </div>
  );
}
export default JobDetails;