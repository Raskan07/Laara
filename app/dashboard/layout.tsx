import React from 'react'
import Header from './_components/Header'

export default function dashboardLayout({children}:any) {
  return (
    <div className='w-full p-2 '>
    <Header  />
    {children}
    </div>
  )
}
