import {ALL_CHARACTERS, ALL_CHARACTERS_COPY, FILTER, ORDERBY } from './action-types';
import axios from 'axios';

export const orderBy = (payload) =>{
    return function (dispatch){
        dispatch({
            type:ORDERBY,
            payload
        })
    }
}

export const filterBySpecie = (specie) =>{
    return function (dispatch){
        dispatch({
            type:FILTER,
            payload:specie
        })
    }
}
export const getAllCharactersCopy = ()=>{
    return function (dispatch){
        axios.get("https://rickandmortyapi.com/api/character/")
        .then((response)=>{
            dispatch({
                type:ALL_CHARACTERS_COPY,
                payload:response.data.results
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export const getAllCharacters = (name=null)=>{
    return function (dispatch){
        axios.get("https://rickandmortyapi.com/api/character/?name="+name)
        .then((response)=>{
            dispatch({
                type:ALL_CHARACTERS,
                payload:response.data.results
            })
        })
        .catch((error)=>{
            dispatch({
                type:ALL_CHARACTERS,
                payload:error.message
            })
            console.log(error)
        })
    }
}


