import React from 'react';
import './App.css';
import DownIcon from './components/icon/downicon';
import Deckbox from './components/core/deckbox';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#f4f4f5] overflow-hidden p-3">

     <div className=' flex items-center justify-between'>
      <p className=' text-[#8c868c] text-[14px]'>MY DECKS</p>
      <div className=' flex items-center justify-center gap-[2px]'>
        <div>
          <DownIcon h={20} w={20} c='rgb(59 130 246)'/>
        </div>
        <p className=' text-blue-500 text-[14px] font-normal'>Show All</p>
      </div>
      
     </div>

     <div className=' w-full mt-2 flex flex-col gap-2'>
        <Deckbox name='Basic Geography'/>
        <Deckbox name='English Phrasal Verb'/>
        <Deckbox name='Irregular Verbs'/>
        <button className=' w-full h-[55px] bg-[#3390ec] text-white rounded-md font-medium'>+ Add</button>
      </div>
    </div>
  );
}

export default App;
