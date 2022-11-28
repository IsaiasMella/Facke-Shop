import { useReducer, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import useFetch from './Hooks/useFetch'
import ArticlePage from './Pages/ArticlePage/ArticlePage'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import { initialState, shoppingReducer } from './Reducer/ShoppingReducer'

function App() {
  const { data, loading } = useFetch("https://dummyjson.com/products")
  // const category = useFetch("https://dummyjson.com/products/categories")

  //carga el reducer con toda la respuesta para despues poder iterar y guardat TODOS los 
  //datos en el carrito
  initialState.dataReducer = data

  const [state, dispatch] = useReducer(shoppingReducer, initialState)
  const { dataCart } = state

  return (
    <div className="App">
      <NavBar dataCart={dataCart} />
      <Routes>
        <Route path='/' element={<Home data={data} loading={loading} dispatch={dispatch} dataCart={dataCart} />} />
        <Route path='/:productName/:id' element={<ArticlePage />} />
        <Route path='/cart' element={<Cart dataCart={dataCart}/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
