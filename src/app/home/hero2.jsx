import Link from 'next/link'
import React from 'react'

const Hero2 = () => {
    return (
        <section className='flex flex-col justify-center items-center gap-8 py-8 w-full' >
            <h1 className='text-4xl font-bold uppercase'>Step into the Style</h1>
            <p className='md:w-3/4 md:text-center text-white/80'>Explore our extensive collection of shoes designed for every member of your family. From stylish and sophisticated options for men to elegant and comfortable choices for women, and playful and durable selections for kids, our website offers a wide range of footwear to suit every taste and need. Discover the latest trends, superior craftsmanship, and exceptional comfort that our shoes provide.</p>
            <img className='md:h-[500px] rounded-lg' src="/images/hero2.jpg" alt="hero2" />
            <Link href="/products" className='px-4 py-2 text-xl font-semibold bg-org text-white rounded-lg hover:bg-white hover:text-org'>BROWSE OUR COLLECTION</Link>
        </section>
    )
}

export default Hero2