import React from 'react'

function Deckbox({name}:{name:string}) {
  return (
    <div className=' h-[55px] w-full bg-white rounded-lg flex items-center px-2'>
        <p className=' text-[16px] font-medium'>{name}</p>
      
    </div>
  )
}

export default Deckbox
