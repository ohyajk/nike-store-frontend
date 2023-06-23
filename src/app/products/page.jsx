"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Box from './box'
import { fetchAllProducts } from '@/redux/slice/allProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/loader'

const page = () => {
    const dispatch = useDispatch()
    const allCategory = ['men', 'women', 'kids']
    const [category, setCategory] = useState('All')

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    const allProducts = useSelector((state) => state.allProduct.data)
    const loading = useSelector((state) => state.allProduct.loading)
    const error = useSelector((state) => state.allProduct.error)
    console.log(allProducts)

    if (loading) return <Loader />

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
                            if (allProducts.some((p) => p.category.includes(c))) {

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
                    {allProducts.filter((p) => category == 'All' || p.category == category).map((product) => <Box data={product} />)}
                </section>
            </article>
        </motion.main>
    )
}

export default page