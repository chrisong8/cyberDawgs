// import { Link } from "react-router-dom";

import config from './config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

import Chatbot from 'react-chatbot-kit'
import Viz from '../pages/Viz.js'
// import Checklist from '../pages/Checklist.js'
import 'react-chatbot-kit/build/main.css'
import './chatbotpage.css';

function ChatbotPage() {
    return (
        <div className='chatbotPage'>
            <div className='viz' id="pane" style={{
                width: "38.68%",
                height: "100%",
                paddingTop: "40px"
                }}>
                <Viz></Viz>
            </div>
            <div className='bot' id="pane" style={{
                width: "60%",
                }}>
                <Chatbot
                    headerText="Chat with NOVA"
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                    // validator={validateInput}
                    placeholderText='Type your message here...'
                />
            </div>
        </div>
    );
}

// if returns false then message will not be sent
// filter for inappropriate
function validateInput() {

}

export default ChatbotPage;