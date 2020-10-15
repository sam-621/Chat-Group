import React from 'react';
import '../../styles/molecules/message.css';

const Message = ({ username, messageContent }) => {
  return (
    <article className="Message">
      <div className="Message-Username">
        <p>{username}</p>
      </div>
      <div className="Message-Content">
        <p>{messageContent}</p>
      </div>
    </article>
  );
};

export default Message;
