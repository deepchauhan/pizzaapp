import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Popup.css';
import './Cart.css';

const Popup=(props)=> {

  return (
    <>
<Modal className='bgg' show={props.modal} fullscreen={'lg-down'} onHide={props.onCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title><p className='titlee'>MAKE IT BETTER </p></Modal.Title>
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