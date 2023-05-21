import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <div className="navbar">
         <Link  className="link" to="/">Home</Link>
         <Link className="link"  to="/student">Students</Link>
         <Link className="link" to="/contact">Contact Us</Link>
     
        </div>
    )
}
export default Nav;