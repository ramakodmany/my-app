
'use client';
import React, { useEffect, useState } from "react";
import { FaAddressBook, FaBars, FaArrowRight, FaArrowUp } from "react-icons/fa";
import styles from "./page.module.css"; 
import Link from "next/link";

function IntelligentHire() {
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
    <div className={menuOpen ? styles.menuOpen : ""}>
      {/* Header */}
      <header className={styles.header}>
        <section className={styles.flex}>
          <a href="#home" className={styles.logo}>
            <FaAddressBook aria-hidden="true" />
            <span> Intelligent Hire</span>
          </a>

          <nav
            id="primary-navigation"
            className={`${styles.navbar} ${menuOpen ? styles.active : ""}`}
            aria-label="Primary"
          >
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact Us
            </a>
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

      {/* Main */}
      <main>
        {/* Home section */}
        <div className={styles.home} id="home">
          <section className={styles.flex}>
            <div className={styles.content}>
              <h3>
                The future of hiring isn't human{" "}
                <span>It's code interviewing code.</span>
              </h3>
              <p>Hiring humans the machine way faster, smarter, unbiased.</p>
              <Link href="/jobposting" className={styles.btn}>
                View Jobs Posting <FaArrowRight aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.image}>
              <img src="/photo/2.png" alt="" />
            </div>
          </section>
        </div>

        {/* About section */}
        <section className={styles.about} id="about">
          <div className={styles.heading}>
            Why <span>choose</span> us?
          </div>

          <div className={styles.row}>
            <div className={styles.image}>
              <img src="/photo/1.png" alt="" />
            </div>

            <div className={styles.content}>
              <h3>
                Empower Your <span>Engineering Potential </span>With Us
              </h3>
              <p>
                Choose us because we are a community of engineers passionate
                about technology and solving complex problems, and we provide you
                with a collaborative and supportive environment to reach your
                full potential. And because we focus on developing leading-edge
                technological solutions and are always striving to attract the
                best engineering talent to contribute to our ambitious vision.
              </p>

              <Link href="/login" className={styles.btn}>
                Upload your CV <FaArrowUp aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section className={styles.contact} id="contact">
          <div className={styles.heading}>
            Contact <span>US</span>
          </div>

          <div className={styles.contactRow}>
         {/* Contact Info */}
            <div className={styles.contactInfo}>
              <p><i className="fas fa-envelope"></i> saraharnaout4@gmail.com</p>
              <p><i className="fas fa-phone"></i> 0938885620</p>
              <p><i className="fas fa-map-marker-alt"></i> Damascus, Syria </p>
            </div>

         {/* Contact Form */}
            <form className={styles.contactForm}>
              <input type="email" value="saraharnaout4@gmail.com" readOnly />

              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows={5} required></textarea>
              <button type="submit" className={styles.btn}>Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer} id="contact">
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <h2>Intelligent Hire</h2>
            <p>Smart, unbiased, and efficient hiring solutions.</p>
          </div>

        < div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; Intelligent Hire.</p>
      </div>
    </footer>

    </div>
  );
}
export default IntelligentHire;
