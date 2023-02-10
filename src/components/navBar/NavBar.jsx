import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searcheBar/SearchBar';
import styles from './navBar.module.css';


export default function NavBar() {
  return (

    <div>
        
        <nav className={styles.menu}>
        <ul>
            <Link to='/'>
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
        </ul>
      </nav>
       
    </div>
  )
}
