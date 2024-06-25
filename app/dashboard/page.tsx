import React from 'react'
import AddInterViewCard from './_components/AddInterViewCard'

export default function page() {
  return (
    <div className='p-5 item-start flex flex-col mt-3'>
      <h2 className='text-[28px] font-bold'> <span className='text-amber-600'> Laara </span>AI Recuriter</h2>
      <p className="text-gray-400 ">create and start your AI mokup Interview</p>

      {/* create card */}
      
      <div className="p-10  grid grid-cols-1 md:grid-cols-4 gap-3 ">
        <AddInterViewCard />
      </div>


    </div>
  )
}
 