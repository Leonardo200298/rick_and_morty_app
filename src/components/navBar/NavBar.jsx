import { Link } from 'react-router-dom';
import SearchBar from '../searcheBar/SearchBar';
import styles from './navBar.module.css';
import { getAllCharactersCopy } from '../../redux/actions/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FilterBySpecie from '../filterBySpecie/FilterBySpecie';
import OrderBy from '../orderBy/OrderBy';


export default function NavBar() {
  const dispatch = useDispatch();
  const handleRefresh = () => {


    dispatch(getAllCharactersCopy());
  };
  useEffect(() => {
    handleRefresh();

  }, [])
  return (
    <div>


      <nav className={styles.menu}>
        <ul>
          <Link onClick={handleRefresh} to='/'>
            <li>Home</li>

          </Link>

          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/login'>
            <li>Login</li>
          </Link>

          <li>
            <SearchBar />
          </li>
          <FilterBySpecie />
          <OrderBy/>
        </ul>
          
      </nav>
    </div>
  )
}
