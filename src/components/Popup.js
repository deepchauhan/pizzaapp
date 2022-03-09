import  { useState, useEffect, useCallback } from 'react';
import {Modal,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Popup=(props)=> {

  return (
    <>
      <Modal show={props.modal} fullscreen={'lg-down'} onHide={props.onCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>A FEW ADD-ONS CAN'T BE THAT BAD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>

            <div>SELECT SIZE
               {props.size}
             
            </div>
            <div>SELECT TOPPINGS
                {props.toppings}
            </div>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default Popup;