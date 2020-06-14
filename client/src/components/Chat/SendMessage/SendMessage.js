import React, { useState } from 'react';

const SendMessage = ({ sendUserMessage }) => {
  const [message, setMessage] = useState('');

  const onSubmitHandler = event => {
    event.preventDefault();
    if (message) sendUserMessage(message);
    setMessage('');
  };

  return (
    <div className="md-form m-4  pt-2">
      <form onSubmit={onSubmitHandler}>
        <div className="row ">
          <div className="col-8 ">
            <input
              autoComplete="off"
              value={message}
              onChange={e => setMessage(e.target.value)}
              type="text"
              name="message"
              className="form-control text-default"
              placeholder="Write your message here..."
            />
          </div>
          <div className="col-4">
            <button
              type="submit"
              className="btn btn-muted text-light btn-default "
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
