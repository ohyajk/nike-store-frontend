"use client"
import { api } from '@/api/api';
import { updateAddress } from '@/redux/slice/orderSlice';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';


const page = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [cookie, setCookie] = useState(null)
    const [cookies] = useCookies(['token', 'id'])
    const [address, setAddress] = useState('')
    const total = useSelector(state => state.order.total)
    const items = useSelector(state => state.order.items)
    const totalTrunc = Math.trunc(total)
    useEffect(() => {
        setCookie(cookies)
    }, [])

    const addOrder = async () => {
        dispatch(updateAddress(address))
        const res = await fetch(`${api}/order/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: cookie?.id,
                shippingAddress: address,
                totalAmount: totalTrunc,
                items: items
            })
        })
        const data = await res.json()
        console.log(data);
        router.push('/orders')
    }

    if (cookie?.token && cookie?.id) {
        return (
            <div >
                <h1 className='text-center text-3xl font-bold'>
                    <span className='border-b-4 border-org pb-2'>
                        MY ORDER
                    </span>
                </h1>
                <section className='pt-10 flex flex-col justify-start items-center gap-5'>
                    <h2 className='font-semibold text-2xl uppercase'>Grand Total : {Math.trunc(total)}</h2>
                    <form>
                        <label className='uppercase text-white/90 text-lg my-2 text-center' htmlFor="adddress">Add Address</label>
                        <input onChange={(e) => setAddress(e.target.value)} className='px-4 py-2 outline-none focus:outline focus:outline-2 focus:outline-org bg-slate-700/40 rounded-md w-full' name='address' type="text" placeholder='Your Address' required />
                    </form>
                    {total == 0 ? <p className='text-org text-center'>Please add items to cart</p> : null}
                    {address == '' ? <p className='text-org text-center'>Please add address</p> : null}
                    {total != 0 && address != '' ? <button onClick={() => addOrder()} className='font-semibold text-2xl uppercase bg-org px-4 py-2 hover:bg-org/70 active:scale-105'>Order</button> : null}
                </section>
            </div>
        )
    }
    return (
        <div className='flex justify-center items-center flex-grow flex-col gap-2'>
            <h2 className='font-semibold text-2xl uppercase'>You need to login to be able checkout...</h2>
            <Link href='/login' className="bg-org text-white px-4 py-2 font-semibold" >Click Here to Login</Link>
        </div>
    )
}

export default page