import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/pages/home';
import Deckpage from './components/pages/deck';
declare global {
  interface Window {
    Telegram: any; // Adjust the type according to the structure of Telegram object
  }
}
function App() {
const telegramWebApp = (window.Telegram && window.Telegram.WebApp) || null;
  const [home,sethome]=useState(false)
  const [deck,setdeck]=useState(true)
 useEffect(()=>{telegramWebApp.ready()},[telegramWebApp])

  return (
    <div className="min-h-screen w-full bg-[#f4f4f5] overflow-hidden p-3">
      {home&&<Home sethome={sethome}/>}
     {deck && <Deckpage setdeck={setdeck}/> }
     
    </div>
  );
}

export default App;
