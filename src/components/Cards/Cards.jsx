import styles from "./cards.module.css";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={styles.fondo}>
      {!characters ? (
        <LoadingComponent />
      ) : (
        characters.map((elem) => {
          return (
            <div key={elem.id}>
              <h1>{elem.name}</h1>
              <img src={elem.image} alt={elem.name} />
            </div>
          );
        })
      )}
    </div>
  );
}
