import React, { useState } from 'react';
import './viz.css'
import config from '../chatbot/config';
import { createChatBotMessage } from 'react-chatbot-kit';

function Viz() {
    const [messageSent, setMessageSent] = useState(false);

    const handleClick = () => {
        if (!messageSent) {
            config.initialMessages.push(
                createChatBotMessage("Question for NOVA: What is the purpose of the Identify function in the NIST CSF?")
            );
            setMessageSent(true);
        }
    };
    return (
        <div>
            <div className="viz-2">

                <nav className="viz-nav">
                    <label for="touch11"><div className="viz-title">Identify Function</div></label>               
                    <input type="checkbox" id="touch11"></input>

                    <ul class="slide11">
                    <li><a href="#" onClick={handleClick}>
                            <b>Question for NOVA: <u>What is the purpose of the Identify function in the NIST CSF?</u></b>
                          </a></li>
                        <li><a href="#"><b><u>The Identify Categories:</u></b></a></li>
                        <li><a href="#"><b>Asset Management (ID.AM):</b> The data, personnel, devices, systems, and facilities that enable the organization to achieve business purposes are identified and managed consistent with their relative importance to business objectives and the organization’s risk strategy.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/id/id-am/"> Click here</a></i> to learn more about the Asset Management subcategories</a></li> 
                        <li><a href="#"><b>NOVA: <u>How does Asset Management help organizations achieve their business objectives?</u></b></a></li>
                        <li><a href="#"><b>Business Environment (ID.BE):</b> The organization’s mission, objectives, stakeholders, and activities are understood and prioritized; this information is used to inform cybersecurity roles, responsibilities, and risk management decisions.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/id/id-be/"> Click here</a></i> to learn more about the Business Environment subcategories</a></li> 
                        <li><a href="#"><b>NOVA: <u>What role does understanding the Business Environment play in cybersecurity?</u></b></a></li>
                        <li><a href="#"><b>Governance (ID.GV):</b> The policies, procedures, and processes to manage and monitor the organization’s regulatory, legal, risk, environmental, and operational requirements are understood and inform the management of cybersecurity risk.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/id/id-gv/"> Click here</a></i> to learn more about the Governance subcategories</a></li>
                        <li><a href="#"><b>NOVA: <u>Why is Governance important in managing cybersecurity risk?</u></b></a></li>
                        <li><a href="#"><b>Risk Assessment (ID.RA):</b> The organization understands the cybersecurity risk to organizational operations (including mission, functions, image, or reputation), organizational assets, and individuals.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/id/id-ra/"> Click here</a></i> to learn more about the Risk Assessment subcategories</a></li>
                        <li><a href="#"><b>NOVA: <u>How does Risk Assessment contribute to an organization's understanding of cybersecurity risk?</u></b></a></li>
                        <li><a href="#"><b>Risk Management Strategy (ID.RM):</b> The organization’s priorities, constraints, risk tolerances, and assumptions are established and used to support operational risk decisions.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/id/id-rm/"> Click here</a></i> to learn more about the Risk Management Strategy subcategories</a></li>
                        <li><a href="#"><b>NOVA: <u>What is the purpose of establishing a Risk Management Strategy?</u></b></a></li>
                    </ul>
                </nav>

                <nav className="viz-nav">
                    <label for="touch2"><div className="viz-title">Protect Function</div></label>               
                    <input type="checkbox" id="touch2"></input>

                    <ul class="slide2"> 
                        <li><a href="#"><b>NOVA: <u>What is the goal of the Protect function in the NIST CSF?</u></b></a></li>
                        <li><a href="#"><b><u>The Protect Categories:</u></b></a></li>
                        <li><a href="#"><b>Access Control (PR.AC):</b> Access to assets and associated facilities is limited to authorized users, processes, or devices, and to authorized activities and transactions.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/pr/pr-ac/"> Click here</a></i> to learn more about the Access Control subcategories</a></li> 
                        <li><a href="#"><b>NOVA: <u>How does Access Control help secure an organization's assets?</u></b></a></li>
                        <li><a href="#"><b>Awareness and Training (PR.AT):</b> The organization’s personnel and partners are provided cybersecurity awareness education and are adequately trained to perform their information security-related duties and responsibilities consistent with related policies, procedures, and agreements.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/pr/pr-at/"> Click here</a></i> to learn more about the Awareness and Training subcategories</a></li> 
                        <li><a href="#"><b>NOVA: <u>What is the importance of Awareness and Training in cybersecurity?</u></b></a></li>
                        <li><a href="#"><b>Data Security (PR.DS):</b> Information and records (data) are managed consistent with the organization’s risk strategy to protect the confidentiality, integrity, and availability of information.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/pr/pr-ds/"> Click here</a></i> to learn more about the Data Security subcategories</a></li>
                        <li><a href="#"><b>NOVA: <u>How does Data Security maintain the confidentiality, integrity, and availability of information?</u></b></a></li>
                        <li><a href="#"><b>Information Protection Processes and Procedures (PR.IP):</b> Security policies (that address purpose, scope, roles, responsibilities, management commitment, and coordination among organizational entities), processes, and procedures are maintained and used to manage protection of information systems and assets.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/pr/pr-ip/"> Click here</a></i> to learn more about the Information Protection Processes and Procedures subcategories</a></li>
                        <li><a href="#"><b>NOVA: <u>What are the key components of Information Protection Processes and Procedures?</u></b></a></li>
                        <li><a href="#"><b>Maintenance (PR.MA):</b> Maintenance and repairs of industrial control and information system components is performed consistent with policies and procedures.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/pr/pr-ma/"> Click here</a></i> to learn more about the Maintenance subcategories</a></li>
                        <li><a href="#"><b>NOVA: <u>Why is Maintenance important for the security of industrial control and information systems?</u></b></a></li>
                        <li><a href="#"><b>Protective Technology (PR.PT):</b> Technical security solutions are managed to ensure the security and resilience of systems and assets, consistent with related policies, procedures, and agreements.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/pr/pr-pt/"> Click here</a></i> to learn more about the Protective Technology subcategories</a></li>
                        <li><a href="#"><b>NOVA: <u>How do Protective Technologies help ensure system and asset security?</u></b></a></li>
                    </ul>
                </nav>

                <nav className="viz-nav"> 
                    <label for="touch3"><div className="viz-title">Detect Function</div></label>               
                    <input type="checkbox" id="touch3"></input>

                    <ul class="slide3">
                        <li><a href="#"><b>NOVA: <u>What is the Detect function's role in the NIST CSF?</u></b></a></li>
                        <li><a href="#"><b><u>The Detect Categories:</u></b></a></li> 
                        <li><a href="#"><b>Anomalies and Events (DE.AE):</b> Anomalous activity is detected in a timely manner and the potential impact of events is understood.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/de/de-ae/"> Click here</a></i> to learn more about the Anomalies and Events subcategories</a></li> 
                        <li><a href="#"><b>NOVA: <u>How do Anomalies and Events detection contribute to timely cybersecurity event identification?</u></b></a></li>
                        <li><a href="#"><b>Security Continuous Monitoring (DE.CM):</b> The information system and assets are monitored at discrete intervals to identify cybersecurity events and verify the effectiveness of protective measures.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/de/de-cm/"> Click here</a></i> to learn more about the Security Continuous Monitoring subcategories</a></li> 
                        <li><a href="#"><b>NOVA: <u>What is the importance of Security Continuous Monitoring in detecting cybersecurity events?</u></b></a></li>
                        <li><a href="#"><b>Detection Processes (DE.DP):</b> Detection processes and procedures are maintained and tested to ensure timely and adequate awareness of anomalous events.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/de/de-dp/"> Click here</a></i> to learn more about the Detection Processes subcategories</a></li>
                        <li><a href="#"><b>NOVA: <u>Why are Detection Processes essential for maintaining awareness of anomalous events?</u></b></a></li>
                    </ul>
                </nav>

                <nav className="viz-nav">
                    <label for="touch4"><div className="viz-title">Respond Function</div></label>               
                    <input type="checkbox" id="touch4"></input>

                    <ul class="slide4">
                        <li><a href="#"><b>NOVA: <u>What is the purpose of the Respond function in the NIST CSF?</u></b></a></li>
                        <li><a href="#"><b><u>The Respond Categories:</u></b></a></li> 
                        <li><a href="#"><b>Response Planning (RS.RP):</b> Response processes and procedures are executed and maintained, to ensure timely response to detected cybersecurity events.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rs/rs-rp/"> Click here</a></i> to learn more about the Response Planning subcategories</a></li>
                        <li><a href="#"><b>NOVA: <u>How does Response Planning help organizations handle detected cybersecurity events?</u></b></a></li>
                        <li><a href="#"><b>Communications (RS.CO):</b> Response activities are coordinated with internal and external stakeholders, as appropriate, to include external support from law enforcement agencies.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rs/rs-co/"> Click here</a></i> to learn more about the Communications subcategories</a></li> 
                        <li><a href="#"><b>NOVA: <u>Why is effective Communications important during a response to a cybersecurity incident?</u></b></a></li>
                        <li><a href="#"><b>Analysis (RS.AN):</b> Analysis is conducted to ensure adequate response and support recovery activities.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rs/rs-an/"> Click here</a></i> to learn more about the Analysis subcategories</a></li> 
                        <li><a href="#"><b>NOVA: <u>What role does Analysis play in supporting response and recovery activities?</u></b></a></li>
                        <li><a href="#"><b>Mitigation (RS.MI):</b> Activities are performed to prevent expansion of an event, mitigate its effects, and eradicate the incident.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rs/rs-mi/"> Click here</a></i> to learn more about the Mitigation subcategories</a></li>
                        <li><a href="#"><b>NOVA: <u>How can organizations Mitigate the effects of a cybersecurity event?</u></b></a></li>
                        <li><a href="#"><b>Improvements (RS.IM):</b> Organizational response activities are improved by incorporating lessons learned from current and previous detection/response activities.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rs/rs-im/"> Click here</a></i> to learn more about the Improvements subcategories</a></li>
                        <li><a href="#"><b>NOVA: <u>Why is it important to make Improvements based on lessons learned from response activities?</u></b></a></li>
                    </ul>
                </nav>

                <nav className="viz-nav">
                    <label for="touch5"><div className="viz-title">Recover Function</div></label>               
                    <input type="checkbox" id="touch5"></input>

                    <ul class="slide5">
                        <li><a href="#"><b>NOVA: <u>What is the goal of the Recover function in the NIST CSF?</u></b></a></li>
                        <li><a href="#"><b><u>The Recover Categories:</u></b></a></li> 
                        <li><a href="#"><b>Recovery Planning (RC.RP):</b> Recovery processes and procedures are executed and maintained to ensure timely restoration of systems or assets affected by cybersecurity events.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rc/rc-rp/"> Click here</a></i> to learn more about the Recovery Planning subcategories</a></li> 
                        <li><a href="#"><b>NOVA: <u>How does Recovery Planning help organizations restore systems or assets affected by cybersecurity events?</u></b></a></li>
                        <li><a href="#"><b>Improvements (RC.IM):</b> Recovery planning and processes are improved by incorporating lessons learned into future activities.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rc/rc-im/"> Click here</a></i> to learn more about the Improvements subcategories</a></li> 
                        <li><a href="#"><b>NOVA: <u>Why is it important to incorporate lessons learned into Improvements for recovery planning and processes?</u></b></a></li>
                        <li><a href="#"><b>Communications (RC.CO):</b> Restoration activities are coordinated with internal and external parties, such as coordinating centers, Internet Service Providers, owners of attacking systems, victims, other CSIRTs, and vendors.<i><a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rc/rc-co/"> Click here</a></i> to learn more about the Communications subcategories</a></li>
                        <li><a href="#"><b>NOVA: <u></u></b></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Viz;