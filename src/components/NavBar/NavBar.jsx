import './NavBar.scss';
import React from 'react';
import { connect } from 'react-redux';
import SignedInLinks from '../layout/SignedInLinks/SignedInLinks';
import SignedOutLinks from '../layout/SignedOutLinks/SignedOutLinks';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  const { isLoggedIn, auth } = props;

  const links = isLoggedIn && auth ? <SignedInLinks/> : <SignedOutLinks/>

  return (
    <Navbar className="navbar fixed-top" expand="lg">
      <Navbar.Brand className="navbar-brand ml-1">
        <Link to="/" className="link brand">News Blog <i className="far fa-newspaper"></i></Link>
      </Navbar.Brand>
      {links}
    </Navbar>
  );
};



const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth.uid,
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(NavBar);
