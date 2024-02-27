import React from 'react';
import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  const items = ['you will get placed', 'Maybe you got placed ', ' no skill test no placement'];

  return (
    <div className="App">
      <h1>Coding Ninja Ract Dropdown Component</h1>
      <Dropdown items={items} />
    </div>
  );
}

export default App;
