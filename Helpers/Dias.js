const revisarDias = (dato) => {
  const fecha = new Date();
  const dias = fecha.getDay();
  const resultado = dias + dato
  console.log(resultado);

  const calcularDias = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sabado",
  };

  const dias_default = 0;
  const calculado = calcularDias[resultado] || dias_default;
  return calculado;
};
export default revisarDias;
