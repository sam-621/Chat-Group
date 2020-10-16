import React, { useState } from 'react';
import '../../styles/molecules/chatHeader.css';

import { Title } from '../atoms/Text';
import DropDawnMenu from '../atoms/DropDawnMenu';
import Options from '../../img/options.svg';

const ChatHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="ChatHeader">
      <div>
        <Title content="Chat group" />
      </div>
      <div>
        <img
          onClick={() => setShowMenu(!showMenu)}
          src={Options}
          alt="Options image"
          width="30"
          height="30"
        />
        {showMenu ? <DropDawnMenu setShowMenu={setShowMenu} /> : null}
      </div>
    </header>
  );
};

export default ChatHeader;
