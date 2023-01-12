import styles from './cards.module.css';

export default function Cards(props) {
   console.log(props)
   const { character } = props;
   return (<div className={styles.fondo}>


      {
         
         character.map((element) => {
            return (
               <div>
                  <h2>{element.name}</h2>
                  <h3>{element.species}</h3>



                  <p>{element.gender}</p>
                  <img src={element.image} alt="" />


               </div>
            )
         })
      }





      {/* <h1>{character[0].name}</h1> */}
   </div>);
}
