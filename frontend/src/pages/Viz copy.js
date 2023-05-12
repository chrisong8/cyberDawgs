import React from 'react';
import './viz copy.css'

function Viz() {
    return (
        <div>
            <div className="viz-2">
                <nav class="viz-nav">
                    <label for="touch11">
                        <div className="viz-title">Identify Function</div>
                        <div className="viz-toggle">
                            <i id="downarrow" className="fas fa-chevron-down down2"></i>
                        </div>
                    </label>
                    <input type="checkbox" id="touch11" />
                    <div className="slide11">
                        <div className="question">
                            <a data-copyable>
                                Question for NOVA: <br></br>
                                <p>What is the purpose of the Identify function in the NIST CSF?</p>
                            </a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Asset Management (ID.AM):</b> The data, personnel, devices, systems, and facilities that enable the organization to achieve business purposes are identified and managed consistent with their relative importance to business objectives and the organization’s risk strategy.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/id/id-am/"> Click here to learn more about the Asset Management subcategories from the CSF documentation.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>How does Asset Management help organizations achieve their business objectives?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Business Environment (ID.BE):</b> The organization’s mission, objectives, stakeholders, and activities are understood and prioritized; this information is used to inform cybersecurity roles, responsibilities, and risk management decisions.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/id/id-be/"> Click here to learn more about the Business Environment subcategories from the CSF documentation.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>What role does understanding the Business Environment play in cybersecurity?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Governance (ID.GV):</b> The policies, procedures, and processes to manage and monitor the organization’s regulatory, legal, risk, environmental, and operational requirements are understood and inform the management of cybersecurity risk.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/id/id-gv/"> Click here to learn more about the Governance subcategories from the CSF documentation..</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>Why is Governance important in managing cybersecurity risk?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Risk Assessment (ID.RA):</b> The organization understands the cybersecurity risk to organizational operations (including mission, functions, image, or reputation), organizational assets, and individuals.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/id/id-ra/"> Click here to learn more about the Risk Assessment subcategories from the CSF documentation..</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>How does Risk Assessment contribute toan organization's understanding of cybersecurity risk?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Risk Management Strategy (ID.RM):</b> The organization’s priorities, constraints, risk tolerances, and assumptions are established and used to support operational risk decisions.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/id/id-rm/"> Click here to learn more about the Risk Management Strategy subcategories from the CSF documentation..</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>What is the purpose of establishing a Risk Management Strategy?</b></a>
                        </div>
                    </div>
                </nav>

                <nav class="viz-nav">
                    <label for="touch2">
                        <div className="viz-title">Protect Function</div>
                        <div className="viz-toggle">
                            <i id="downarrow"className="fas fa-chevron-down"></i>
                        </div>
                    </label>
                    <input type="checkbox" id="touch2" />
                    <div className="slide2">
                        <div className="question">
                            <a data-copyable>
                                Question for NOVA: <br></br>
                                <p>What is the goal of the Protect function in the NIST CSF?</p>
                            </a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Access Control (PR.AC):</b> Access to assets and associated facilities is limited to authorized users, processes, or devices, and to authorized activities and transactions.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/pr/pr-ac/"> Click here to learn more about the Access Control subcategories from the CSF documentation.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>How does Access Control help secure an organization's assets?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Awareness and Training (PR.AT):</b> The organization’s personnel and partners are provided cybersecurity awareness education and are adequately trained to perform their information security-related duties and responsibilities consistent with related policies, procedures, and agreements.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/pr/pr-at/"> Click here to learn more about the Awareness and Training subcategories from the CSF documentation.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>What is the importance of Awareness and Training in cybersecurity?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Data Security (PR.DS):</b>  Information and records (data) are managed consistent with the organization’s risk strategy to protect the confidentiality, integrity, and availability of information.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/pr/pr-ds/"> Click here to learn more about the Data Security subcategories.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>How does Data Security maintain the confidentiality, integrity, and availability of information?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Information Protection Processes and Procedures (PR.IP):</b> Security policies (that address purpose, scope, roles, responsibilities, management commitment, and coordination among organizational entities), processes, and procedures are maintained and used to manage protection of information systems and assets.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/pr/pr-ip/"> Click here to learn more about the Information Protection Processes and Procedures subcategories.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>What are the key components of Information Protection Processes and Procedures?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Maintenance (PR.MA):</b> Maintenance and repairs of industrial control and information system components is performed consistent with policies and procedures.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/pr/pr-ma/"> Click here to learn more about the Maintenance subcategories.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>Why is Maintenance important for the security of industrial control and information systems?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Protective Technology (PR.PT):</b> Technical security solutions are managed to ensure the security and resilience of systems and assets, consistent with related policies, procedures, and agreements.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/pr/pr-pt/"> Click here to learn more about the Protective Technology subcategories</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>How do Protective Technologies help ensure system and asset security?</b></a>
                        </div>
                    </div>
                </nav>

                <nav class="viz-nav">
                    <label for="touch3">
                        <div className="viz-title">Detect Function</div>
                        <div className="viz-toggle">
                            <i id="downarrow"className="fas fa-chevron-down"></i>
                        </div>
                    </label>
                    <input type="checkbox" id="touch3" />
                    <div className="slide3">
                        <div className="question">
                            <a data-copyable>
                                Question for NOVA: <br></br>
                                <p>What is the Detect function's role in the NIST CSF?</p>
                            </a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Anomalies and Events (DE.AE):</b> Anomalous activity is detected in a timely manner and the potential impact of events is understood.
                            </a>
                        </div>
                        <div className="question">
                            <a href=" https://csf.tools/reference/nist-cybersecurity-framework/v1-1/de/de-ae/"> Click here to learn more about the Anomalies and Events subcategories.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>How do Anomalies and Events detection contribute to timely cybersecurity event identification?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Security Continuous Monitoring (DE.CM):</b> The information system and assets are monitored at discrete intervals to identify cybersecurity events and verify the effectiveness of protective measures.
                            </a>
                        </div>
                        <div className="question">
                            <a href=" https://csf.tools/reference/nist-cybersecurity-framework/v1-1/de/de-cm/"> Click here to learn more about the Security Continuous Monitoring subcategories.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>What is the importance of Security Continuous Monitoring in detecting cybersecurity events?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Detection Processes (DE.DP):</b> Detection processes and procedures are maintained and tested to ensure timely and adequate awareness of anomalous events.
                            </a>
                        </div>
                        <div className="question">
                            <a href=" https://csf.tools/reference/nist-cybersecurity-framework/v1-1/de/de-dp/"> Click here to learn more about the Detection Processes subcategories.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>Why are Detection Processes essential for maintaining awareness of anomalous events?</b></a>
                        </div>
                    </div>
                </nav>

                <nav class="viz-nav">
                    <label for="touch4">
                        <div className="viz-title">Respond Function</div>
                        <div className="viz-toggle">
                            <i id="downarrow"className="fas fa-chevron-down"></i>
                        </div>
                    </label>
                    <input type="checkbox" id="touch4" />
                    <div className="slide4">
                        <div className="question">
                            <a data-copyable>
                                Question for NOVA: <br></br>
                                <p>What is the purpose of the Respond function in the NIST CSF?</p>
                            </a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Response Planning (RS.RP):</b> Response processes and procedures are executed and maintained, to ensure timely response to detected cybersecurity events.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rs/rs-rp/"> Click here to learn more about the Response Planning subcategories.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>How does Response Planning help organizations handle detected cybersecurity events?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Communications (RS.CO):</b> Response activities are coordinated with internal and external stakeholders, as appropriate, to include external support from law enforcement agencies.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rs/rs-co/"> Click here to learn more about the Communications subcategories: </a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>Why is effective Communications important during a response to a cybersecurity incident?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Analysis (RS.AN):</b>   Analysis is conducted to ensure adequate response and support recovery activities.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rs/rs-an/"> Click here to learn more about the Analysis subcategories.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>What role does Analysis play in supporting response and recovery activities?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Mitigation (RS.MI):</b> Activities are performed to prevent expansion of an event, mitigate its effects, and eradicate the incident.
                            </a>
                        </div>
                        <div className="question">
                            <a href=" https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rs/rs-mi/"> Click here to learn more about the Mitigation subcategories.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>How can organizations Mitigate the effects of a cybersecurity event?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Improvements (RS.IM):</b> Organizational response activities are improved by incorporating lessons learned from current and previous detection/response activities.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rs/rs-im/"> Click here to learn more about the Improvements subcategories:</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>Why is it important to make Improvements based on lessons learned from response activities?</b></a>
                        </div>
                    </div>
                </nav>



                <nav class="viz-nav">
                    <label for="touch5">
                        <div className="viz-title">Recover Function</div>
                        <div className="viz-toggle">
                            <i id="downarrow"className="fas fa-chevron-down"></i>
                        </div>
                    </label>
                    <input type="checkbox" id="touch5" />
                    <div className="slide5">
                        <div className="question">
                            <a data-copyable>
                                Question for NOVA: <br></br>
                                <p>What is the goal of the Recover function in the NIST CSF?</p>
                            </a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Recovery Planning (RC.RP):</b> Recovery processes and procedures are executed and maintained to ensure timely restoration of systems or assets affected by cybersecurity events.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rc/rc-rp//"> Click here to learn more about the Recovery Planning subcategories.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>How does Recovery Planning help organizations restore systems or assets affected by cybersecurity events?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Improvements (RC.IM):</b> Recovery planning and processes are improved by incorporating lessons learned into future activities.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rc/rc-im/"> Click here to learn more about the Improvements subcategories.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br> Why is it important to incorporate lessons learned into Improvements for recovery planning and processes?</b></a>
                        </div>
                        <div className="subcategory">
                            <a href="#">
                            <b>Communications (RC.CO):</b> Restoration activities are coordinated with internal and external parties, such as coordinating centers, Internet Service Providers, owners of attacking systems, victims, other CSIRTs, and vendors.
                            </a>
                        </div>
                        <div className="question">
                            <a href="https://csf.tools/reference/nist-cybersecurity-framework/v1-1/rc/rc-co/"> Click here to learn more about the Communications subcategories.</a>
                        </div>
                        <div className="question">
                            <a href="#"><b>Question for NOVA: <br></br>How does coordinating with internal and external parties help in the restoration of systems or assets affected by cybersecurity events?</b></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Viz;