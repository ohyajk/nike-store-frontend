"use client"
import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
    return (
        <motion.main initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <article>
                <h1 className='text-center text-3xl font-bold'>
                    <span className='border-b-4 border-org pb-2'>
                        MY WISHLIST
                    </span>
                </h1>
                <section className='grid grid-cols-4 gap-8 pt-12'>


                    <div className='p-4 flex flex-col items-start gap-4 bg-slate-700/50 border border-white/10 rounded-lg'>
                        <img className='h-[130px] w-[190px] ' src="https://w7.pngwing.com/pngs/480/849/png-transparent-unpaired-blue-and-orange-nike-running-shoe-nike-free-air-force-shoe-sneakers-nike-shoes-background-blue-fashion-outdoor-shoe.png" alt="" />
                        <div className='flex flex-col gap-2 flex-grow'>
                            <h2 className='text-xl font-semibold' >Nike Air Max 90</h2>
                            <h3 className='text-lg font-semibold'>Men's Shoes</h3>
                            <h4 className='text-lg font-semibold' >240$</h4>
                            <h6>QTY : 2</h6>
                        </div>
                        <div className='flex items-center gap-2 bg-org px-4 py-2 cursor-pointer hover:text-org hover:bg-white hover:scale-105 rounded-lg'>
                            <i className='bx bx-trash text-[32px]'></i>
                        </div>
                    </div>

                </section>
            </article>
        </motion.main>
    )
}

export default page