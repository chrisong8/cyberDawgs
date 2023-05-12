import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './team.css'

function Team() {
    return(
        <div className="section-container">
            <div className="welcome-section">
                <div className="welcome-section-content about-page-section-textbox">
                    <h1 className="welcome-section-title">Welcome to NOVA</h1>
                    <p className="welcome-section-description"> NOVA, a website offering a captivating and interactive learning experience, leverages a friendly chatbot to help programmers of all levels explore the NIST Cybersecurity Framework, deepen their understanding of its implementation, and stay current with cutting-edge cybersecurity best practices.</p>
                    <Link to="/chatbot" className="nav-button">Click Here to Get Started Now!</Link>
                </div>
            </div>
            <div className="why-section">
                <div className="about-page-section-left">
                    <div className="why-section-textbox">
                        <h1 className="about-page-section-subtitle">Our Mission</h1>
                        <p className="about-page-section-description">
                        Small to medium-sized companies face a significant challenge, as they are disproportionately targeted for cybersecurity threats and data breaches.<br></br><br></br>To address this issue, we have developed Nova, an easy-to-use, effective, and affordable chatbot.<br></br><br></br> The impact of Nova is twofold: it empowers clients to navigate and implement the NIST framework, addressing their cybersecurity needs, while providing tailored guidance and answers to questions related to their company's unique security requirements.
                        </p>
                    </div>
                </div>
                <div className="about-page-section-right">
                </div>
            </div>
            <div className="how-section">
                <div className="how-section-left">
                </div>
                <div className="how-section-right">
                    <div className="how-section-textbox">
                        <h1 className="how-section-subtitle">Our Sponsor</h1>
                        <p className="how-section-description">
                        KPMG is a global firm offering audit, tax, and advisory services to various industries, leveraging its vast network of member firms to help organizations tackle complex business challenges and drive growth.
                        <br></br><br></br> In cybersecurity, KPMG provides extensive services to safeguard information assets, manage digital risks, and ensure compliance, covering vulnerability assessment, security strategy design, and ongoing support for optimal protection.
                        <br></br><br></br> KPMG's cybersecurity expertise enhances Nova's interactive platform, merging practical insights with NOVA's chatbot to help users understand cybersecurity best practices, like the NIST Framework, ultimately strengthening business security and risk management.
                        </p>
                    </div>
                </div>
            </div>
            <div className="feature-intro-section">
                <div className="feature-intro-textbox">
                    <p className="features-title">NOVA's Key Features</p>
                </div>
            </div>
            <div className="features-container">
                <div className="features-section">
                    <div className="feature">
                    <img className="feature-image" src="/pics/feature1.jpg" alt="Feature 1" />
                    <h2 className="feature-title">Chart Feature</h2>
                    <ul className="feature-description">
                        <li>
                            An informative chart designed to complement NOVA's interactive learning experience
                        </li>
                        <li>
                            Visually presents the NIST CSF's key features and associated categories
                        </li>
                        <li>
                            Helps users quickly grasp the structure and relationships between elements with an organized overview
                        </li>
                    </ul>
                    </div>
                    <div className="feature">
                    <img className="feature-image" src="/pics/feature2.jpg" alt="Feature 2" />
                    <h2 className="feature-title">NOVA Chatbot Feature</h2>
                    <ul className="feature-description">
                        <li>
                            NOVA is specifically engineered to provide users with high-quality, textbook-level answers to any cybersecurity-related question
                        </li>
                        <li>
                            Utilizing advanced natural language processing, the chatbot intelligently understands user queries and delivers comprehensive, well-structured responses that are both informative and reliable
                        </li>
                    </ul>
                    </div>
                    <div className="feature">
                    <img className="feature-image" src="/pics/feature3.jpg" alt="Feature 3" />
                    <h2 className="feature-title">NOVA Response Feature</h2>
                    <ul className="feature-description">
                        <li>
                        NOVA is designed with a focus on providing expertise solely in the domain of cybersecurity
                        </li>
                        <li>
                        As a specialized resource, NOVA will decline to provide an answer to unrelated questions
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="youtube-section">
                <div className="video">
                    <div className="videobox">
                        <iframe src="https://www.youtube.com/embed/aOdWErTIaEI" title="UW INFO 491 Sp23 - NOVA" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className="team-intro-section">
                <div className="team-intro-textbox">
                    <p className="title">Meet The Team</p>
                    <p className="subtitle">Creators of NOVA</p>
                </div>
            </div>
                <div className="team-section">
                <Card className="my-card">
                    <Card.Img variant="top" src="/pics/chris.jpg" className="card-img" />
                    <Card.Body>
                        <Card.Title className="cardTitle">Chris Ong</Card.Title>
                        <Card.Text className="cardDesc">Software Developer</Card.Text>
                        <Card.Text className="cardDesc">https://www.linkedin.com/in/chriscyong/</Card.Text>
                    </Card.Body>
                </Card>

                <Card className="my-card">
                    <Card.Img variant="top" src="/pics/Dan.png" className="card-img" />
                    <Card.Body>
                        <Card.Title className="cardTitle">Daniel Cavazos</Card.Title>
                        <Card.Text className="cardDesc">Data Scientist</Card.Text>
                        <Card.Text className="cardDesc">https://www.linkedin.com/in/cavazd/</Card.Text>
                    </Card.Body>
                </Card>

                <Card className="my-card">
                    <Card.Img variant="top" src="/pics/matt.JPG" className="card-img" />
                    <Card.Body>
                        <Card.Title className="cardTitle">Matthew Balgan</Card.Title>
                        <Card.Text className="cardDesc">Project Manager | Software Developer</Card.Text>
                        <Card.Text className="cardDesc">https://www.linkedin.com/in/matthewbalgan</Card.Text>
                    </Card.Body>
                </Card>

                <Card className="my-card">
                    <Card.Img variant="top" src="/pics/conn.JPG" className="card-img" />
                    <Card.Body>
                        <Card.Title className="cardTitle">Connor Fink</Card.Title>
                        <Card.Text className="cardDesc">Data Scientist</Card.Text>
                        <Card.Text className="cardDesc">https://www.linkedin.com/in/connor-fink-uw/</Card.Text>
                    </Card.Body>
                </Card>

                <Card className="my-card">
                    <Card.Img variant="top" src="/pics/mil.jpg" className="card-img" />
                    <Card.Body>
                        <Card.Title className="cardTitle">Million Werede</Card.Title>
                        <Card.Text className="cardDesc">Data Scientist</Card.Text>
                        <Card.Text className="cardDesc">https://www.linkedin.com/in/millionwerede/</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="status-section">
                <div className="status-section-content about-page-section-textbox">
                    <h1 className="status-section-title">Project Status</h1>
                    <p className="status-section-description"> NOVA is a University of Washington Information School Capstone project for Winter/Spring 2023. The project will be closed June 3rd and handed off to KPMG.</p>
                </div>
            </div>
        </div>
    );
}

export default Team;