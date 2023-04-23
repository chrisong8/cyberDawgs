import React, { useState } from "react";
// import "./checklist.css";

function Checklist() {
  const [identifyExpanded, setIdentifyExpanded] = useState(false);
  const [detectExpanded, setDetectExpanded] = useState(false);

  const toggleIdentify = () => {
    setIdentifyExpanded(!identifyExpanded);
  };

  const toggleDetect = () => {
    setDetectExpanded(!detectExpanded);
  };

  return (
    <div className="checklist" id="c">
      <nav>
        <label htmlFor="identify" onClick={toggleIdentify}>
          <span>Identify Function</span>
        </label>

        <ul
          className="slide"
          style={{ display: identifyExpanded ? "block" : "none" }}
        >
          <li>
            <label>
              <input type="checkbox" />
              CM-8: System Component Inventory
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              PM-5: System Inventory
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              CM-8 (2), PM-5 (2)
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              AC-4, CA-3, CA-9, PL-8
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              CP-2, RA-2, SA-14, SC-6,
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              CP-2 (2), PS-7, PM-11
            </label>
          </li>
        </ul>
      </nav>

      <nav>
        <label htmlFor="detect" onClick={toggleDetect}>
          <span>Detect Function</span>
        </label>

        <ul
          className="slide"
          style={{ display: detectExpanded ? "block" : "none" }}
        >
          <li>
            <label>
              <input type="checkbox" />
              Anomalies and Events
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Security Continuous Monitoring
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Detection Processes
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              AC-4, CA-3, CA-9, PL-8
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              CP-2, RA-2, SA-14, SC-6,
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              CP-2 (2), PS-7, PM-11
            </label>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Checklist;
