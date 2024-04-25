import React, { useState } from 'react';
import './App.css';
// import DownIcon from './components/icon/downicon';
// import Deckbox from './components/core/deckbox';
import Topsection from './components/core/topsection';
import Publicsection from './components/core/publicsection';
import Bottomsection from './components/core/bottomsection';

function App() {
  const [home,sethome]=useState(false)
  return (
    <div className="min-h-screen w-full bg-[#f4f4f5] overflow-hidden p-3">
      {home&&(<><Topsection/>
     <Publicsection/>
     <Bottomsection/></>)}
     
    </div>
  );
}

export default App;
