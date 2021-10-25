
import { useState, useEffect } from 'react';
import './App.css';
import Section from './components/Section/Section';
import Player from './components/Player/Player';
import AuctionItems from './components/AuctionItems/AuctionItems';



function App() {
  const [playerItems, setPlayerItems] = useState([]);


  const submitPlayerHandler = () => {

  }

  return (
    <div className="App">
      <Player onSubmit={submitPlayerHandler}/>
      <AuctionItems />
      <Section />
    </div>
  );
}

export default App;
