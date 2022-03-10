import React from 'react';
import './Header.css';
import './backg.css'

export default function Header(props) {
  return (
    <div className="bg">
    <div className="header">
    <div className="header-right">
        {props.cart}

    </div>
  </div>
  </div>
    
  );
}