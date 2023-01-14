import { useEffect, useState } from 'react'
import './App.css'

import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'

function App() {
  const [character, setCharacters] = useState([{
    name: "",
    species: "",
    gender: "",
    image: ""
  }]);
  useEffect( () => {

    setCharacters({
      ...characters,
      name: characters.name,
      species: characters.species,
      gender: characters.gender,
      image: characters.image
    })
    return ()=>{
        console.log("estoy en un callback")
      }
    
  }, [])

  console.log(character)
  const handleInputSearch = (event) => {

  }
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <SearchBar
          handleInputSearch={handleInputSearch}
        />
      </div>

      <hr />
      <div>
        <Cards
          character={character}
        />
      </div>
    </div>
  )
}

export default App
