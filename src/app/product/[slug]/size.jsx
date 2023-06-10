'use client'
import React, { useState } from 'react'

const Size = () => {

    const sizes = [6, 7, 8, 9]
    const [size, setSize] = useState(6)
    console.log(size)
    return (
        <>
            <h6 className='text-lg md:text-xl font-semibold'>SELECT SIZE : {size}</h6>
            <span className='flex justify-start items-center gap-2 whitespace-nowrap flex-wrap text-sm md:text-base'>
                {sizes.map((s) => <button onClick={() => setSize(s)} className={size == s ? 'border px-4 py-2 rounded-lg border-org text-org' : 'border px-4 py-2 rounded-lg'}>UK {s}</button>)}
            </span>
        </>
    )
}

export default Size