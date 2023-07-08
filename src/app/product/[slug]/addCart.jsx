"use client"
import { addItem, loadCartFromStorage } from '@/redux/slice/cartSlice'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AddCart = ({ data }) => {


    const dispatch = useDispatch()
    const { items } = useSelector(state => state.cart)
    console.log(items)
    const sizes = [6, 7, 8, 9]
    const [size, setSize] = useState(6)
    const [qty, setQty] = useState(1)
    const [isAdded, setIsAdded] = useState(false)

    const handleCheckProductInCart = () => {
        const items = JSON.parse(window.localStorage.getItem('cart'))
        if (items?.length > 0) {
            const isProduct = items.find((item) => item.id == data._id)
            return isProduct ? setIsAdded(true) : setIsAdded(false)
        }
    }

    const handleAddToCart = () => {
        dispatch(addItem({ title: data.title, category: data.category, image: data.image, id: data._id, price: data.price, size, qty }))
    }

    const handleLoadFromStorage = () => {
        dispatch(loadCartFromStorage())
    }
    useEffect(() => {
        handleLoadFromStorage()
        handleCheckProductInCart()
    }, [])

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
                    <button onClick={() => { handleAddToCart(); handleCheckProductInCart() }} className='border border-org bg-org hover:bg-transparent text-white font-semibold px-4 py-2 rounded-lg flex justify-center items-center gap-2'>
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