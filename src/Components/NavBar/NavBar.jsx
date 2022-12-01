import React from "react";
import TotalCart from "../../Icons/TotalCart";
import Logout from "../../Icons/Logout";
import F from '../../Images/F.png'
import "./NavBar.css";
import User from "../../Icons/User";
import { Link } from "react-router-dom";
import PortalLogin from "../PortalLogin/PortalLogin";

const NavBar = ({ dataCart, handlePortal }) => {
  let comprobacion = dataCart.length > 0

  return (
    <div className="container__navbar">
      <nav className="navbar">
        <Link to='/'>
          <img className="logo__navbar" src={F} alt="logominimizado" />
        </Link>
        <ul className="container__nav-items">
          <div className={`container__cart ${comprobacion ? 'sale__cart' : ''}`}>  {/* la clase se llamaba 'sale__cart'*/}
            {comprobacion ?
              <Link to='/cart' >
                <span className='indicator'><p>{dataCart.length}</p></span>
                <TotalCart stroke={'#fff'} />
              </Link>
              :
              <TotalCart stroke={'#fff'} />
            }
          </div>
          <div className="container__user" onClick={()=>handlePortal()} >
            <User stroke={'#fff'} />
          </div>
          <div className="container__logout">
            <Logout stroke='#fff' />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
