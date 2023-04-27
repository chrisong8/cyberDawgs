import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './team.css'

function Team() {
    return(
        <div className="section-container">
            <div className="welcome-section">
                <div className="welcome-section-content about-page-section-textbox">
                    <h1 className="welcome-section-title">Welcome to NOVA</h1>
                    <p className="welcome-section-description"> Nova is a website that provides a fun and interactive way to learn about the NIST Cybersecurity Framework (CSF) for programmers. With the help of our friendly chatbot, you can explore the different components of the framework and gain a deeper understanding of how to implement it in your work. Whether you're a beginner or an experienced programmer, Nova offers a unique learning experience that will help you stay up-to-date with the latest cybersecurity best practices.</p>
                </div>
            </div>
            <div className="why-section">
                <div className="about-page-section-left">
                    <div className="why-section-textbox">
                        <h1 className="about-page-section-subtitle">Why you should use NOVA</h1>
                        <p className="about-page-section-description">
                            Historically, small to medium sized companies are sought out the most for cybersecurity threats and data breaches. As an easy to use, effective, and affordable tool, Nova helps clients navigate and implement the NIST framework to fulfill their cybersecurity needs.
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
                        <h1 className="how-section-subtitle">How does NOVA work</h1>
                        <p className="how-section-description">
                        The NOVA chatbot utilizes the advanced natural language processing 
                        capabilities of the OpenAI API to provide a seamless and interactive 
                        learning experience for users seeking to understand the NIST Cybersecurity 
                        Framework (CSF).<br></br><br></br> To ensure the chatbot's effectiveness, we trained it on a 
                        wide range of questions that we gathered from cybersecurity professionals 
                        in the field. In addition to this, we also utilized web scraping techniques 
                        to collect data on common cybersecurity concerns and issues that businesses 
                        face. <br></br><br></br>By incorporating this real-world data into the chatbot's training, 
                        NOVA is able to provide accurate and relevant responses to users, making 
                        it an invaluable tool for those seeking to improve their cybersecurity 
                        knowledge and implementation.
                        </p>
                    </div>
                </div>
            </div>
            <div className="youtube-section">
                <div className="video">
                    <div className="videobox">
                        <iframe src="https://www.youtube.com/embed/Wz7hosdzOjA" title="UW INFO 490 W22  - CyberDawgs" allowFullScreen></iframe>
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
                </Card.Body>
            </Card>

            <Card className="my-card">
                <Card.Img variant="top" src="/pics/Dan.png" className="card-img" />
                <Card.Body>
                    <Card.Title className="cardTitle">Daniel Cavazos</Card.Title>
                    <Card.Text className="cardDesc">Data Scientist</Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-card">
                <Card.Img variant="top" src="/pics/matt.JPG" className="card-img" />
                <Card.Body>
                    <Card.Title className="cardTitle">Matthew Balgan</Card.Title>
                    <Card.Text className="cardDesc">Software Developer</Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-card">
                <Card.Img variant="top" src="/pics/conn.JPG" className="card-img" />
                <Card.Body>
                    <Card.Title className="cardTitle">Connor Fink</Card.Title>
                    <Card.Text className="cardDesc">Data Scientist</Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-card">
                <Card.Img variant="top" src="/pics/mil.jpg" className="card-img" />
                <Card.Body>
                    <Card.Title className="cardTitle">Million Werede</Card.Title>
                    <Card.Text className="cardDesc">Data Scientist</Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
}

export default Team;