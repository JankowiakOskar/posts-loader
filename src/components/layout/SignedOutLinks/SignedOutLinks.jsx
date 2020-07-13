import './SignedOutLinks.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { DoorOpen } from 'react-bootstrap-icons';


const SignedOutLinks = () => {
  return (
    <div className="links-ctn">
      <Link to="/signup" className="link">
        <li className="nav-link">
          <span className="nav-text">
            Sign Up <i className="fas fa-user-plus"></i>
          </span>
          <span className="underline"></span>
        </li>
      </Link>
      <Link to="/signin" className="link">
        <li className="nav-link">
          <span className="nav-text">
            Login <DoorOpen className="icon" />
          </span>
          <span className="underline"></span>
        </li>
      </Link>
    </div>
  );
};

export default SignedOutLinks;
