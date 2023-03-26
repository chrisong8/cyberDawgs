import React from 'react';

// Provides action functions for bot to render response
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
        // fetch from flask api here
        const response = fetch()

        const botMessage = createChatBotMessage(response);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };

    // hopefully filter blank or inappropriate user input
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