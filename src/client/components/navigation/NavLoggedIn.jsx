import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import { faUser } from '@fortawesome/free-solid-svg-icons'; 


function NavLoggedIn() {
  return (
    <nav className="navbar">
    <div className="nav-list">
    <Link to="/"className="nav-link">
    <span className="link-text">Home</span>
      <FontAwesomeIcon icon={faStore} size="3x" style={{ color: "#000000" }} className="nav-icon"/>
      </Link>
          <Link to="/cart"className="nav-link">
          <span className="link-text">Cart</span>
             <FontAwesomeIcon icon={faCartShopping} size="3x" style={{ color: "#000000" }}className="nav-icon" />
          </Link>
          <Link to="/account"className="nav-link">
          <span className="link-text">Account</span>
             <FontAwesomeIcon icon={faUser} size="3x" style={{ color: "#000000" }} className="nav-icon"/>
          </Link>
      </div>
    </nav>
  );
}

export default NavLoggedIn;

