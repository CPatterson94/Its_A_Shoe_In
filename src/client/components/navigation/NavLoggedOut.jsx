import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import { faUser } from '@fortawesome/free-regular-svg-icons'; 
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'; 

function NavLoggedOut() {


  return (
    <>
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
          <Link to={"/register"}className="NavLink">
          Register
          <FontAwesomeIcon icon={faUserPlus} size="3x" style={{ color: "#000000" }} />
          </Link>
          <Link to="/login" className="NavLink">
          Login
             <FontAwesomeIcon icon={faUser} size="3x" style={{ color: "#000000" }} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavLoggedOut;
