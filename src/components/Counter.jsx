import React, { useState, useEffect } from "react";

const CountdownBar = () => {
  const targetDate = new Date("2025-06-13T00:20:00Z");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerStyle = {
    width: "100vw",
    backgroundColor: "#ffd600",
    color: "black",
    padding: "12px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    textAlign:"center"
  };

  if (!timeLeft) {
    return (
      <div style={containerStyle}>
        <span>Empezamos.!</span>
      </div>
    );
  }

  return (
    <div style={containerStyle} role="timer" aria-live="polite" aria-atomic="true">
      <span style={{fontWeight:"bold"}}>
        Empieza en:{" "}
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </span>
    </div>
  );
};

export default CountdownBar;
