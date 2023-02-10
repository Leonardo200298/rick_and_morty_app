import {ALL_CHARACTERS} from './action-types';
import axios from 'axios';

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
            console.log(error)
        })
    }
}


