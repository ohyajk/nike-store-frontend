import AddCart from './addCart'
import { api } from '@/api/api'

const page = async ({ params }) => {

    const { slug } = params
    const res = await fetch(`${api}/product/${slug}`)
    const data = await res.json()

    if (data && data?.error == null) {
        return (
            <main className='p-5 md:p-10'>
                <section className='flex flex-col md:flex-row justify-center items-center md:items-start gap-8'>
                    <img className=' md:h-[500px]' src={data.image} alt={data.id} />
                    <div className='flex flex-col gap-4'>
                        <h6 className='border font-semibold px-4 py-2 w-fit rounded-lg'>{data.category}</h6>
                        <h1 className='text-3xl md:text-4xl font-bold'>{data.title}</h1>
                        <h4 className='text-xl md:text-2xl font-semibold'>PRICE : {data.price}$</h4>
                        <AddCart data={data} />
                    </div>
                </section>
                <section className='py-4 flex flex-col justify-center items-center'>
                    <h4 className='text-lg font-semibold pb-4'>PRODUCT DESCRIPTION</h4>
                    <p className='md:w-[70%]'>{data.description}</p>
                </section>
            </main>
        )
    }

}

export default page;
