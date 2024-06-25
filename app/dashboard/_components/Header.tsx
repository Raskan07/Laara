"use client"
import React from 'react'
import Image from 'next/image'
import {UserButton} from '@clerk/nextjs'
import { usePathname } from 'next/navigation'


export default function Header() {
  const path = usePathname()
    
  return (
    <div  className={"flex flex-row w-full item-center justify-between px-2"}>
        {/* logo */}
        <Image src={'/logo.png'} width={90} height={90} alt=''/>
        {/* items */}
        <ul className={'flex flex-row gap-5 items-center'}>
            <li
            className={`hover:ease-in hover:duration-300  font-semibold cursor-pointer hover:text-amber-600 hover:font-bold hover:p-2 hover:bg-amber-100 hover:rounded-lg ${path == "/dashboard" && "text-amber-700"}`}

            >Dashborad</li>
            <li
              className={`hover:ease-in hover:duration-300  font-semibold cursor-pointer hover:text-amber-600 hover:font-bold hover:p-2 hover:bg-amber-100 hover:rounded-lg ${path == "/questions" && "text-amber-700"}`}
            >Questions</li>
            <li
              className={`hover:ease-in hover:duration-300  font-semibold cursor-pointer hover:text-amber-600 hover:font-bold hover:p-2 hover:bg-amber-100 hover:rounded-lg ${path == "/upgrade" && "text-amber-700"}`}
            >upgrade</li>
            <li
              className={`hover:ease-in hover:duration-300  font-semibold cursor-pointer hover:text-amber-600 hover:font-bold hover:p-2 hover:bg-amber-100 hover:rounded-lg ${path == "/how" && "text-amber-700"}`}
            >How it works?</li>
        </ul> 

        <div className="p-2 item-center justify-center  flex ">
          <UserButton />

        </div>
       
    </div>
  )
}
