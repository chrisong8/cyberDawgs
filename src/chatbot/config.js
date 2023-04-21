import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from "../chatbot/Avatar"

const config = {
  initialMessages: [
    createChatBotMessage(`Hi, my name is NOVA.`),
    createChatBotMessage(`I'm here to help you understand the NIST CSF framework.`),
    createChatBotMessage(`What questions do you have for me?`)
    ],
  botName: 'NOVA',
  customComponents: {
    // Replaces the default header
    header: () => <div style={{ backgroundColor: 'black', borderRadius: "3px" , color: "white"}}></div>,
  //  // Replaces the default bot avatar
    botAvatar: (props) => <Avatar {...props} />,
  //  // Replaces the default bot chat message container
  //  botChatMessage: (props) => <MyCustomChatMessage {...props} />,
  //  // Replaces the default user icon
  //  userAvatar: (props) => <MyCustomAvatar {...props} />,
  //  // Replaces the default user chat message
  //  userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
  },
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