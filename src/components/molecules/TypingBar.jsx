import React, { useState } from 'react';
import '../../styles/molecules/typingBar.css';

import Send from '../../img/send.svg';
import socket from '../atoms/Socket';

const TypingBar = () => {
  const [message, setMessage] = useState({
    username: sessionStorage.getItem('username'),
    msg: '',
  });
  function senMessage(e) {
    e.preventDefault();
    if (message.msg === '') {
      return;
    }
    socket.emit('chat message', message);
    setMessage({ msg: '' });
  }
  return (
    <div className="TypingBar">
      <form className="TypingBar-Form" onSubmit={senMessage}>
        <div className="TypingBar-InputText">
          <input
            type="text"
            placeholder="Type your message"
            onChange={(e) =>
              setMessage({
                msg: e.target.value,
                username: sessionStorage.getItem('username'),
              })
            }
            value={message.msg}
          />
        </div>
        <div onClick={senMessage} className="TypingBar-InputSubmit">
          <img src={Send} alt="Send button" width="30px" height="30px" />
        </div>
      </form>
    </div>
  );
};

export default TypingBar;
