"use client"
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Box from './box'

const page = () => {

    const [category, setCategory] = useState('All')
    console.log(category)

    const allProduct = [
        {
            img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png',
            name: 'Nike Air Force 1 07',
            category: 'Men',
            price: 350,
            id: 1,
        },
        {
            img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png',
            name: 'Nike Air Force 2 14',
            category: 'Women',
            price: 200,
            id: 2,
        },
    ]

    return (

        <motion.main initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <article>
                <h1 className='text-center text-3xl font-bold'>
                    <span className='border-b-4 border-org pb-2'>
                        ALL PRODUCTS
                    </span>
                </h1>
                <div className='py-8 flex justify-center items-center text-xl font-semibold gap-4 flex-wrap'>
                    <span onClick={() => setCategory('All')} className={category == 'All' ? 'text-org border-4 border-org px-4 py-2 rounded-lg cursor-pointer' : 'border-4 px-4 py-2 rounded-lg cursor-pointer'} >ALL</span>
                    <span onClick={() => setCategory('Men')} className={category == 'Men' ? 'text-org border-4 border-org px-4 py-2 rounded-lg cursor-pointer' : 'border-4 px-4 py-2 rounded-lg cursor-pointer'} >MEN</span>
                    <span onClick={() => setCategory('Women')} className={category == 'Women' ? 'text-org border-4 border-org px-4 py-2 rounded-lg cursor-pointer' : 'border-4 px-4 py-2 rounded-lg cursor-pointer'} >WOMEN</span>
                    <span onClick={() => setCategory('Kids')} className={category == 'Kids' ? 'text-org border-4 border-org px-4 py-2 rounded-lg cursor-pointer' : 'border-4 px-4 py-2 rounded-lg cursor-pointer'} >KIDS</span>
                </div>
                <section className='md:py-12 grid justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                    {allProduct.filter((p) => category == 'All' || p.category == category).map((product) => <Box data={product} />)}
                </section>
            </article>
        </motion.main>
    )
}

export default page