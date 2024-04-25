import React from 'react'
import Deckbox from './deckbox'
import DownIcon from '../icon/downicon'
function Topsection() {
  return (
    <>
    <div className=' flex items-center justify-between'>
      <p className=' text-[#8c868c] text-[14px]'>MY DECKS</p>
      <div className=' flex items-center justify-center gap-[2px]'>
        <div>
          <DownIcon h={20} w={20} c='#38609d'/>
        </div>
        <p className=' text-[#38609d] text-[14px] font-normal'>Show All</p>
      </div>
      
     </div>

     <div className=' w-full mt-2 flex flex-col gap-2'>
        <Deckbox name='Basic Geography'/>
        <Deckbox name='English Phrasal Verb'/>
        <Deckbox name='Irregular Verbs'/>
        <button className=' w-full h-[50px] bg-[#3390ec] text-white rounded-lg font-medium'>+ Add</button>
        <div className=' h-[55px] w-full bg-white p-1 rounded-md text-[#8c868c] text-[15px] flex items-center'>
        Amazing work! 🌟 You've reviewed all the decks for now. Come back later for more.
        </div>
      </div>
      </>
  )
}

export default Topsection
