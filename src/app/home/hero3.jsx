import React from 'react'

const Hero3 = () => {

    const cards = [
        {
            icon: 'bxs-check-shield',
            title: 'Secure Shopping',
            description: 'Shop with confidence! Your transactions are securely protected and encrypted, ensuring the utmost privacy and peace of mind.'
        },
        {
            icon: 'bxs-truck',
            title: '24/7 Support',
            description: 'Never wait for your orders! Enjoy the convenience of 24/7 delivery, ensuring prompt and timely service at any hour.'
        },
        {
            icon: 'bxs-time',
            title: 'Fast Delivery',
            description: 'Lightning-fast shipping! Experience the thrill of fast delivery, with your orders arriving at your doorstep in record time.'
        }
    ]

    return (
        <section className='flex flex-col justify-center items-center gap-8 py-8 w-full' >
            <h1 className='text-4xl font-bold uppercase'>Convenience at Your Fingertips</h1>
            <p className='md:w-3/4 md:text-center text-white/80'>Discover a seamless shopping experience with our range of services designed to make your life easier. From secure payment options to 24/7 delivery and lightning-fast shipping, we prioritize convenience and efficiency, ensuring your satisfaction every step of the way. Enjoy hassle-free shopping with us!</p>
            <div className='flex gap-8 md:gap-0 justify-around w-full flex-wrap'>
                {
                    cards.map((c) => {
                        return (
                            <span className='w-[300px] p-4 bg-black border-2 border-org/20 rounded-lg flex flex-col gap-2 justify-center items-center'>
                                <i className={`bx ${c.icon} text-org text-8xl`}></i>
                                <h2 className='text-2xl font-bold uppercase'>{c.title}</h2>
                                <h4 className='text-center text-sm'>{c.description}</h4>
                            </span>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Hero3