import React from 'react'
import ReactDOM from 'react-dom'
import FackeShop from '../../Images/FackeShop.png'
import { RemoveScroll } from 'react-remove-scroll'
import './PortalLogin.css'
import { Link } from 'react-router-dom'

const PortalLogin = ({ handlePortal }) => {
  const handlePropagation = (e) => e.stopPropagation()

  return ReactDOM.createPortal(
    <RemoveScroll>
      <div className='container__portal' onClick={() => handlePortal()} >
        <div className="portal_login" onClick={(e) => handlePropagation(e)} >
          <img src={FackeShop} alt="FackeShop" />
          <form action="" className="ingreso">
            <input className='user__login' type="text" placeholder='Mail' required />
            <input className='password__login' type="password" placeholder='Contraseña' required />
            <button className='button__login'>Ingresar</button>
          </form>
          <Link to="/register" className='register' onClick={()=>handlePortal()} >Registrarse</Link>
        </div>
      </div>
    </RemoveScroll>
    , document.getElementById('portal')
  )
}

export default PortalLogin