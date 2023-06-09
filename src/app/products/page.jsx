"use client"
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Box from './box'

const page = () => {

    const allCategory = ['Men', 'Women', 'Kids']
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
        {
            img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png',
            name: 'Nike Air Force 2 14',
            category: 'Kids',
            price: 100,
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
                    <span onClick={() => setCategory('All')} className={category == 'All' ? 'text-org border-4 border-org px-4 py-2 rounded-lg cursor-pointer uppercase' : 'border-4 px-4 py-2 rounded-lg cursor-pointer uppercase'} >All</span>
                    {
                        allCategory.map((c) => {
                            if (allProduct.some((p) => p.category.includes(c))) {

                                return (
                                    <span onClick={() => setCategory(c)} className={category == c ? 'text-org border-4 border-org px-4 py-2 rounded-lg cursor-pointer uppercase' : 'border-4 px-4 py-2 rounded-lg cursor-pointer uppercase'} >{c}</span>)
                            } else {
                                return (
                                    <span className='text-white/50 border-4 border-white/50 px-4 py-2 rounded-lg cursor-default uppercase' aria-disabled>{c}</span>)
                            }
                        }
                        )}
                </div>
                <section className='md:py-12 grid justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                    {allProduct.filter((p) => category == 'All' || p.category == category).map((product) => <Box data={product} />)}
                </section>
            </article>
        </motion.main>
    )
}

export default page