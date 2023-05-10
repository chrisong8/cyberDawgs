import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';

const config = {
  initialMessages: [
    createChatBotMessage(`Hi, I'm NOVA!`),
    createChatBotMessage(
      "I'm here to help you understand the NIST CSF framework.", 
      {
        withAvatar: false,
        delay: 500,
      }
    ),
    createChatBotMessage(`What questions do you have for me?`, 
    {
      withAvatar: false,
      delay: 1000,
    })
  ],
  customComponents: {
    // Replaces (covers) the default header
    header: () => <div style={{ backgroundColor: 'black' , color: "white"}}></div>,
    // Replaces the default bot avatar
    botAvatar: (props) => <Avatar {...props} />

  //  // Replaces the default user icon
  // userAvatar: (props) => <Avatar {...props} />,

  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#CBC3E3',
    },
    chatButton: {
      backgroundColor: '#000000',
    },
  },
};

export default config;