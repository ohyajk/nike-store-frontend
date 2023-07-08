'use client'
import { api } from '@/api/api'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
const page = () => {
    const [cookie] = useCookies(['token', 'id'])
    const myId = cookie?.id
    const [data, setData] = useState([])
    const fetchOrders = async () => {
        const res = await fetch(`${api}/orders/${myId}`)
        const data = await res.json()
        console.log(data)
        setData(data)
    }
    useEffect(() => {
        fetchOrders()
    }, [])
    return (
        <div>
            {data?.map((item) => {
                return (
                    <div className='flex flex-col justify-start items-start gap-5 border border-white/50 rounded-lg p-2'>
                        <h1>{item.shippingAddress}</h1>
                        <h1>{item.totalAmount}</h1>
                        <h1>{item.status}</h1>
                        <h1>{item.items.map((i) => {
                            return (
                                <div>
                                    <h1>{i.product.title}</h1>
                                    <h1>{i.size}</h1>
                                    <h1>{i.quantity}</h1>
                                </div>)
                        })}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default page