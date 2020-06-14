import React from 'react';

import SingleMessage from './SingleMessage/SingleMessage';
import './Messages.css';

const Messages = ({ messages }) => {
  return (
    <ul className="list-unstyled messagesDiv bg-white p-4">
      <h6 className="lead small">Messages</h6>

      {renderMessages(messages)}
    </ul>
  );
};

const renderMessages = messages => {
  return messages.map((message, index) => {
    return <SingleMessage key={index} message={message} />;
  });
};

export default Messages;
