"use client"
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Card from './card'
import { loadCartFromStorage } from '@/redux/slice/cartSlice'
import Link from 'next/link'
import { updateItems, updateTotal } from '@/redux/slice/orderSlice'

const page = () => {

    const dispatch = useDispatch()
    const { items } = useSelector(state => state.cart)


    useEffect(() => {
        dispatch(loadCartFromStorage())
    }, [])

    const subTotal = items?.map((d) => d.price * d.qty).reduce((a, b) => a + b, 0)
    const delivery = subTotal > 300 ? 10 : 20
    const gst = (subTotal / 100) * 18
    const grandTotal = subTotal + delivery + gst

    const orderItems = items?.map((i) => ({ 'product': i.id, 'quantity': i.qty, 'size': i.size }));

    const addCheckout = () => {
        dispatch(updateTotal(grandTotal))
        dispatch(updateItems(orderItems))
    }

    if (items.length > 0) {

        return (

            <motion.main initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className='' >
                <h1 className='text-center text-3xl font-bold'>
                    <span className='border-b-4 border-org pb-2'>
                        MY CART
                    </span>
                </h1>
                <section className='grid md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-8 pt-8'>

                    <section className='py-4 flex flex-col gap-4' >
                        {
                            items?.map((c) => <Card data={c} />)
                        }
                    </section>
                    <section className='py-4' >
                        <div className='p-4 flex flex-col justify-start items-start gap-4 bg-slate-700/50 border border-white/10 rounded-lg'>
                            <h2 className='text-2xl font-bold' >SUMMARY</h2>
                            <hr className='h-2 text-white w-full' />
                            <div className='flex justify-between items-center text-xl w-full' >
                                <h4 className='font-semibold'>Subtotal :</h4>
                                <h4>{subTotal}$</h4>
                            </div>
                            <div className='flex justify-between items-center text-xl w-full' >
                                <h4 className='font-semibold'>Delivery :</h4>
                                <h4>{delivery}$</h4>
                            </div>
                            <div className='flex justify-between items-center text-xl w-full' >
                                <h4 className='font-semibold'>GST :</h4>
                                <h4>{gst.toFixed(2)}$</h4>
                            </div>
                            <hr className='h-2 text-white w-full' />
                            <div className='flex justify-between items-center text-xl w-full' >
                                <h4 className='font-semibold'>Total :</h4>
                                <h4>{grandTotal.toFixed(2)}$</h4>
                            </div>
                            <hr className='h-2 text-white w-full' />
                            <Link href='/checkout' onClick={() => addCheckout()} className='text-center px-4 py-2 text-lg font-semibold bg-org hover:scale-105 hover:bg-white hover:text-org rounded-lg w-full' >CHECKOUT</Link>
                        </div>

                    </section>
                </section>
            </motion.main>

        )
    } else return <h2 className='flex flex-grow justify-center items-center text-2xl uppercase text-center'>OHH...🙀<br /> No Products In Cart</h2>
}

export default page