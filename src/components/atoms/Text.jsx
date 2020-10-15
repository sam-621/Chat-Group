import React from 'react';
import '../../styles/atoms/text.css';

const Title = ({ content }) => {
  return <h1 className="Title">{content}</h1>;
};

const MessageText = ({ content }) => {
  return <p className="MessageText">{content}</p>;
};

const UserMessageName = ({ name }) => {
  return <p className="UserMessageName">{name}</p>;
};

export { Title, MessageText, UserMessageName };
