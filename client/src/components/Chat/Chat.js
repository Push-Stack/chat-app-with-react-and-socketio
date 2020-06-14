import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import useSocket from '../../socket.io/useSocket';
import Nav from './Nav/Nav';
import SendMessage from './SendMessage/SendMessage';
import Messages from './Messages/Messages';
import RoomData from './RoomData/RoomData';

import './Chat.css';

const Chat = () => {
  const history = useHistory();
  const { username, room } = useParams();
  const { users, messages, sendUserMessage, error } = useSocket({
    username,
    room
  });

  useEffect(() => {
    if (error) {
      alert(error);
      history.push('/');
    }
  });

  return (
    <React.Fragment>
      <Nav />

      <div className="container-fluid  ">
        <div className="row no-gutters chatRow">
          <div className="col-lg-6 offset-lg-2 room order-sm-2 order-lg-1 ">
            <h4
              className="text-white elegant-color p-4 text-default "
              style={{ position: 'sticky', top: '0' }}
            >
              <i className="fa fa-comments fa-2x mr-2 "></i>
              {room.toUpperCase()}
              <span className="float-right closeIcon">
                <i
                  onClick={() => (window.location.href = '/')}
                  className="fa fa-times"
                ></i>
              </span>
            </h4>
            <Messages messages={messages} />
            <SendMessage sendUserMessage={sendUserMessage} />
          </div>
          <div className="col-lg-3 offset-lg-1  roomData  order-sm-1 order-lg-2 ">
            <h6 className="text-default text-center lead p-2 ">
              {' '}
              <i className="fa fa-user mr-1"></i> Active Users
            </h6>
            <div className="p-4 text-light activeUsers">
              <RoomData users={users} />
            </div>
            <h6 className="elegant-color-dark text-white text-monospace font-weight-bold p-3">
              Created using <span className="text-default"> React</span> and{' '}
              <span className="text-default ">Socket.io</span>
              <i className="fa fa-comments fa-2x mx-1 "></i>
            </h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chat;
