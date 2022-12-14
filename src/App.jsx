import { useReducer, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import PortalLogin from './Components/PortalLogin/PortalLogin'
import useFetch from './Hooks/useFetch'
import ArticlePage from './Pages/ArticlePage/ArticlePage'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import Register from './Pages/Registration/Register'
import UserPage from './Pages/UserPage/UserPage'
import { TYPES } from './Reducer/Action'
import { initialState, shoppingReducer } from './Reducer/ShoppingReducer'

function App() {
  const { data, loading } = useFetch("https://dummyjson.com/products")
  // const category = useFetch("https://dummyjson.com/products/categories")

  //Estado de portales
  const [portalOpen, setPortalOpen] = useState(false);

  //carga el reducer con toda la respuesta para despues poder iterar y guardat TODOS los 
  //datos en el carrito
  initialState.dataReducer = data

  const [state, dispatch] = useReducer(shoppingReducer, initialState)
  const { dataCart } = state

  //Handlers del carrito
  const addCart = (id) => {
    dispatch({ type: TYPES.ADD_CART, payload: id })
  }

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
    } else {
      console.log(id)
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
    }
  }

  //Handler de Portales
  const handlePortal = () => {
    setPortalOpen(!portalOpen)
  }

  //estado con info del usuario
  const [userName, setUserName] = useState();
  const handlerUser = (user) => {
    setUserName(user)
  }

  return (
    <div className="App">
      {portalOpen && <PortalLogin handlePortal={handlePortal} handlerUser={handlerUser} />}
      <NavBar dataCart={dataCart} handlePortal={handlePortal} userName={userName} />
      <Routes>
        <Route path='/' element={<Home data={data} loading={loading} addCart={addCart} dataCart={dataCart} delFromCart={delFromCart} />} />
        <Route path='/:productName/:id' element={<ArticlePage addCart={addCart} delFromCart={delFromCart} dataCart={dataCart} />} />
        <Route path='/cart' element={<Cart dataCart={dataCart} addCart={addCart} delFromCart={delFromCart} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user' element={<UserPage userName={userName} />} />

      </Routes>
      {/* <UserPage/> */}
      <Footer />
    </div>
  )
}

export default App
