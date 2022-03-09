import React from 'react';
import './Header.css';
import './backg.css'

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