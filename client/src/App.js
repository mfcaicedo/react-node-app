import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //Se declara un estado para guardar los datos que se obtengan del servidor 
  const [data, setData] = useState({ message: "" });

  /**
   * @brief Metodo para obtener los datos del servidor
   */
  const getData = async () => {
    fetch("/api")
    .then(response => response.json())
    .then(data => setData(data));
  };

  //UseEffect se ejecuta cuando se carga el componente
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data ? data.message : "Cargando..."}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
