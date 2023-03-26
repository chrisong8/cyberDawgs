// import { Link } from "react-router-dom";

import config from './config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

import Chatbot from 'react-chatbot-kit'
import Viz from '../pages/Viz.js'
import 'react-chatbot-kit/build/main.css'
import './chatbotpage.css';

function ChatbotPage() {
    return (
        <div className='chatbotPage'>
            <div className='viz' style={{
                paddingTop: "50px",
                display: "flex",
                justifyContent: "left",
                height: "100%"
                }}>
                <Viz></Viz>
            </div>
            <div className='bot' style={{
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
        </div>
    );
}

export default ChatbotPage;