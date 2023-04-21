import React from "react";
import './checklist.css'

// TODO: right align

//<h2>My Checklist for all <a href="https://www.stigviewer.com/controls/800-53"> SP 800-53 Controls</a></h2>
function Checklist() {
    return (
        <div className="checklist" id="c">
            <nav>
                <label for="identify"><span>Identify Function</span></label>               
                <input type="checkbox" id="identify"></input>
                <label class="control-label" for="identify">Controls for Identify</label>
            
                <ul>
                    <li>
                        <label>
                            <input type="checkbox"></input> CM-8: System Component Inventory
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> PM-5: System Inventory
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> CM-8 (2), PM-5 (2)
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> AC-4, CA-3, CA-9, PL-8
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> CP-2, RA-2, SA-14, SC-6,
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> CP-2 (2), PS-7, PM-11 
                        </label>
                    </li>
                </ul>    
            </nav>
        
            <nav>
                <label for="identify"><span>Detect Function</span></label>               
                <input type="checkbox" id="detect"></input>
                <label class="control-label" for="identify">Controls for Detect</label>
            
                <ul>
                    <li>
                        <label>
                            <input type="checkbox"></input> Anomalies and Events
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> Security Continuous Monitoring
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> Detection Processes
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> AC-4, CA-3, CA-9, PL-8
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> CP-2, RA-2, SA-14, SC-6,
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> CP-2 (2), PS-7, PM-11 
                        </label>
                    </li>
                </ul>
                
            </nav>


            <nav>
                <label for="identify"><span>Detect Function</span></label>               
                <input type="checkbox" id="detect"></input>
                <label class="control-label" for="identify">Controls for Detect</label>
            
                <ul>
                    <li>
                        <label>
                            <input type="checkbox"></input> Anomalies and Events
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> Security Continuous Monitoring
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> Detection Processes
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> AC-4, CA-3, CA-9, PL-8
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> CP-2, RA-2, SA-14, SC-6,
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"></input> CP-2 (2), PS-7, PM-11 
                        </label>
                    </li>
                </ul>
                
            </nav>
            
            
            
        </div>
    );
}

export default Checklist;