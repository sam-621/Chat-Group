import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/containers/registerContainer.css';

const RegisterContainer = () => {
  const [username, setUsername] = useState('');
  const [redirect, setRedirect] = useState(false);

  function register(e) {
    e.preventDefault();
    if (username === '') {
      alert('Must enter your name');
      return;
    }
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('ID', uuidv4());
    setRedirect(true);
  }
  return redirect ? (
    <Redirect to="/chat" />
  ) : (
    <div className="RegisterContainer">
      <div className="RegisterContainer-Text">
        <h2>Choose your name</h2>
        <p>(You can change it)</p>
      </div>
      <form className="RegisterContainer-Form" onSubmit={register}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterContainer;
