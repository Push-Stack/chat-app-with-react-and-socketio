import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Nav = () => {
  const { username, room } = useParams();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark elegant-color-dark">
      <div className="container ">
        <Link
          className="navbar-brand text-default"
          to={`/room/${room}/${username}`}
        >
          Chat Application
        </Link>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Switch Room
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
