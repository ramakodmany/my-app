"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

function OnlineInterview() {
  const [sidebarActive, setSidebarActive] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
    { sender: "user", text: "I want a chat interface like yours." },
  ]);
  const [input, setInput] = useState("");

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

  // Handle sending messages
  const sendMessage = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className={styles.onlineinterview}>
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
                <Link href="/onlineinterview" className={styles.active}>
                  <i className="bi bi-camera-video"></i> Online Interview
                </Link>
              </li>
              <li>
                <Link href="/secondinterview"> <i className="bi bi-calendar-check"></i> Second Interview
                </Link>
              </li>
              <li>
                <Link href="/extrainfo">
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
        <div className={styles["main-content"]}>
          <div className={styles["chat-container"]}>
            <div className={styles["user-info"]}>
              <h3>👤 Sarah Arnaout</h3>
              <p>🏢 Intelligent Hire</p>
            </div>

            {/* Chat Box */}
            <div className={styles["chat-box"]}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`${styles.message} ${
                    msg.sender === "user" ? styles.user : styles.bot
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form className={styles["input-area"]} onSubmit={sendMessage}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                required
              />
              <button type="submit" className={styles.btn}>Send</button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default OnlineInterview;
