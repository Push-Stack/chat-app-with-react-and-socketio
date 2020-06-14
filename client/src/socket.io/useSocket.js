import { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:5000/';

const useSocket = ({ username, room }) => {
  const socketRef = useRef();
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    socketRef.current = socketIOClient(ENDPOINT);

    socketRef.current.emit('join', { username, room }, error => {
      if (error) {
        setError(error);
      }
    });

    return () => {
      socketRef.current.emit('disconnect');
    };
  }, [username, room]);

  useEffect(() => {
    socketRef.current.on('message', message => {
      setMessages(messages => [...messages, message]);
    });

    socketRef.current.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendUserMessage = message => {
    socketRef.current.emit('sendMessage', message, () => {});
  };

  return { users, messages, sendUserMessage, error };
};

export default useSocket;
