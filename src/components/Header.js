import React from 'react';
import './Header.css';
import './backg.css'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Header(props) {
  return (
    <div className="bg">
    <div className="header">
    <a href="#default" className="logo">PIZZA APP</a>
    <div className="header-right">
        {props.cart}

    </div>
  </div>
  </div>
    
  );
}