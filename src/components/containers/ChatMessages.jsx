import React, { useState, useEffect } from 'react';
import '../../styles/containers/chatMessages.css';
import socket from '../atoms/Socket';

import { Message } from '../molecules/';
import { fakeMessages } from '../../utils/fakeMessages';

const ChatMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages([...messages, msg]);
      const chatContainer = document.getElementById('Chat');
      chatContainer.scrollTop = chatContainer.scrollHeight;
      window.scrollTo({ top: 100 });
    });
    return () => socket.off();
  });

  return (
    <section id="Chat" className="ChatMessages">
      {messages.map((message, index) => {
        return (
          <Message
            key={index}
            username={message.username}
            messageContent={message.msg}
          />
        );
      })}
    </section>
  );
};

export default ChatMessages;
