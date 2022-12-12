import horas from "./Horas";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
import styles from "../styles/Enviar.module.css";

const enviarDia = ({ datos, info }) => {
  const [btnvalue, setBtnvalue] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [generar, setGenerar] = useState("");

  const funcionRevisar = (hs) => {
    setBtnvalue(hs);
    setMostrar(true);
  };
  const datosF = datos + " a las " + btnvalue + " hs ";

  const enviar = (datosF) => {
    const msjP = `Hola, quiero alquilar la cancha + ${info} el dia `;
    const url = `https://api.whatsapp.com/send?phone=542210303456&text=${escape(
      msjP
    )}+${escape(datosF)}`;
    setGenerar(url);
  };
  return (
    <div className={styles.padreP}>
      <h4>Seleccione una hora </h4>

      <ButtonGroup
        sx={{ display: "flex", flexWrap: "wrap", m: 1 }}
        variant="contained"
        aria-label="outlined primary button group"
        className={styles.contenedor}
        color="secondary"
      >
        {horas.map((hs) => (
          <Button
            onClick={() => funcionRevisar(hs.horario)}
            key={hs.id}
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            {hs.horario}
          </Button>
        ))}
      </ButtonGroup>

      {mostrar ? (
        <div className={styles.confirmarP}>
          <p>Usted a selecionado</p>
          <p>{btnvalue ? datosF : ""}</p>
          <ButtonGroup>
            <Button
              variant="contained"
              aria-label="outlined primary button group"
              onClick={() => window.location.reload()}
            >
              Cancelar
            </Button>
            <Button
              onClick={() => enviar(datosF)}
              variant="contained"
              aria-label="outlined primary button group"
            >
              <a target="_blank" href={generar}>
                Enviar
              </a>
            </Button>
          </ButtonGroup>
        </div>
      ) : null}
    </div>
  );
};
export default enviarDia;
