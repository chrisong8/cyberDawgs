import React from 'react';
import { Widget } from 'react-chatbot-kit';

const CustomChatbot = ({
  config,
  messageParser,
  actionProvider,
  headerText,
  headerComponent,
  placeholderText,
  inputValue,
  setInputValue,
}) => {
  const handleNewUserMessage = (newMessage) => {
    const parser = new messageParser(newMessage, actionProvider);
    parser.parse();
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title={headerText}
      customComponent={headerComponent}
      subtitle=""
      senderPlaceHolder={placeholderText}
      inputText={inputValue}
      setInputText={setInputValue}
      {...config}
    />
  );
};

export default CustomChatbot;
