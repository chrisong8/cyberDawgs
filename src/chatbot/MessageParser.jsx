import React from 'react';

// Calls appropriate function based on message sent by user
const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.toLowerCase() == "hi" || message.toLowerCase() == "hello") {
        actions.handleHello();
    } else {
      actions.nlp(message);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;