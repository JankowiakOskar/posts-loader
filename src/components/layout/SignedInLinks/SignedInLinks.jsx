import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';
import { deleteLoadedPosts } from '../../../store/actions/blogActions'

const SignedInLinks = (props) => {
  const { signOut, deleteAllPosts, profile } = props;
  console.log(profile);
  const handleClick = async () => {
    deleteAllPosts();
    signOut()

  };

  const initials = profile.initials ? (
    <Link to="/articles" className="link">
        <li className="initials rounded">{profile.initials}</li>
      </Link>
  ) : null
  
  return (
    <div className="links-ctn">
      <Link to="/articles" className="link">
        <li className="nav-link">
          <span className="nav-text">Articles<i className="fas fa-newspaper icon ml-1"></i></span>
          <span className="underline"></span>
        </li>
      </Link>
      <Link to="/" className="link">
        <li className="nav-link" onClick={handleClick}>
          <span className="nav-text">Log Out<i className="fas fa-sign-out-alt icon ml-1"></i></span>
          <span className="underline"></span>
        </li>
      </Link>
      {initials}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    deleteAllPosts: () => dispatch(deleteLoadedPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
