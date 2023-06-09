"use client"
import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
    return (

        <motion.main initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className='' >
            <h1 className='text-center text-3xl font-bold'>
                <span className='border-b-4 border-org pb-2'>
                    MY CART
                </span>
            </h1>
            <section className='grid md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-8 pt-8'>

                <section className='py-4 flex flex-col gap-4' >
                    <div className='p-4 h-[160px] flex items-center gap-4 bg-slate-700/50 border border-white/10 rounded-lg'>
                        <img className='h-[130px] w-[190px] ' src="https://w7.pngwing.com/pngs/480/849/png-transparent-unpaired-blue-and-orange-nike-running-shoe-nike-free-air-force-shoe-sneakers-nike-shoes-background-blue-fashion-outdoor-shoe.png" alt="" />
                        <div className='flex flex-col gap-2 flex-grow'>
                            <h2 className='text-xl font-semibold' >Nike Air Max 90</h2>
                            <h3 className='text-lg font-semibold'>Men's Shoes</h3>
                            <h4 className='text-lg font-semibold' >240$</h4>
                            <h6>QTY : 2</h6>
                        </div>
                        <div className='flex items-center gap-2 bg-org px-4 py-2 cursor-pointer hover:text-org hover:bg-white hover:scale-105 rounded-lg'>
                            <i className='bx bx-trash text-[32px]'></i>
                            <p className='text-lg font-semibold'>REMOVE</p>
                        </div>
                    </div>

                </section>
                <section className='py-4' >
                    <div className='p-4 flex flex-col justify-start items-start gap-4 bg-slate-700/50 border border-white/10 rounded-lg'>
                        <h2 className='text-2xl font-bold' >SUMMARY</h2>
                        <hr className='h-2 text-white w-full' />
                        <div className='flex justify-between items-center text-xl w-full' >
                            <h4 className='font-semibold'>Subtotal :</h4>
                            <h4>400$</h4>
                        </div>
                        <div className='flex justify-between items-center text-xl w-full' >
                            <h4 className='font-semibold'>Delivery :</h4>
                            <h4>20$</h4>
                        </div>
                        <div className='flex justify-between items-center text-xl w-full' >
                            <h4 className='font-semibold'>GST :</h4>
                            <h4>20$</h4>
                        </div>
                        <hr className='h-2 text-white w-full' />
                        <div className='flex justify-between items-center text-xl w-full' >
                            <h4 className='font-semibold'>Total :</h4>
                            <h4>440$</h4>
                        </div>
                        <hr className='h-2 text-white w-full' />
                        <button className=' py-2 text-lg font-semibold bg-org hover:scale-105 hover:bg-white hover:text-org rounded-lg w-full' >CHECKOUT</button>
                    </div>

                </section>
            </section>
        </motion.main>

    )
}

export default page