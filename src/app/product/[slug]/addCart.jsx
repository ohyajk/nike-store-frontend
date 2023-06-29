"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
const AddCart = ({ data }) => {


    const sizes = [6, 7, 8, 9]
    const [size, setSize] = useState(6)
    const [qty, setQty] = useState(1)
    const [isAdded, setIsAdded] = useState(false)
    const [cart, setCart] = useState(null)



    const handleAddToCart = () => {
        if (cart?.products == null) {
            const newCart = {
                products: [
                    {
                        id: data._id,
                        title: data.title,
                        image: data.image,
                        price: data.price,
                        category: data.category,
                        size: size,
                        qty: qty
                    }
                ]
            }
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem('cart', JSON.stringify(newCart))
            }
        } else {
            const newCart = {
                products: [
                    ...cart?.products,
                    {
                        id: data._id,
                        title: data.title,
                        image: data.image,
                        price: data.price,
                        category: data.category,
                        size: size,
                        qty: qty
                    }
                ]
            }
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem('cart', JSON.stringify(newCart))
            }
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const cartt = JSON.parse(localStorage.getItem('cart'))
            setCart(cartt)
        }

        if (cart?.products?.find((p) => p.id === data?._id)) {
            setIsAdded(true)
        }
    }, [handleAddToCart])

    return (
        <>
            <h6 className='text-lg md:text-xl font-semibold'>SELECT SIZE : {size}</h6>
            <span className='flex justify-start items-center gap-2 whitespace-nowrap flex-wrap text-sm md:text-base'>
                {sizes.map((s) => <button onClick={() => setSize(s)} className={size == s ? 'border px-4 py-2 rounded-lg border-org text-org' : 'border px-4 py-2 rounded-lg'}>UK {s}</button>)}
            </span>

            <h6 className='text-lg md:text-xl font-semibold'>SELECT quantity : {qty}</h6>
            <select onChange={(e) => setQty(e.target.value)} className='px-4 py-2 text-black outline-none text-sm md:text-base'>
                <option className='border px-4 py-2 rounded-lg ' value='1' selected>1</option>
                <option className='border px-4 py-2 rounded-lg ' value='2' >2</option>
                <option className='border px-4 py-2 rounded-lg ' value='3' >3</option>
                <option className='border px-4 py-2 rounded-lg ' value='4' >4</option>
            </select>
            <div className='flex flex-col gap-2'>
                {isAdded == false &&
                    <button onClick={() => { handleAddToCart(); setIsAdded(true) }} className='border border-org bg-org hover:bg-transparent text-white font-semibold px-4 py-2 rounded-lg flex justify-center items-center gap-2'>
                        <i className='bx bx-cart text-[20px]'></i>
                        <p>Add to Cart</p>
                    </button>
                }
                {isAdded == true &&
                    <button className='border border-org/70 bg-transparent text-white/70 font-semibold px-4 py-2 rounded-lg flex justify-center items-center gap-2 cursor-default'>
                        <i className='bx bx-check text-[20px]'></i>
                        <p>Addded to Cart</p>
                    </button>
                }
            </div>
        </>
    )
}

export default AddCart