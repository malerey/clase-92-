import React, { useState } from 'react';
import MuestraDeEstadoSimple from './componentes/MuestraDeEstadoSimple';
import './App.css';

const App = () => {

  const [ cantidadDeClicks, setCantidadDeClicks ] = useState(0)
  const [ nombreUsuario, setNombreUsuario ] = useState("usuario")
  const [ valorDelInput, setValorDelInput ] = useState("")

  const handleClick = () => {
    setCantidadDeClicks(cantidadDeClicks + 1)
  }

  const handleClickSaludo = () => {
    setNombreUsuario(valorDelInput)
  }

  const handleChange = (evento) => {
    setValorDelInput(evento.target.value)
  }

  return (
    <div className="App">

    <h1>Contador de clicks</h1>

    <button onClick={handleClick}>Agregar un click</button>

    <p>Cantidad de clicks: {cantidadDeClicks}</p>



    <h2>Saludador de usuarios</h2>

    <input type="text" placeholder="Escribi tu nombre" onChange={handleChange} />
    <button onClick={handleClickSaludo}>Saludar</button>

    <h3>Hola, {nombreUsuario}</h3>

    <MuestraDeEstadoSimple />

    </div>
  );
}

export default App;
