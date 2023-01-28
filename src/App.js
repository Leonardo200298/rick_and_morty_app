import { useEffect, useState } from 'react';
import './App.css';
import getCharacters from './helpers/getCharacters';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards.jsx';
import Episodes from './components/Episodes/Episodes';
import About from './components/About/About';
import Login from './components/Login/Login'
import {Routes , Route } from 'react-router-dom';



function App() {
  const [characters, setCharacters] = useState();

  const getCharactersApp = () => {
    getCharacters()
      .then((data) => {
        setCharacters(data)
      })
  }
  useEffect(() => {
    getCharactersApp();
  }, [])
  return (
    <div className='App' style={{ padding: '25px' }}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Cards characters={characters} />}/>
        <Route path='/episodes' element={<Episodes/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
  {/*     <Cards characters={characters} /> */}
    </div>
  )
}

export default App
