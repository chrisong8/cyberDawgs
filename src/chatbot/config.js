import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [
    createChatBotMessage(`Hi, my name is NOVA.`),
    createChatBotMessage(`I'm here to help you understand the NIST CSF framework.`),
    createChatBotMessage(`What questions do you have for me?`)
    ],
  botName: 'NOVA',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#b19cd9',
    },
    chatButton: {
      backgroundColor: '#000000',
    },
  },
};

export default config;