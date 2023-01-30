import { useEffect, useState } from 'react';
import './App.css';
import getCharacters from './helpers/getCharacters';
import Cards from './components/Cards/Cards.jsx'
import Navbar from 'react-bootstrap/Navbar'


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
      <Navbar/>
      <Cards characters={characters} />
    </div>
  )
}

export default App
