import { useEffect, useState } from "react";
import styles from "../../styles/Traer.module.css";
import TraerDias from "../TraerDias/TraerDias";

const TraerCanchas = ({ canchas }) => {
  const [guardarSeleccion, setguardarSeleccion] = useState();

  if (!canchas)
    return (
      <div className={styles.cards}>
        <h2 className={styles.titulo}>No hay canchas disponibles</h2>;
      </div>
    );
  // return <h2>Hola</h2>;
  return (

    <>
    {!guardarSeleccion ?  <div className={styles.cards}>
      <h4 className={styles.title}  >Reservá tu cancha</h4>
      {canchas.map((c) => (
        <div
          className={styles.box}
          key={c.id}
          onClick={() => setguardarSeleccion(c.nombre)}
        >
          <h4 className={styles.titleCard}>{c.nombre}</h4>
          {/* <p className={styles.paraCard}>{c.info}</p> */}
        </div>
      ))}
    </div> :  <TraerDias guardarSeleccion={guardarSeleccion} /> } 


    


   
    </>
  );
};

export default TraerCanchas;
