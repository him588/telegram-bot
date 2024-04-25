import React, { useState } from 'react';
import './App.css';
// import DownIcon from './components/icon/downicon';
// import Deckbox from './components/core/deckbox';

import Home from './components/pages/home';
import Deckpage from './components/pages/deck';
function App() {
  const telegram = typeof window !== 'undefined' && window.Telegram ? window.Telegram.WebApp : null;

  const [home,sethome]=useState(false)
  const [deck,setdeck]=useState(true)
  return (
    <div className="min-h-screen w-full bg-[#f4f4f5] overflow-hidden p-3">
      {home&&<Home/>}
     {deck && <Deckpage/> }
     
    </div>
  );
}

export default App;
