import React from 'react';
import { Parent } from './Test'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is react</h1>
        <Parent />
        <h1>End of react</h1>
      </header>
    </div>
  );
}

export default App;
