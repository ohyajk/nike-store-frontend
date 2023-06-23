"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const router = useRouter()
    useEffect(() => {
        document.cookie = 'cookieName=token; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        localStorage.removeItem('user')
        setTimeout(() => {
            router.push('/')
        }, 1500);
    }, [])

    return (
        <div className=' flex flex-col justify-center items-center flex-grow' >
            <i className='bx bx-loader-circle bx-spin bx-flip-vertical text-org text-6xl' ></i>
            <h1>Please wait while You are being Logged Out...</h1>
        </div>
    )
}

export default page