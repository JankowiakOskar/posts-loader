import './SignUp.scss';
import React, { Component } from 'react';
import { PersonCircle } from 'react-bootstrap-icons';
import { KeyFill } from 'react-bootstrap-icons';
import { CardText } from 'react-bootstrap-icons';
import { signUp } from '../../../store/actions/authActions';
import { connect } from 'react-redux';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { Redirect } from 'react-router-dom';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import Message from '../../Message/Message';
import gsap from 'gsap';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      formBottomPos: 0,
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
    const { createUser } = this.props;
    createUser(this.state);
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


      gsap.set(form, { y: '-=300', autoAlpha: 0 });
      gsap.set([titleForm, description, ...inputsGroup], {scaleY: 0, autoAlpha: 0})

      const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } });

      tl
        .to(form, { duration: 1.2, y: 0, autoAlpha: 1 })
        .to(
          [titleForm, description, ...inputsGroup],
          { duration: 1, scaleY:1, stagger: 0.16, autoAlpha: 1 },
          '-=0.8',
        );

        
    }
    

  }

  componentWillUnmount() {
    const { stopLogging } = this.props;
    stopLogging();
  }

  render() {
    const {error, isLogging, isLoggedIn, authFirebase } = this.props;
    if (authFirebase && !isLoggedIn) return <Redirect to="/signin" />;
    const btnContent = isLogging ? <LoadingSpinner /> : 'Sign Up';

    return (
      <div className="wrapper-form">
        <Form ref={(form) => this.form = form} className="form" onSubmit={(e) => this.handleSubmit(e)}>
          <h2 className="title-form text-center m-3">Create a New Account</h2>
          <p className="description text-center">
            It's free and take less than 30 seconds
          </p>
          <Form.Group ref={(formGroup) => this.elementGroup = formGroup}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <PersonCircle />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="email"
                id="email"
                placeholder="name@example.com"
                value={this.state.email}
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
                id="password"
                placeholder="Password"
                aria-hidden="true"
                value={this.state.password}
                onChange={(e) => this.handleClick(e)}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <CardText />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                id="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={(e) => this.handleClick(e)}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <CardText />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={(e) => this.handleClick(e)}
              />
            </InputGroup>
            <div className="form-footer">
            <Button type="submit" className="signUp-btn btn btn-dark" disabled={error}>
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
    isLoggedIn: state.auth.isLoggedIn,
    isLogging: state.auth.isLogging,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (newUser) => dispatch(signUp(newUser)),
    stopLogging: () => dispatch({ type: 'LOGGING_END' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
