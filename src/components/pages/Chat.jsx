import React from 'react';
import '../../styles/pages/chat.css';

import { ChatHeader, TypingBar } from '../molecules';
import ChatMessages from '../containers/ChatMessages';
import { Redirect } from 'react-router-dom';

const Chat = () => {
  return !sessionStorage.getItem('username') ? (
    <Redirect to="/" />
  ) : (
    <main className="Chat">
      <ChatHeader />
      <ChatMessages />
      <TypingBar />
    </main>
  );
};

export default Chat;
