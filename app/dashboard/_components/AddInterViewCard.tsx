"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { useState } from 'react';
import { chatSession } from '@/utils/GeminiAI_Modal';
  

export default function AddInterViewCard() {
    const [openModal,setOpenModal] = useState(false)

    const [jobPostion,setJobPosition] = useState<any>()
    const [jobDescription,setJobDescription] = useState<any>()
    const [jobExperinece,setJobExperinece] = useState<any>()


    const onSubmit = async (e:any) => {
        e.preventDefault()
        console.log("starting....")

        const promt = `job position : ${jobPostion} , job Description : ${jobDescription} , years of experience :${jobExperinece} based on this information create 5 interview question with answers in json format , give question and answers as filed in json`
        const result = await chatSession.sendMessage(promt);
        console.log(result.response.text())
    }

  return (
    <div>
        <div 
        onClick= {() => setOpenModal(true)}
        className='cursor-pointer p-10 bg-stone-100 border border-gray-100 flex text-center item-center justifi-center rounded-lg hover:bg-stone-200'>
            <h2 className='text-center text-lg w-full text-gray-700'>+ Add New</h2>
        </div>

        <Dialog open={openModal}>
            <DialogContent>
                <DialogTitle></DialogTitle>
                <DialogHeader>
                    {/* header */}
                    <h2 className="text-xl capitalize font-bold  ">tell us more about your job interview</h2>
                    <p className="text-sm text-gray-600 capitalize">Add details about your job position / role , job description  and years of expereince </p>

                    {/* form submit box */}
                    <form onSubmit={e => onSubmit(e)} className="mt-7">
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Job position</label>
                        <input
                         value={jobPostion}
                         onChange={(e) => setJobPosition(e.target.value)}
                         type="text"  
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="frontend developer" required />
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Job description</label>
                        <input
                         value={jobDescription}
                         onChange={(e) => setJobDescription(e.target.value)}
                         type='text' 
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: react native , angular " required />
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">years of Experience</label>
                        <input
                         value={jobExperinece}
                         onChange={(e) => setJobExperinece(e.target.value)}
                         type='text'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: 5 " required />
                    </div>

                    <div className="flex flex-row item-end mt-5 w-full gap-5 justify-end ">
                        <button
                         onClick={() =>setOpenModal(false)}
                         type="button"  className="hover:px-5 hover:bg-gray-100 hover:rounded-xl hover:text-semibold text-gray-700 px-5 ">Cancel</button>
                        <button
                         onClick={e => onSubmit(e)}
                         type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2">Start Interview</button>
                    </div>
                    </form>

                    
                </DialogHeader>
            </DialogContent>
        </Dialog>

    </div>
  )
}


