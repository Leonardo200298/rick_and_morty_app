import styles from './cards.module.css';

export default function Cards(props) {
   const { character } = props;


   return (<div className={styles.fondo}>


      {

         character.map((element, index) => {

            {

               return (
                  <div key={index}>
                     <h1>{element[0].name}</h1>
                     <h3>{element[0].species}</h3>
                     <img src={element[0].image} alt={element[0].name} />
                     <p>{element[0].gender}</p>
                     <br />
                     <h1>{element[1].name}</h1>
                     <h3>{element[1].species}</h3>
                     <img src={element[1].image} alt={element[1].name} />
                     <p>{element[1].gender}</p>
                     <br />

                  </div>
               )
            }
         })

      }





      {/* <h1>{character[0].name}</h1> */}
   </div>);
}
