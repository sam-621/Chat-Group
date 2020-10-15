import React from 'react';
import '../../styles/molecules/chatHeader.css';

import { Title } from '../atoms/Text';
import Options from '../../img/options.svg';

const ChatHeader = () => {
  return (
    <header className="ChatHeader">
      <div>
        <Title content="Chat group" />
      </div>
      <div>
        <img src={Options} alt="Options image" width="30" height="30" />
      </div>
    </header>
  );
};

export default ChatHeader;
