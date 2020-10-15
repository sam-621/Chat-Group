import React from 'react';
import '../../styles/containers/registerContainer.css';

const RegisterContainer = () => {
  return (
    <div className="RegisterContainer">
      <div className="RegisterContainer-Text">
        <h2>Choose your name</h2>
        <p>(You can change it)</p>
      </div>
      <form className="RegisterContainer-Form">
        <input type="text" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterContainer;
