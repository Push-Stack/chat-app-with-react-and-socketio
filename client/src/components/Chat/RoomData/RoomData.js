import React from 'react';

const RoomData = ({ users }) => {
  const renderUsers = () => {
    return users.map(user => {
      return (
        <p key={user.id} className="small text-capitalize">
          <i className="fa fa-circle text-default mr-2 p-2"></i> {user.name}
        </p>
      );
    });
  };

  return <div>{renderUsers()}</div>;
};

export default RoomData;
