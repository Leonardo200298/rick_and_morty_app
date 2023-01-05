import styles from './cards.module.css';
export default function Card(props) {
  
   return (
      <div>
         
         <button onClick={props.onClose}>X</button>
         <h2 className={styles.letra}>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="personaje" />
         
      </div>
   );
}
