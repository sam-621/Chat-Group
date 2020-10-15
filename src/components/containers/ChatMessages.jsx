import React, { useState } from 'react';
import '../../styles/containers/chatMessages.css';

import { Message } from '../molecules/';
import { fakeMessages } from '../../utils/fakeMessages';

const ChatMessages = () => {
  const [messages, setMessages] = useState(fakeMessages);

  return (
    <section className="ChatMessages">
      {messages.map((message, index) => {
        return (
          <Message
            key={index}
            username={message.username}
            messageContent={message.message}
          />
        );
      })}
    </section>
  );
};

export default ChatMessages;
