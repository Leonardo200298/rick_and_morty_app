/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
import React from "react";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";


export default function NavBar(props) {
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
            <SearchBar characters={props}/>
          </li>
        </ul>
      </nav>
    </div>
  );
}
