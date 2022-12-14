import React from "react";
import TotalCart from "../../Icons/TotalCart";
import Logout from "../../Icons/Logout";
import F from '../../Images/F.png'
import "./NavBar.css";
import User from "../../Icons/User";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ dataCart, handlePortal, userName, logued, setLogued, initialUserState, handlerUser }) => {
  const navigation = useNavigate()
  let comprobacion = dataCart.length > 0

  const handleUnsubscribe = () => {
    handlerUser(initialUserState)
    setLogued(false)
    navigation('/')
  }


  return (
    <div className="container__navbar">
      <nav className="navbar">
        <Link to='/'>
          <img className="logo__navbar" src={F} alt="logominimizado" />
        </Link>
        <ul className="container__nav-items">
          <div className={`container__cart ${comprobacion ? 'sale__cart' : ''}`}>  {/* la clase se llamaba 'sale__cart'*/}
            {logued &&
              (comprobacion ?
                <Link to='/cart' >
                  <span className='indicator'><p>{dataCart.length}</p></span>
                  <TotalCart stroke={'#fff'} />
                </Link>
                :
                <TotalCart stroke={'#fff'} />)
            }
          </div>
          {
            (logued && userName) ?
              <Link to='/user' >
                <User stroke={'#fff'} />
              </Link>
              :
              <div className="container__user" onClick={() => handlePortal()} >
                <User stroke={'#fff'} />
              </div>
          }
          {
            logued &&
            <div className="container__logout" onClick={() => handleUnsubscribe()}>
              <Logout stroke='#fff' />
            </div>
          }
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
