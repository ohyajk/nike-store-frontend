"use client"
import React from 'react'
import { motion } from 'framer-motion'

const hero = () => {
    return (
        <main className="grid md:grid-cols-2 gap-4 min-h-[calc(100vh-121px)] relative">
            <section className="py-4 md:py-0 flex justify-end items-center" >
                <div className="flex justify-center items-start flex-col gap-4">
                    <motion.h4 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="border rounded-lg px-4 py-2 md:text-lg" >In Stock</motion.h4>
                    <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.4 }} className="text-4xl md:text-6xl font-bold">Nike Air Max 90</motion.h1>
                    <motion.h4 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.5 }} className="font-thin text-2xl text-white/50" >LIMITED EDITION</motion.h4>
                    <motion.p initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.6 }} className="text-white/90">
                        All that shimmers isn't gold. Decked out in sumptuously smooth, satin-esque fabric, the Dunk Low is dressier than your average pair of sneakers but sporty enough to dress down.
                        Its classic colour combo nods to the sneaker's original Be True to Your School ad campaign, rooting your look to coveted off-court allure.
                    </motion.p>
                    <span className="flex items-center gap-4">
                        <motion.h6 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.7 }} className="text-3xl font-semibold" >489$</motion.h6>
                        <motion.button initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.8 }} className='flex items-center gap-2 bg-org px-4 py-2 cursor-pointer hover:text-org hover:bg-white hover:scale-105 rounded-lg'>
                            <i className='bx bx-cart-add text-[28px]'></i>
                            <p className='text-lg font-bold'>BUY NOW</p>
                        </motion.button>
                    </span>
                </div>
            </section>
            <section className="flex justify-center items-center relative" >
                <motion.img initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="max-h-[500px] object-scale-down" src="/4.png" alt="hero-shoes" />
                <p className='absolute text-6xl md:text-9xl font-black text-white/10 -z-10 left-0 flex flex-col gap-2 ' >
                    <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 }} >JUST</motion.span>
                    <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.7 }} >DO</motion.span>
                    <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.9 }} >IT</motion.span>
                </p>
            </section>
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className='hidden absolute bottom-2 w-full md:flex justify-center items-center gap-1 text-white/70 animate-bounce'>
                <p>SCROLL DOWN</p>
                <i className='text-2xl bx bx-caret-down'></i>
            </motion.span>
        </main>
    )
}

export default hero