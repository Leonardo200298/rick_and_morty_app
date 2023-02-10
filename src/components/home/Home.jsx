/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Cards from '../Cards/Cards'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters } from '../../redux/actions/actions';
import styles from './home.module.css'
/* import {Routes , Route } from 'react-router-dom'; */

export default function Character() {
const dispatch = useDispatch();
const charactersState = useSelector((state)=>{
    return state.allCharacters
})

useEffect(() => {
    dispatch(getAllCharacters())
}, [charactersState]) 
  return (
    <div className={styles.fondo}>
        {charactersState&&charactersState.map((elem)=>{
          return (  <Cards 
          key={elem.id}
          name={elem.name}
          img={elem.image}
          specie={elem.species}
          />)
        })}
    </div>
  )
}

