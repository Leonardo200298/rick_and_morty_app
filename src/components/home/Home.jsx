/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Cards from '../Cards/Cards'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharactersCopy } from '../../redux/actions/actions';
import styles from './home.module.css';

export default function Character() {
const dispatch = useDispatch();
const charactersState = useSelector((state)=>{
    return state.allCharacters;
})

const error = useSelector((state) => {
  return state.error;
})
useEffect(() => {
    dispatch(getAllCharactersCopy());
}, []) 
  return (
    <div className={styles.fondo}>
      
        {error==="Request failed with status code 404"?<p className=''>No se ha encontrado un personaje con ese nombre</p>:charactersState.map((elem)=>{
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

