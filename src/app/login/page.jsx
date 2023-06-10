"use client"
import React, { useState } from 'react'
import Register from './register'
import { motion } from 'framer-motion'
import SignIn from './signin'

const page = () => {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <motion.main initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <article>
                <h1 className='text-center text-3xl font-bold'>
                    <span className='flex justify-center'>
                        <p className='w-[265px] flex justify-between'>
                            <button onClick={() => setIsLogin(true)} className={!isLogin ? 'border-b-4 border-org pb-2' : 'border-b-4 border-white/50 pb-2 text-white/50'}>LOGIN</button>
                            <button onClick={() => setIsLogin(false)} className={isLogin ? 'border-b-4 border-org pb-2' : 'border-b-4 border-white/50 pb-2 text-white/50'}>REGISTER</button>
                        </p>
                    </span>
                </h1>
                <section className='flex flex-col justify-center items-center' >
                    <div className='py-8'>
                        <svg className='h-6 md:h-8 lg:h-10' aria-hidden="true" focusable="false" viewBox="3 8.72 18 6.28" role="img" fill="#ffffff"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path></svg>
                    </div>
                    {
                        isLogin ? <SignIn /> : <Register />
                    }
                </section>
            </article>
        </motion.main>
    )
}

export default page