import React from 'react'
import Size from './size'
import Qty from './qty'
import Buy from './buy'

const page = async ({ params }) => {

    // const res = await fetch(`https://fakestoreapi.com/products/${params.slug}`)
    // const data = await res.json()

    const data = {
        id: 1,
        name: "Nike Airforce 1",
        slug: "nike-airforce-1",
        price: 390,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b03d953-1c91-4f3c-a594-1bfd61ec64ac/phantom-gx-club-dynamic-fit-mg-multi-ground-football-boot-24PQkr.png",
        category: "Men",
        description: "Whether you're starting out or just playing for fun, Club boots get you on the pitch without compromising on quality. With synthetic leather and asymmetric lacing, they help provide precision touch to help you bury goals in the back of the net or set up a teammate with a pinpoint pass that swings the game in your favour. This version has a Dynamic Fit collar, which wraps your ankle in soft, stretchy fabric for a secure feel."
    }

    return (
        <main className='p-5 md:p-10'>
            <section className='flex flex-col md:flex-row justify-center items-center md:items-start gap-8'>
                <img className=' md:h-[500px]' src={data.image} alt={data.id} />
                <div className='flex flex-col gap-4'>
                    <h6 className='border font-semibold px-4 py-2 w-fit rounded-lg'>{data.category}</h6>
                    <h1 className='text-3xl md:text-4xl font-bold'>{data.name}</h1>
                    <h4 className='text-xl md:text-2xl font-semibold'>PRICE : {data.price}$</h4>
                    <Size />
                    <Qty />
                    <Buy />
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