import { Link } from "react-router-dom";

import config from './config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

function ChatbotPage() {
    return (
        <div style={{
            paddingTop: "50px",
            display: "flex",
            justifyContent: "center",
            height: "100%"
            }}>
            <Chatbot
                headerText="Chat with NOVA"
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
                placeholderText='Type your message here...'
            />
        </div>
    );
}

export default ChatbotPage;