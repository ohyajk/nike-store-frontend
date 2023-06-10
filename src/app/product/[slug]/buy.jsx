import React from 'react'

const Buy = () => {
    return (
        <div className='flex flex-col gap-2'>
            <button className='border border-org bg-org hover:bg-transparent text-white font-semibold px-4 py-2 rounded-lg flex justify-center items-center gap-2'>
                <i className='bx bx-cart text-[20px]'></i>
                <p>Add to Cart</p>
            </button>
            <button className='border border-org hover:bg-org text-white font-semibold px-4 py-2 rounded-lg flex justify-center items-center gap-2'>
                <i className='bx bx-heart text-[20px]'></i>
                <p>Add to Wishlist</p>
            </button>
        </div>
    )
}

export default Buy