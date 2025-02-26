"use client"
import React, { useState } from 'react'

type Props = {
    children: JSX.Element | string
}
const Overlay = ({children} : Props) => {
    return (
        <div className='text-white fixed flex justify-center items-center inset-0 h-screen w-screen bg-black bg-opacity-50 z-[10000000000]'>
            <span className='mb-30'>
                {children}
            </span>
        </div>
    )
}

export default Overlay