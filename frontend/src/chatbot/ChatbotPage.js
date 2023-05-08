import React, { useState } from 'react';
import config from './config';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

import Chatbot from 'react-chatbot-kit';
import Viz from '../pages/Viz.js';
import 'react-chatbot-kit/build/main.css';
import './chatbotpage.css';
import logo from './new-logo.png';


function ChatbotPage() {
    const [inputValue, setInputValue] = useState('');

    const handleNovaQuestionClick = (questionText) => {
        setInputValue(questionText);
    };

    return (
        <div className='chatbotPage'>
            <div className='viz' id="pane" style={{
                width: "20%",
                height: "100%",
                paddingTop: "40px"
                }}>
                <Viz handleNovaQuestionClick={handleNovaQuestionClick}></Viz>
            </div>
            <div className='bot' id="pane" style={{
                width: "60%",
                }}>
                <Chatbot
                    headerText="Chat with NOVA"
                    headerComponent={<img src={logo} alt="New logo"/>}
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    placeholderText='Ask a question related to the NIST CSF ...'
                />
            </div>
        </div>
    );
}


export default ChatbotPage;
