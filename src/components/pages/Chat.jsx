import React from 'react';
import '../../styles/pages/chat.css';

import { ChatHeader, TypingBar } from '../molecules';

const Chat = () => {
  return (
    <main className="Chat">
      <ChatHeader />
      <h1></h1>
      <TypingBar />
    </main>
  );
};

export default Chat;
