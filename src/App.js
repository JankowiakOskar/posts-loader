import React, { useEffect } from 'react';
import './styles/_base.scss';
import NavBar from './components/NavBar/NavBar';
import Blog from './components/Blog/Blog';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUp from './components/auth/SignUp/SignUp';
import SignIn from './components/auth/SignIn/SignIn/SignIn';
import FirstPage from './components/layout/FirstPage/FirstPage';
import { signOut } from './store/actions/authActions';
import { deleteLoadedPosts } from './store/actions/blogActions';

function App(props) {

  useEffect(() => {
    const { signOut, deleteAllPosts } = props;
    const appRefreshed = window.performance.navigation.TYPE_RELOAD;
    if (appRefreshed) {
      signOut();
      deleteAllPosts();
    }
  });

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/articles">
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    deleteAllPosts: () => dispatch(deleteLoadedPosts()),
  };
};



export default connect(null, mapDispatchToProps)(App);
