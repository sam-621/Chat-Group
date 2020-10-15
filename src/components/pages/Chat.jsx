import React from 'react';
import '../../styles/pages/chat.css';

import { ChatHeader, TypingBar } from '../molecules';
import ChatMessages from '../containers/ChatMessages';

const Chat = () => {
  return (
    <main className="Chat">
      <ChatHeader />
      <ChatMessages />
      <TypingBar />
    </main>
  );
};

export default Chat;
