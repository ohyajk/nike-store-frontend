'use client'
import React from 'react'
import React, { useState } from 'react'

const Qty = () => {
    const [quantity, setquantity] = useState(1)
    console.log(quantity)

    return (
        <>
            <h6 className='text-lg md:text-xl font-semibold'>SELECT quantity : {quantity}</h6>
            <select onChange={(e) => setquantity(e.target.value)} className='px-4 py-2 text-black outline-none text-sm md:text-base'>
                <option className='border px-4 py-2 rounded-lg ' value='1' selected>1</option>
                <option className='border px-4 py-2 rounded-lg ' value='2' >2</option>
                <option className='border px-4 py-2 rounded-lg ' value='3' >3</option>
                <option className='border px-4 py-2 rounded-lg ' value='4' >4</option>
            </select>
        </>
    )
}

export default Qty