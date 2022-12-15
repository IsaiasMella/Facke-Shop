import React, { useRef, useState } from 'react'
import User from '../../Icons/User'
import './UserPage.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserPage = ({ userName, setLogued, handlerUser }) => {
  const [actualizarUser, setActualizarUser] = useState(userName);
  const navigate = useNavigate()
  const form = useRef()

  //toma los cambios y los va aplicando en tiempo real
  const handlerChange = (e) => {
    let { name, value } = e.target
    let newDatos = { ...actualizarUser, [name]: value }

    setActualizarUser(newDatos)
    handlerUser(actualizarUser)
  }

  //envia los datos para poder actualizarlos al back
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put('http://localhost:3001/user', actualizarUser)
      .then(() => {
        alert('usuario actualizado')
        setLogued(true)
        navigate('/')
      })
      .catch(err => {
        console.log(err.response.data)
        alert('No se encontro usuario')
      })
    e.target.reset()
  }

  //envia al back la info necesaria para poder eliminar la cuenta
  const deleteAcount = async () => {
    await axios.delete('http://localhost:3001/user/delete/' + userName.id)
      .then(() => {
        alert('usuario eliminado')
        setLogued(false)
        navigate('/')
      })

      .catch(err => {
        console.log(err.response.data)
      })
  }

  return (
    <div className='container__register'>
      <User stroke='#fff' widthUser={70} heightUser={70} />
      <h3 className='saludo__user'>Hola {`${actualizarUser.name}`}</h3>
      <p className='saludo__user'>pode cambiar tus datos</p>
      <form onSubmit={handleSubmit} className='registro' ref={form} >
        <input onChange={handlerChange} value={actualizarUser.name} name='name' className='input__registro_actualizacion' type="text" />
        <input onChange={handlerChange} value={actualizarUser.last_name} name='last_name' className='input__registro_actualizacion' type="text" />
        <input onChange={handlerChange} value={actualizarUser.email} name='email' className='input__registro_actualizacion' type="mail" />
        <input onChange={handlerChange} name='password' className='input__registro_actualizacion' type="text" required autoComplete='off' />

        <button type='submit' className='button__registro'>Guardar Cambios</button>
      </form>
      <small className='borrar__cuenta' onClick={deleteAcount}>Borrar cuenta</small>
    </div>
  )
}

export default UserPage