import React from 'react'
import Arrowicon from '../icon/arrowicon'
import Staticon from '../icon/statisticsicon'
import Settingicon from '../icon/settingicon'

function Bottomsection() {
  return (
    <div>
     <div className=' mt-4'>
      <p className=' text-[#8c868c] text-[14px]'>NEWS AND UPDATES</p>
      <div className=' flex gap-2 h-[45px] p-2 items-center bg-white rounded-md'>
        <div className=' h-full w-[28px] bg-[#0e77f1] rounded-md flex items-center justify-center'>
            <Arrowicon h={20} w={20} c='white'/>
        </div>
        <p>Telegram channel</p>
      </div>
     </div>
     <div className=' mt-3'>
      <p className=' text-[#8c868c] text-[14px]'>PROFILE</p>
      <div className=' flex gap-2 h-[45px] p-2 items-center bg-white rounded-md'>
        <div className=' h-full w-[28px] bg-[#5454d6] rounded-md flex items-center justify-center'>
        <Staticon h={20} w={20} c='white'/>
        </div>
        <p>Statistics</p>
      </div>
      <div className=' flex gap-2 h-[45px] p-2 items-center bg-white rounded-md mt-1'>
        <div className=' h-full w-[28px] bg-[#c72ab9] rounded-md flex items-center justify-center'>
        <Settingicon h={20} w={20} c='white'/>
        </div>
        <p>Setting</p>
      </div>
     </div>
    </div>
  )
}

export default Bottomsection
