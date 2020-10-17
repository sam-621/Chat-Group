import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../../styles/atoms/dropDawnMenu.css';

const DropDawnMenu = () => {
  const [redirect, setRedirect] = useState(false);
  function logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('ID');
    setRedirect(true);
  }

  return redirect ? (
    <Redirect to="/" />
  ) : (
    <div className="DropDawnMenu">
      <p onClick={logOut}>Log out</p>
    </div>
  );
};

export default DropDawnMenu;
