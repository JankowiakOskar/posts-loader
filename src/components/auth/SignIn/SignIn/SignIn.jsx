import './Signin.scss';
import React, { Component } from 'react';
import { PersonCircle } from 'react-bootstrap-icons';
import { KeyFill } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signIn } from '../../../../store/actions/authActions';
import { withRouter, Redirect } from 'react-router-dom';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner';
import Message from '../../../Message/Message';
import gsap from 'gsap';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSignIn: '',
      passwordSignIn: '',
      formBottomPos: 0
    };

    this.form = null;
    this.elementGroup = null;
  }

  handleClick = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { signIn } = this.props;
    signIn(this.state);
  };

  componentDidMount() {
    if (this.form && this.elementGroup) {
      const form = this.form;
      // save bottom position of form from vp browser
      this.setState({
        ...this.state,
        formBottomPos: form.getBoundingClientRect().bottom
      })
      const elementGroup = this.elementGroup;
      const titleForm = form.querySelector('.title-form');
      const description = form.querySelector('.description');
      const inputsGroup = [...elementGroup.children]
      gsap.set([titleForm, description, inputsGroup], {
        autoAlpha: 0,
        y: '-=300px',
        x: '-=300px',
      });

      gsap.set(form, { y: '-=300', autoAlpha: 0 });

      const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } });

      tl
        .to(form, { duration: 1.2, y: 0, autoAlpha: 1 })
        .to(
          [titleForm, description, ...inputsGroup],
          { duration: 1, y: 0, x: 0, stagger: 0.16, autoAlpha: 1 },
          '-=0.8',
        );
    }
  }

  componentWillUnmount() {
    const { stopLogging } = this.props;
    stopLogging();
  }

  render() {
    const {error,  authFirebase, isLoggedIn, isLogging } = this.props;
    if (authFirebase && isLoggedIn) return <Redirect to="/articles" />;
    const btnContent = isLogging ? <LoadingSpinner /> : 'Sign In';

    return (
      <div className="wrapper-form">
        <Form
        ref={(form) => (this.form = form)}
        className="form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <h2 className="title-form text-center m-3">Sign In</h2>
        <p className="description text-center">Put your email and password</p>
        <Form.Group ref={(formGroup) => (this.elementGroup = formGroup)}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <PersonCircle />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="email"
              id="emailSignIn"
              placeholder="name@example.com"
              value={this.state.emailSignIn}
              onChange={(e) => this.handleClick(e)}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <KeyFill />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="password"
              id="passwordSignIn"
              placeholder="Password"
              aria-hidden="true"
              value={this.state.passwordSignIn}
              onChange={(e) => this.handleClick(e)}
            />
          </InputGroup>
          <div className="form-footer">
          <Button type="submit" className="signUp-btn btn btn-dark m-3" disabled={error}>
            {btnContent}
          </Button>
          </div>
        </Form.Group>
      </Form>
      <Message formBottomPos={this.state.formBottomPos}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.authError,
    authFirebase: state.firebase.auth.uid,
    isLogging: state.auth.isLogging,
    isLoggedIn: state.auth.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (userData) => dispatch(signIn(userData)),
    stopLogging: () => dispatch({ type: 'LOGGING_END' }),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SignIn);
