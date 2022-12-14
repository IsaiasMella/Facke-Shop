import React, { useRef, useState, useEffect } from 'react'
import User from '../../Icons/User'
import './UserPage.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserPage = ({ userName }) => {
  const initialUser = {
    id: ''
  }

  const [actualizarUser, setActualizarUser] = useState(userName);
  const [deleteUser, setDeletUser] = useState(initialUser);
  const form = useRef()

  const handlerChange = (e) => {
    e.preventDefault()
    let { name, value } = e.target
    let newDatos = { ...actualizarUser, [name]: value }

    setActualizarUser(newDatos)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = ''
    await axios.put('http://localhost:3001/user', actualizarUser)
      .then((respuesta) => {
        res = respuesta
        alert('usuario actualizado')
      })
      .catch(err => {
        console.log(err.response.data)
        alert('No se encontro usuario')
      })
    e.target.reset()
  }

  const deleteAcount = async () => {
    await axios.delete('http://localhost:3001/user/delete/' + userName.id)
      .then((respuesta) => {
        console.log(respuesta.data)
      })

      .catch(err => {
        console.log(err.response.data)
        alert(err.response.data)
      })
  }

  return (
    <div className='container__register'>
      <User stroke='#fff' widthUser={70} heightUser={70} />
      <h3 className='saludo__user'>Hola {`${userName.name}`}</h3>
      <p className='saludo__user'>pode cambiar tus datos</p>
      <form onSubmit={handleSubmit} className='registro' ref={form} >
        <input onChange={handlerChange} placeholder={userName.name} name='name' className='input__registro_actualizacion' type="text" />
        <input onChange={handlerChange} placeholder={userName.last_name} name='last_name' className='input__registro_actualizacion' type="text" />
        <input onChange={handlerChange} placeholder={userName.email} name='email' className='input__registro_actualizacion' type="mail" />
        <input onChange={handlerChange} placeholder={userName.password} name='password' className='input__registro_actualizacion' type="text" />

        <button type='submit' className='button__registro'>Registrarse
        </button>
      </form>
      <small className='borrar__cuenta' onClick={deleteAcount}>Borrar cuenta</small>
    </div>
  )
}

export default UserPage