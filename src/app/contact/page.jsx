"use client"
import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
    return (
        <motion.main initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className=''>
            <h1 className='text-center text-3xl font-bold'>
                <span className='border-b-4 border-org pb-2'>
                    CONTACT US
                </span>
            </h1>
            <article className='py-8 flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='flex flex-col justify-center items-center gap-2 text-center md:w-[500px]' >
                    <i class='bx bxs-phone-call text-[80px]'></i>
                    <p>
                        <b>000 800 919 0566</b><br />
                        Products & Orders: 24 hours a day, 7 days a week
                        Company Info & Enquiries: 07:30 - 16:30.
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 text-center md:w-[500px]' >
                    <i class='bx bxs-message-dots text-[80px]'></i>
                    <p>
                        <b>911 800 919 0566</b><br />
                        All day Whatsapp Live chat with agent.
                        Available Monday to Friday every week.
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 text-center md:w-[500px]' >
                    <i class='bx bxs-envelope text-[80px]'></i>
                    <p>
                        <b>Support@NikeShop.Com</b><br />
                        Please also include invoice for fast resolution.
                        Dont Send Media/Copyright emails here.
                    </p>
                </div>
            </article>
        </motion.main>
    )
}

export default page