import React from 'react';

// const { spawn } = require('child_process');

// Provides action functions for bot to render response
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };

    // handles questions about NIST CSF thru NLP model
    const nlp = async (message) => {
        let url = 'http://127.0.0.1:5000/api';

        console.log(JSON.stringify(message));

        let answer = "Sorry try again"

        try {
          // fetch request, send message inside req body
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(message)
          }).then((response) => {
              if (response.ok) {
                return response.text()
                //console.log(answer);
              }
          }).then(text => {
            console.log(text + "this is text")
            answer = createChatBotMessage(text);
          }
          );
  

      } catch (error) {
          console.error(`FETCH: ${error}`);
      }

      let botMessage = answer;
  

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
            nlp,
            idk,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;