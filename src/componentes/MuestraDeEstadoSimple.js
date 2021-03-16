import React, { useState } from "react";

const MuestraDeEstadoSimple = () => {
  let [nombre, setNombre] = useState("Clark")
  let profesion = "Periodista"
  let seniasParticulares = "Usa anteojos"


  const handleClick = () => {
    setNombre("Superman")

    // estas variables, aunque cambien, no se ven en la web
    // porque el cambio de una variable que no esta en el estado
    // no provoca una actualizacion del DOM
    profesion = "Superheroe"
    seniasParticulares = "Usa el calzon por encima de la ropa"
    console.log(nombre, profesion, seniasParticulares)
  }

  return (
    <div>
      <h2>Personaje</h2>
      <h3>Nombre:</h3>
      <p>{nombre}</p>
      <h3>Profesion:</h3>
      <p>{profesion}</p>
      <h3>Señas particulares:</h3>
      <p>{seniasParticulares}</p>

      <button onClick={handleClick}>Hay una emergencia!</button>
    </div>
  );
};

export default MuestraDeEstadoSimple;
