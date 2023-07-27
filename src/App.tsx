import React from 'react';
import './App.css';
import Card from "./Components/Card/Card";
import mobileDesign from "./assets/mobile-design.jpg"

function App() {
  return (
      <div className='App'>
        <Card></Card>
          <br/>
        <img
          src={mobileDesign}
        />
      </div>

  );
}

export default App;
