import React, { useRef, useEffect } from 'react';

import Admin from './images/admin.svg';
import User from './images/user.png';
import ReactEmoji from 'react-emoji';

const SingleMessage = ({ message }) => {
  const messageRef = useRef();

  useEffect(() => {
    messageRef.current.scrollIntoView({
      behaviour: 'smooth',
      block: 'start',
      inline: 'start'
    });
  }, []);

  return (
    <li ref={messageRef} className="media my-4 ">
      <img
        src={message.user === 'adminX' ? Admin : User}
        alt=""
        className="img-circle"
        style={{
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          border: '2px solid #e5e7e8'
        }}
      />

      <div className="media-body ml-2 ">
        <h6 className="nav-link p-0 m-0">
          <strong className="text-dark font-weight-bold  m-2 text-capitalize text-dark  ">
            {message.user === 'adminX' ? 'Admin' : message.user}
          </strong>
        </h6>
        <p
          className={` ml-2  small ${
            message.user === 'adminX' ? 'text-default' : 'text-muted'
          } `}
        >
          {ReactEmoji.emojify(message.text)}
        </p>{' '}
      </div>
    </li>
  );
};

export default SingleMessage;
