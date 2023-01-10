import Card from './Card';
import styles from './cards.module.css';
import styled from 'styled-components';
const DivCard = styled.div`
   border:solid collapse 22px lightblue;
 
`;
export default function Cards(props) {

   const { characters } = props;
   return (<DivCard className={styles.fondo}>
      {characters.map((element)=>{
         return (
            <Card name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            onClose={() => window.alert('Emulamos que se cierra la card ' + element.name)}/>
         )
      })}
   </DivCard>);
}
