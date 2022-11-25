import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import ArticlePage from './Pages/ArticlePage/ArticlePage'
import Home from './Pages/Home/Home'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:productName/:id' element={<ArticlePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
