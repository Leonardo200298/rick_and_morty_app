import React from 'react';
import styles from './login.module.css'
 const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
 export default function Login() {
  return (
    <div className={styles.form}>
      <form >
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Apellido</label>
        <input type="text" />

        <label htmlFor="">Email</label>
        <input type="text" />

        <label htmlFor="">Personaje Favorito</label>
        <input type="select" />

        <label htmlFor="">Capitulo preferido</label>
        <input type="select" />

        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
