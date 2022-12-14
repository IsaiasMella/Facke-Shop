import React, { useRef, useState } from 'react'
import User from '../../Icons/User'
import './Register.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Register = ({ setLogued }) => {
  const initialUser = {
    name: '',
    last_name: '',
    email: '',
    password: ''
  }
  const [dataUser, setDataUser] = useState(initialUser);
  const [userSend, setUserSend] = useState(false);
  const navigate = useNavigate()
  const form = useRef()


  const handlerChange = (e) => {
    let { name, value } = e.target
    let newDatos = { ...dataUser, [name]: value }

    setDataUser(newDatos)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = ''
    await axios.post('http://localhost:3001/register', dataUser)
      .then((respuesta) => res = respuesta)
      .catch(err => {
        console.log(err.response.data)
        alert('Usted ya posee una cuenta')
      })

    setLogued(true)
    e.target.reset()
    navigate("/");
  }

  return (
    <div className='container__register'>
      <User stroke='#fff' widthUser={70} heightUser={70} />
      <form onSubmit={handleSubmit} className='registro' ref={form} >
        <input onChange={handlerChange} name='name' className='input__registro ' type="text" placeholder='Nombre' required />
        <input onChange={handlerChange} name='last_name' className='input__registro ' type="text" placeholder='Apellido' required />
        <input onChange={handlerChange} name='email' className='input__registro ' type="mail" placeholder='Mail' required />
        <input onChange={handlerChange} name='password' className='input__registro ' type="password" placeholder='Contraseña' required />

        <button type='submit' className='button__registro'>Registrarse</button>
      </form>
    </div>
  )
}

export default Register