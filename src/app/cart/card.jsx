import React from 'react'

const Card = ({ data }) => {

    const { id, image, name, category, price, qty } = data

    return (
        <div className='p-4 md:h-[160px] flex flex-col md:flex-row items-center gap-4 bg-slate-700/50 border border-white/10 rounded-lg'>
            <img className='md:h-[130px] md:w-[190px] ' src={image} alt={id} />
            <div className='flex flex-col gap-2 flex-grow w-full'>
                <h2 className='text-xl font-semibold' >{name}</h2>
                <h3 className='text-lg font-semibold'>{category}</h3>
                <h4 className='text-lg font-semibold' >{price}$</h4>
                <h6>QTY : {qty}</h6>
            </div>
            <div className='flex items-center gap-2 bg-org px-4 py-2 cursor-pointer hover:text-org hover:bg-white hover:scale-105 rounded-lg'>
                <i className='bx bx-trash text-[32px]'></i>
                <p className='text-lg font-semibold'>REMOVE</p>
            </div>
        </div>
    )
}

export default Card