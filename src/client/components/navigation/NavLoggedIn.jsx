import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import { faUser } from '@fortawesome/free-solid-svg-icons'; 


function NavLoggedIn() {
  return (
    <nav>
      <div>
        <Link to="/"className="NavLink"> 
        Home
          <FontAwesomeIcon icon={faStore} size="3x" style={{ color: "#000000" }} />
        </Link>
        <Link to="/cart"className="NavLink">
        Cart
             <FontAwesomeIcon icon={faCartShopping} size="3x" style={{ color: "#000000" }} />
          </Link>
          <Link to="/account"className="NavLink">
          Account
             <FontAwesomeIcon icon={faUser} size="3x" style={{ color: "#000000" }} />
          </Link>
      </div>
    </nav>
  );
}

export default NavLoggedIn;

