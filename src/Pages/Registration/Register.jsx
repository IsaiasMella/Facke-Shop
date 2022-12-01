import React from 'react'
import User from '../../Icons/User'
import './Register.css'

const Register = () => {
  return (
    <div className='container__register'>
      <User stroke='#fff' widthUser={70} heightUser={70} />
      <form action="" className='registro'>
        <input className='input__registro ' type="text" placeholder='Nombre' />
        <input className='input__registro ' type="text" placeholder='Apellido' />
        <label htmlFor="FechaNacimiento" className='label__fecha-nacimiento'>Fecha de Nacimiento</label>
        <input className='input__registro ' type="date" id='FechaNacimiento' />
        <input className='input__registro ' type="text" placeholder='Mail' />
        <input className='input__registro ' type="password" placeholder='Contraseña' />
        <button className='button__registro'>Registrarse</button>
      </form>
    </div>
  )
}

export default Register