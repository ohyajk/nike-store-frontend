"use client"
import { motion } from 'framer-motion'
import React from 'react'

const SignIn = () => {
    return (
        <motion.main initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className='flex flex-col items-center justify-center'>
            <form className='flex flex-col justify-center items-center gap-4 text-white/90 font-medium w-[265px]'>
                <input className='px-4 py-2 outline-none focus:outline focus:outline-2 focus:outline-org bg-slate-700/40 rounded-md w-full' type="email" placeholder='Your Email' />
                <input className='px-4 py-2 outline-none focus:outline focus:outline-2 focus:outline-org bg-slate-700/40 rounded-md w-full' type="password" placeholder='Your Password' />
                <input className='px-4 py-2 text-white bg-org rounded-md cursor-pointer hover:bg-org/50 hover:scale-105 w-full' type="submit" value='LOGIN' />
            </form>
            <p className='text-center text-white/70 py-2'>New user here ?<br />Click on Register button above...</p>
        </motion.main>
    )
}

export default SignIn