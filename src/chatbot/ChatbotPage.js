import config from './config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

import Chatbot from 'react-chatbot-kit'
import Viz from '../pages/Viz.js'
import 'react-chatbot-kit/build/main.css'
import './chatbotpage.css';
import logo from './new-logo.png';


// main page
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
                    headerComponent={<img src={logo} alt="New logo"/>}
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                    // validator={validateInput}
                    placeholderText='Ask a question related to the NIST CSF ...'
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