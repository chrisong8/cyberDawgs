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
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;