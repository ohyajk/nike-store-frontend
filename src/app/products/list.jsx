"use client"
import React, { useState } from 'react'
import Box from './box'

const List = ({ data }) => {

    const allCategory = ['men', 'women', 'kids'];
    const [category, setCategory] = useState('All');

    return (
        <>
            <div className='py-8 flex justify-center items-center text-xl font-semibold gap-4 flex-wrap'>
                <span onClick={() => setCategory('All')} className={category == 'All' ? 'text-org border-4 border-org px-4 py-2 rounded-lg cursor-pointer uppercase' : 'border-4 px-4 py-2 rounded-lg cursor-pointer uppercase'} >All</span>
                {allCategory.map((c) => {
                    if (data?.some((p) => p.category.includes(c))) {
                        return (
                            <span onClick={() => setCategory(c)} className={category == c ? 'text-org border-4 border-org px-4 py-2 rounded-lg cursor-pointer uppercase' : 'border-4 px-4 py-2 rounded-lg cursor-pointer uppercase'} >{c}</span>
                        );
                    } else {
                        return (
                            <span className='text-white/50 border-4 border-white/50 px-4 py-2 rounded-lg cursor-default uppercase' aria-disabled>{c}</span>
                        );
                    }
                })}
            </div>
            <section className='md:py-12 grid justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                {data?.filter((p) => category == 'All' || p.category == category).map((product) => <Box data={product} />)}
            </section>
        </>
    )
}

export default List