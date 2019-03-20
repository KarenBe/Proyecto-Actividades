import React, { Component } from 'react';

import './App.css';
import Boton from './Componentes/Boton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Boton nombre="Boton de prueba"/>
        </header>
      </div>
    );
  }
}

export default App;
