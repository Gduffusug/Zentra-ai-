import React, { useState } from "react";
import "./AgeCalculator.css";

function AgeCalculator() {

  const [birthDate, setBirthDate] = useState("");

  const [result, setResult] = useState(null);

  const calculateAge = () => {

    // Logic will be added in Part 3

  };

  return (

    <div className="age-page">

      {/* Background Glow */}

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
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="date-input"
          />

          <button
            className="calculate-btn"
            onClick={calculateAge}
          >
            Calculate Age
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
          </button>

        </div>

      </div>

    </div>

  );

}

export default AgeCalculator;
