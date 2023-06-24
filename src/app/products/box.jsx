import Link from 'next/link'
import React from 'react'

const Box = ({ data }) => {

    const { image, title, category, price, _id } = data

    return (
        <div className='flex flex-col justify-between items-center border border-white/20 bg-slate-700/50 gap-2 p-2 h-[450px] rounded-lg' >
            <img className='h-[250px] w-[250px] rounded-lg' src={image} alt="af1" />
            <div className='flex flex-col gap-1 w-[250px]'>
                <h1 className='text-xl font-bold' >{title}</h1>
                <h2 className='text-white/80 uppercase'>{category}</h2>
                <h4 className='text-lg font-semibold'>${price} USD</h4>
            </div>
            <Link href={`/product/${_id}`}><button className='text-lg font-bold px-4 py-2 border bg-org hover:bg-org/50 rounded-lg w-[250px]'>View Product</button></Link>
        </div >
    )
}

export default Box