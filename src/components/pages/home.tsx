import React from 'react'
import Topsection from '../core/topsection'
import Publicsection from '../core/publicsection'
import Bottomsection from '../core/bottomsection'
type prop={
    sethome:React.Dispatch<React.SetStateAction<boolean>>
}

function Home({sethome}:prop) {
  return (
    <div>
     <Topsection/>
     <Publicsection/>
     <Bottomsection/>
      
    </div>
  )
}

export default Home
