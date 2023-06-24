"use client"
import { setUserFromLocalStorage } from '@/redux/slice/userSlice'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
        document.cookie = 'cookieName=token; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.localStorage.removeItem('user')
        dispatch(setUserFromLocalStorage())
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