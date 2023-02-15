import React from 'react';
import { useDispatch } from 'react-redux';
import { filterBySpecie } from '../../redux/actions/actions';


export default function FilterBySpecie() {
  const dispatch = useDispatch();  
  const handlerFilter = (event)=>{
    dispatch(filterBySpecie(event.target.value))
  }
  return (
    <div>
        <select onChange={handlerFilter}>
            <option value="filter" disabled>filter by specie</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
           {/*  <option value="Cronenberg">Cronenberg</option>
            <option value="Humanoid">Humanoid</option> */}
          
        </select>
    </div>
  )
}
