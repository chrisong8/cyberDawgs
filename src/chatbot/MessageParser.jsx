import React from 'react';

// Calls appropriate function based on message sent by user
const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('kpmg')) {
        actions.nist();
        // call to python side
    } else if (message.includes('hello')) {
        actions.handleHello();
    } else {
        actions.idk()
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