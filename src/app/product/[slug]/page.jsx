"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'

const page = ({ params }) => {


    const [data, setData] = useState({})
    const sizes = [6, 7, 8, 9]
    const [size, setSize] = useState(6)
    const [quantity, setquantity] = useState(1)
    const [isAdded, setIsAdded] = useState(false)
    useEffect(() => {
        setData(
            {
                id: 1,
                name: "Nike Airforce 1",
                slug: "nike-airforce-1",
                price: 390,
                image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b03d953-1c91-4f3c-a594-1bfd61ec64ac/phantom-gx-club-dynamic-fit-mg-multi-ground-football-boot-24PQkr.png",
                category: "Men",
                description: "Whether you're starting out or just playing for fun, Club boots get you on the pitch without compromising on quality. With synthetic leather and asymmetric lacing, they help provide precision touch to help you bury goals in the back of the net or set up a teammate with a pinpoint pass that swings the game in your favour. This version has a Dynamic Fit collar, which wraps your ankle in soft, stretchy fabric for a secure feel."
            }
        )
    }, [])

    const handleAddToCart = () => {
        console.log(`Added ${quantity} shoes of ${size} size of ${data.name} to cart`)
    }

    return (
        <main className='p-5 md:p-10'>
            <section className='flex flex-col md:flex-row justify-center items-center md:items-start gap-8'>
                <img className=' md:h-[500px]' src={data.image} alt={data.id} />
                <div className='flex flex-col gap-4'>
                    <h6 className='border font-semibold px-4 py-2 w-fit rounded-lg'>{data.category}</h6>
                    <h1 className='text-3xl md:text-4xl font-bold'>{data.name}</h1>
                    <h4 className='text-xl md:text-2xl font-semibold'>PRICE : {data.price}$</h4>
                    <h6 className='text-lg md:text-xl font-semibold'>SELECT SIZE : {size}</h6>
                    <span className='flex justify-start items-center gap-2 whitespace-nowrap flex-wrap text-sm md:text-base'>
                        {sizes.map((s) => <button onClick={() => setSize(s)} className={size == s ? 'border px-4 py-2 rounded-lg border-org text-org' : 'border px-4 py-2 rounded-lg'}>UK {s}</button>)}
                    </span>

                    <h6 className='text-lg md:text-xl font-semibold'>SELECT quantity : {quantity}</h6>
                    <select onChange={(e) => setquantity(e.target.value)} className='px-4 py-2 text-black outline-none text-sm md:text-base'>
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
                </div>
            </section>
            <section className='py-4 flex flex-col justify-center items-center'>
                <h4 className='text-lg font-semibold pb-4'>PRODUCT DESCRIPTION</h4>
                <p className='md:w-[70%]'>{data.description}</p>
            </section>
        </main>
    )
}

export default page