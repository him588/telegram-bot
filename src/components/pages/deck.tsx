import React from 'react'
type prop={
    setdeck:React.Dispatch<React.SetStateAction<boolean>>
}
function Deckpage({setdeck}:prop) {
    
  return (
    <div className=' flex flex-col gap-3'>
        <div className=' bg-white p-4 rounded-lg flex flex-col gap-3'>
            <p className=' text-black  text-[20px] text-center font-bold'>Basic Geography</p>
            <p className=' text-[17px]'>Helps learners of all levels master fundamental geographical concepts.</p>
            <div className=' h-[1px] w-full bg-[gray] opacity-20 mt-3'></div>
            <div className=' text-[16px] font-normal flex flex-col gap-[6px] '>
            <p>Cards to repeat: <span className=' font-medium text-[#ffa20a] '>0</span></p>
            <p>New cards: <span className=' font-medium  text-[#59ce4e]'>0</span></p>
            <p>Total cards: <span className=' font-medium '>0</span></p>
        </div>
        </div>
        
      
    </div>
  )
}

export default Deckpage
