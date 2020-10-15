import React from 'react';
import '../../styles/molecules/typingBar.css';

import Send from '../../img/send.svg';

const TypingBar = () => {
  return (
    <div className="TypingBar">
      <form className="TypingBar-Form">
        <div className="TypingBar-InputText">
          <input type="text" placeholder="Type your message" />
        </div>
        <div className="TypingBar-InputSubmit">
          <img src={Send} alt="Send button" width="30px" height="30px" />
        </div>
      </form>
    </div>
  );
};

export default TypingBar;
