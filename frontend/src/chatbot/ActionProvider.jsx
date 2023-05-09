import React from 'react';

// Provides action functions for bot to render responses to user input
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // handles simple "hello" message
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };

    // handles questions about NIST CSF thru NLP model
    const nlp = async (message) => {
        let url = 'https://nistbot.herokuapp.com/api';

        console.log(JSON.stringify(message));

        let answer = "Sorry try again"

        try {
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
              }
          }).then(text => {
            answer = createChatBotMessage(text);
          }).catch(error => {
            console.error("Error with fetch" + error);
          });
      } catch (error) {
          console.error(`Failed to fetch: ${error}`);
      }

      let botMessage = answer;

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };

    // Can filter blank or inappropriate user input
    const idk = () => {
        const response = 'I am not sure how to answer that question... try again?'

        const botMessage = createChatBotMessage(response);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };

  // Return all actions
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