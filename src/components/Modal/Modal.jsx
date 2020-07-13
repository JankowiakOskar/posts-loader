import './Modal.scss';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import {Button, Modal } from 'react-bootstrap';

const ModalMessage = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const redirectToForm = (e) => {
    const value = e.target.value
    if(value === 'login') {
      history.push('/signin')
    }else if (value === 'new account') {
      history.push('/signup')
    }
  }

return (
  <>
    <Button variant={'dark'} className="modal-btn" onClick={handleShow}>
      Read more...
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Do you want read more articles?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Look's like you're logged out. Please sign in or create account to check more articles</Modal.Body>
      <Modal.Footer>
        <Button value="login" className="modalBtn-login" variant={'dark'} onClick={(e)=> {handleClose(); redirectToForm(e);}}>
            Login
        </Button>
        <Button value="new account" className="modalBtn-newAcc" variant={'dark'} onClick={(e)=> {handleClose(); redirectToForm(e);}}>
            Create account
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  );
};

export default ModalMessage;
