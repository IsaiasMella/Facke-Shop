import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import FackeShop from '../../Images/FackeShop.png'
import { RemoveScroll } from 'react-remove-scroll'
import './PortalLogin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PortalLogin = ({ handlePortal, handlerUser }) => {
  const handlePropagation = (e) => e.stopPropagation()

  const initialUserLoged = {
    email: '',
    password: ''
  }
  const [userLoged, setUserLoged] = useState(initialUserLoged);
  const formLogin = useRef()

  const handlerChangeLogin = (e) => {
    let { name, value } = e.target
    let newDatos = { ...userLoged, [name]: value }

    setUserLoged(newDatos)
  }

  const handleSubmitLogin = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3001/login', userLoged)
      .then((respuesta) => {
        handlerUser(respuesta.data)
        alert('Logueo exitoso')
        handlePortal()
      })
      .catch(err => {
        console.log(err.response.data)
      })
    e.target.reset()
  }

  return ReactDOM.createPortal(
    <RemoveScroll>
      <div className='container__portal' onClick={() => handlePortal()} >
        <div className="portal_login" onClick={(e) => handlePropagation(e)} >
          <img src={FackeShop} alt="FackeShop" />
          <form onSubmit={handleSubmitLogin} action="" className="ingreso" ref={formLogin} >
            <input onChange={handlerChangeLogin} name='email' className='user__login' type="text" placeholder='Mail' required />
            <input onChange={handlerChangeLogin} name='password' className='password__login' type="password" placeholder='Contraseña' required />
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