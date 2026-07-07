import React, { useState } from "react";
import "./AgeCalculator.css";

function AgeCalculator() {

  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState(null);
  const [totalDays, setTotalDays] = useState(0);
const [totalHours, setTotalHours] = useState(0);
const [totalMinutes, setTotalMinutes] = useState(0);
const [totalSeconds, setTotalSeconds] = useState(0);

  const calculateAge = () => {

    if (!birthDate) {
      alert("Please select your Date of Birth.");
      return;
    }

    const today = new Date();
    const dob = new Date(birthDate);

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {

      months--;

      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      );

      days += previousMonth.getDate();

    }

    if (months < 0) {

      years--;

      months += 12;

    }

    setResult({
      years,
      months,
      days
    });
const diff = today - dob;

const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));
const hoursTotal = Math.floor(diff / (1000 * 60 * 60));
const minutesTotal = Math.floor(diff / (1000 * 60));
const secondsTotal = Math.floor(diff / 1000);

setTotalDays(daysTotal);
setTotalHours(hoursTotal);
setTotalMinutes(minutesTotal);
setTotalSeconds(secondsTotal);
  };

  return (

    <div className="age-page">

      <div className="bg-circle bg1"></div>
      <div className="bg-circle bg2"></div>
      <div className="bg-circle bg3"></div>

      <div className="age-container">

        <div className="page-icon">
          🎂
        </div>

        <h1>Age Calculator</h1>

        <p className="subtitle">
          Calculate your exact age instantly
        </p>

        <div className="glass-card">

          <label>Date of Birth</label>

          <input
            type="date"
            className="date-input"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />

          <button
            className="calculate-btn"
            onClick={calculateAge}
          >
            ✨ Calculate Age
          </button>
          {result && (

            <div className="result-section">

              <div className="result-card">
                <h2>{result.years}</h2>
                <span>Years</span>
              </div>

              <div className="result-card">
                <h2>{result.months}</h2>
                <span>Months</span>
              </div>

              <div className="result-card">
                <h2>{result.days}</h2>
                <span>Days</span>
              </div>

            </div>
</div>   // ← Line 123 (result-section end)

      <div className="extra-results">

        <div className="extra-card">
          <h3>{totalDays.toLocaleString()}</h3>
          <p>Total Days</p>
        </div>

        <div className="extra-card">
          <h3>{totalHours.toLocaleString()}</h3>
          <p>Total Hours</p>
        </div>

        <div className="extra-card">
          <h3>{totalMinutes.toLocaleString()}</h3>
          <p>Total Minutes</p>
        </div>

        <div className="extra-card">
          <h3>{totalSeconds.toLocaleString()}</h3>
          <p>Total Seconds</p>
        </div>

      </div>

    )}
          )}

        </div>

      </div>

    </div>

  );

}

export default AgeCalculator;
