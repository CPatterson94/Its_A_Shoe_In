import {Link} from "react-router-dom";
//import {useState} from "react";
//import {useSelector} from "react-redux";
//import {useLogoutMutation} from 
//import SearchBar from 

function Nav(){

    // const [logout] = useLogoutMutation();
    // const user = useSelector((state)=>state.auth.credentials.user) || "";

   return (
       <>
           <nav>
               <div >
               {/* <SearchBar/> */}
               </div>
               <div>
                   <Link to="/">Products</Link>
                   <Link to="/cart">Cart</Link>
                   {/* {!user.userId && <Link to={"/register"}>Login/Register</Link>}
                   {user.userId && <Link to={"/user"}></Link>} */}
               </div>
           </nav>
       </>
   )
}

export default Nav;