"use client";
import { useState } from "react";
import "boxicons/css/boxicons.min.css";
import styles from "./page.module.css";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className={styles.loginpage}> 
      <div
        className={`${styles.container} ${isRegister ? styles.active : ""}`}
      >
        {/* Login Form */}
        <div className={`${styles["form-box"]} ${styles.login}`}>
          <form className={styles.form}>
            <h1>Login</h1>

            <div className={styles["input-box"]}>
              <input type="email" placeholder="Email" required />
              <i className="bx bxs-envelope"></i>
            </div>

            <div className={styles["input-box"]}>
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <a type="submit" className={styles.btn} href="/userprofile">
              Login
            </a>

            <p>Login with social platforms</p>
            <div className={styles["scoial-icons"]}>
              <a href="https://mail.google.com/mail/u/0/">
                <i className="bx bxl-google"></i>
              </a>
              <a href="https://www.facebook.com/">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/login">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div className={`${styles["form-box"]} ${styles.register}`}>
          <form className={styles.form}>
            <h1>Registration</h1>

            <div className={styles["input-box"]}>
              <input type="text" placeholder="First Name" required />
              <i className="bx bxs-user"></i>
            </div>

            <div className={styles["input-box"]}>
              <input type="text" placeholder="Last Name" required />
              <i className="bx bxs-user"></i>
            </div>

            <div className={styles["input-box"]}>
              <input type="email" placeholder="Email" required />
              <i className="bx bxs-envelope"></i>
            </div>

            <div className={styles["input-box"]}>
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <button type="submit" className={styles.btn}>
              Register
            </button>

            <p>Register with social platforms</p>
            <div className={styles["scoial-icons"]}>
              <a href="https://mail.google.com/mail/u/0/">
                <i className="bx bxl-google"></i>
              </a>
              <a href="https://www.facebook.com/">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/login">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </form>
        </div>

        {/* Toggle Box */}
        <div className={styles["toggle-box"]}>
          <div className={`${styles["toggle-panel"]} ${styles["toggle-left"]}`}>
            <h1>
              Hello <span>Welcome!</span>
            </h1>
            <p>Don't have an account ?</p>
            <button
              type="button"
              className={styles.btn}
              onClick={() => setIsRegister(true)}
            >
              Register
            </button>
          </div>

          <div
            className={`${styles["toggle-panel"]} ${styles["toggle-right"]}`}
          >
            <h1>Welcome!</h1>
            <p>Already have an account ?</p>
            <button
              type="button"
              className={styles.btn}
              onClick={() => setIsRegister(false)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
