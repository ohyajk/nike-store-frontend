"use client"
import React, { useEffect } from 'react'

const page = () => {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = '/'
        }, 1000)
    })

    return (
        <div className=' flex flex-col justify-center items-center flex-grow' >
            <i className='bx bx-loader-circle bx-spin bx-flip-vertical text-org text-6xl' ></i>
            <h1>Please wait while You are being Logged Out...</h1>
        </div>
    )
}

export default page