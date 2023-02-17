/* eslint-disable react-hooks/exhaustive-deps */
import Cards from '../Cards/Cards'
import { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharactersCopy } from '../../redux/actions/actions';
import styles from './home.module.css';
import Paginated from '../paginated/Paginated';

export default function Character() {
const charactersState = useSelector((state)=>{
    return state.allCharacters;
})
const [currentPage, setCurrentPage]=useState(1);
const [charactersPerPage] = useState(5);
const lastCharacter = currentPage*charactersPerPage;
const firstCharacter = lastCharacter-charactersPerPage;
const intervalCharacters = charactersState.slice(firstCharacter,lastCharacter);



const dispatch = useDispatch();
const error = useSelector((state) => {
  return state.error;
})

useEffect(() => {
    dispatch(getAllCharactersCopy());
}, []) 
  return (
    <div>
        <>

        <Paginated 
          setCurrentPage={setCurrentPage}
          charactersPerPage={charactersPerPage}
          charactersState={charactersState.length}
        />
        </>
        <div className={styles.fondo}>
        
        
        {error==="Request failed with status code 404"?<p className={styles.danger}>No se ha encontrado un personaje con ese nombre</p>:intervalCharacters.map((elem)=>{
          return (  <Cards 
            key={elem.id}
            name={elem.name}
            img={elem.image}
            specie={elem.species}
            />)
          })}
          </div>
    </div>
  )
}

