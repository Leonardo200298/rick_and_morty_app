import { useEffect, useState } from 'react';
import './App.css';
import getCharacters from './helpers/getCharacters';

import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'


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
  console.log(characters)
  return (
    <div className='App' style={{ padding: '25px' }}>
      <Cards characters={characters} />
    </div>
  )
}

export default App
