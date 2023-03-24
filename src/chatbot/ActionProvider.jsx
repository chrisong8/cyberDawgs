import React from 'react';

// let spawn = require('child_process').spawn;
// const process = spawn('python', ['script.py', text]);

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };

    // handles questions about NIST CSF
    const nist = () => {

        const response = 'INSERT CALL TO FLASK API HERE'

        const botMessage = createChatBotMessage(response);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };

    const idk = () => {

        const response = 'I am not sure how to answer that question... try again?'

        const botMessage = createChatBotMessage(response);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            nist,
            idk,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;