import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import getEpisodes from '../../helpers/getEpisodes'
import styles from './episodes.module.css';

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [chars, setChars] = useState(new Map());
  const getEpisodesHere = () => {
    getEpisodes().then((data) => {
      setEpisodes(data);
    })
  }
  //addChar agrega un personaje al Map
  function addChar(char){
    const newMap = new Map(chars)
    newMap.set(char.url, char)
    setChars(newMap)
  }
  //getChar también agrega un personaje, pero va con fetch, y devuelve un jsx
  async function getChar(elem){
    const newChar = await fetch(elem);
    const copy = await newChar.json();
    console.log(typeof copy)
    //1. agrego el char que me traigo al Map 
    addChar(copy);
    console.log(chars)
    /* //2. devuelvo un jsx
    return (
      <>
        <h1>{copy.name}</h1>
      </>
    ) */ 
  }

  useEffect(() => {
    getEpisodesHere();


  }, [])
  return (
    <div className={styles.containerEpisodes}>{
      episodes.map((episode) => {
        return (
          <div key={episode.id}>
            <h1>Title: {episode.name}</h1>
            <h2>Aire date: {episode.air_date}</h2>
            <h2>Number Episode: {episode.episode}</h2>
            {episode.characters.map(async (elem)=>{
              chars.has(elem)?
                <div key={chars.get(elem).id}>
                  <h1>{chars.get(elem).name}</h1>
                </div>
                :
                getChar(elem)
              
            })}
          </div>
          
        )
      })
    }</div>
  )
}
