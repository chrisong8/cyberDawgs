import React from "react";
import Logo from './new-logo.png'

// bot avatar
function Avatar() {
    return (
        <div className="react-chatbot-kit-chat-bot-avatar">
            <div
                className="react-chatbot-kit-chat-bot-avatar-container"
                style={{ background: "none" }}
            >
                <img alt="BotAvatar" src={Logo} style={{borderRadius: "50%", width: "55px", marginLeft: "20px"}}/>
            </div>
        </div>
    );
}

export default Avatar;