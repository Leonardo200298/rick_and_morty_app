import './App.css';
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';
import About from './components/about/About';
import Login from './components/login/Login'
import {Routes , Route } from 'react-router-dom';
function App() {

  return (
    <div className='App' style={{ padding: '25px' }}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </div>
  )
}

export default App
