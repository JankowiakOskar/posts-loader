import './Mesage.scss'
import React, {useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import { removeAuthError } from '../../store/actions/authActions'
import gsap from 'gsap';

const Message = (props) => {
  const { authError, removeError, formBottomPos } = props;
  const messageRef = useRef(null);
  const tl = gsap.timeline({defaults: {ease: 'power4.out'}})

  const animationIN = () => {
    const message = messageRef.current;
    gsap.set(message, {autoAlpha: 0})
    tl.to(message, {duration: 1, y: `+=${formBottomPos - 70}`, autoAlpha: 1})
  }

  const animationOUT = () => {
    const message = messageRef.current;
    tl.to(message, {duration: 1, y: '0', autoAlpha:0})
  }

 

  useEffect(() => {
    if(authError){
      animationIN();
    } else if (!authError) {
      animationOUT();
    }
  })

  useEffect(() => {
    removeError()
  },[removeError])

  const handleClick = () => {
    animationOUT();
    setTimeout(() => {
      removeError();
    },800)
  }

  const errorMsg = authError ? (
    <div className="message-error">
      <h4>Oops, we got an error <i className="fas fa-bug"></i>:</h4>
      <p>{authError.message}</p>
    </div>
  ) : null;


  return (
    authError ? (
      <div ref={messageRef} className="message">
        {errorMsg}
        <div className="message-wrapper-btn">
          <button className="message-btn" onClick={handleClick}>Ok</button>
        </div>
    </div>
    ) : null
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    removeError: () => dispatch(removeAuthError())
  } 
}

export default connect(mapStateToProps,mapDispatchToProps)(Message);
