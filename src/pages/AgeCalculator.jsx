import React, { useState } from "react";
import "./AgeCalculator.css";

function AgeCalculator() {

  const [birthDate, setBirthDate] = useState("");

  const [result, setResult] = useState(null);

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

          <label>
            Date of Birth
          </label>

          <input
            type="date"
            className="date-input"
            value={birthDate}
            onChange={(e) =>
              setBirthDate(e.target.value)
            }
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

          )}

       </div>

      </div>

    </div>

  );

}

export default AgeCalculator;
      
