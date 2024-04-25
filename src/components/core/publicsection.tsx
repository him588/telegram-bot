import React from 'react'
import Publicdeck from './publicdeck'
import SearchIcon from '../icon/searchicon'

function Publicsection() {
  return (
    <div className=' mt-4 '>
        <p className=' text-[#8c868c] text-[14px]'>PUBLIC DECKS</p>
        <div className=' flex flex-col gap-2 mt-2'>
            <Publicdeck/>
            <Publicdeck/>
        </div>
        <div className=' flex  justify-center items-center gap-2 mt-3'>
            <SearchIcon h={20} w={20} c='#38609d'/>
            <p className=' text-[#2d5084] text-[16px] font-normal'>Explore more decks</p>
        </div>
    </div>
  )
}


export default Publicsection
