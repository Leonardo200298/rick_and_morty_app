/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import styles from './searchBar.module.css';


export default function SearchBar(props) {
  const [query, setQuery] = useState();
  const [character, setCharacter] = useState("");
  

  const getCharacterSearchBar =async (e)=>{
    try{
      const url = `https://rickandmortyapi.com/api/character/?name=${query}`
      const res = await fetch(url);
      const ress = await res.json();
      const {results} = await ress;
      setCharacter(results);
  }catch(error){
      console.log(error);
  }
  }
  useEffect(()=>{
    getCharacterSearchBar();
  },[query])
  console.log(character)
  return (
    <div>
      <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
      <div className={styles.fondo}>
        {character&&character.map((elem)=>{
          return (
            <div key={elem.id}>
            <h1>{elem.name}</h1>
            <img src={elem.image} alt={elem.name} />
            <p>Specie: {elem.species}</p>
         </div>
          )
        })}
      </div>
    </div>
  );
}
