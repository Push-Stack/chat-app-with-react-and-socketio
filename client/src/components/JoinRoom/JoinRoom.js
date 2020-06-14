import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './JoinRoom.css';

const JoinRoom = () => {
  const [username, setUser] = useState('');
  const [room, setRoom] = useState('');

  const history = useHistory();

  const onSubmitHandler = event => {
    event.preventDefault();

    if (username && room) history.push(`/room/${room}/${username}`);
  };

  return (
    <div className="container-fluid roombackground">
      <div className="row">
        <div className="col-lg-4 col-md-2 col-sm-2 col-xs-12"></div>
        <div className="col-lg-4 col-md-8 col-sm-8 col-xs-12">
          <form
            onSubmit={onSubmitHandler}
            className="roomForm"
            autoComplete="off"
          >
            <h3 className="my-4 text-center text-white p-2 border-bottom border-default">
              User Login
            </h3>
            <hr />
            <div className="form-group">
              <div className="row">
                <div className="col-3">
                  <label
                    htmlFor="username"
                    className="form-label text-default "
                  >
                    Username
                  </label>
                </div>
                <div className="col-9">
                  <input
                    value={username}
                    onChange={e => setUser(e.target.value)}
                    type="text"
                    name="username"
                    id="username"
                    className="form-control  text-default rounded-pill"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-3">
                  <label htmlFor="room" className="form-label text-default ">
                    Room
                  </label>
                </div>
                <div className="col-9">
                  <input
                    value={room}
                    onChange={e => setRoom(e.target.value)}
                    type="text"
                    name="room"
                    id="room"
                    className="form-control  text-default rounded-pill"
                  />
                </div>
              </div>
            </div>

            <input
              type="submit"
              value="Join"
              name="login"
              className="btn btn-dark btn-block mt-4 "
            />
          </form>
        </div>
        <div className="col-lg-4 col-md-2 col-sm-2 col-xs-12"></div>
      </div>
    </div>
  );
};

export default JoinRoom;
