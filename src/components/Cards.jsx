import Card from './Card';
import styles from './cards.module.css';

export default function Cards(props) {
   console.log(styles)
   const { characters } = props;
   return (<div className={styles.fondo}>
      {characters.map((element)=>{
         return (
            <Card name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            onClose={() => window.alert('Emulamos que se cierra la card ' + element.name)}/>
         )
      })}
   </div>);
}
