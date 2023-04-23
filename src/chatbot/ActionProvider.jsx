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

    // handles questions about NIST CSF thru NLP model
    const nlp = async (message) => {
        let url = 'http://127.0.0.1:5000/api';

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
          console.error(`FETCH: ${error}`);
      }

      let botMessage = answer;

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };

    // TODO? filter blank or inappropriate user input
    const idk = () => {
        const response = 'I am not sure how to answer that question... try again?'

        const botMessage = createChatBotMessage(response);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };

    // all actions must be returned
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