"use client"
import { api } from '@/api/api'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

const Navbar = () => {

    const [cookies] = useCookies('token', 'id')
    const [user, setUser] = useState(null)
    useEffect(() => {

        async function getData() {
            const res = await fetch(`${api}/user/${cookies.id}`, {
                credentials: 'include',
            })
            const data = await res.json()
            console.log(res)
            setUser(data)
        }
        if (cookies.id) {
            getData()
        }
    }
        , [cookies])
    const [showMobNav, setShowMobNav] = useState(false)

    const buttons = [
        { link: "/", name: 'HOME', icon: 'home' },
        { link: "products", name: 'PRODUCTS', icon: 'list-ul' },
        { link: "about", name: 'ABOUT', icon: 'info-circle' },
        { link: "contact", name: 'CONTACT', icon: 'envelope' },
    ]

    return (
        <header>
            {/* PC NAVBAR */}
            <nav className='hidden py-8 md:flex justify-between items-center' >
                <svg className='h-6 md:h-8 lg:h-10' aria-hidden="true" focusable="false" viewBox="3 8.72 18 6.28" role="img" fill="#ffffff"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path></svg>
                <ul className='flex justify-center items-center gap-2 md:gap-4 lg:gap-6 md:text-lg lg:text-xl font-medium'>
                    {
                        buttons.map((btn) => <Link href={`/${btn.link}`} className='flex flex-nowrap whitespace-nowrap items-center gap-1 hover:scale-110 cursor-pointer'><i className={`bx bx-${btn.icon} text-[20px] md:text-[26px] lg:text-[32px]`}></i><li className='navBtn'>{btn.name}</li></Link>)
                    }
                </ul>
                <ul className='flex justify-center items-center gap-1 md:gap-2 lg:gap-3'>
                    {user && user?.data && <span className='flex items-center gap-1'><i className='bx bx-user-circle text-[20px] md:text-[26px] lg:text-[32px]'></i><h2 className='md:text-lg lg:text-xl font-medium uppercase'>{user.data.firstName}</h2></span>}
                    <Link href="/cart" className='flex items-center gap-1 hover:text-org transition-colors ease-in-out delay-75 duration-100 cursor-pointer'><i className='bx bx-cart text-[20px] md:text-[26px] lg:text-[32px] '></i><span className='md:text-lg lg:text-xl font-medium'>CART</span></Link>
                    {!user && !user?.data && <Link href="/login" className='flex items-center gap-1 hover:text-org transition-colors ease-in-out delay-75 duration-100 cursor-pointer'><i className='bx bx-user-circle text-[20px] md:text-[26px] lg:text-[32px]'></i><span className='md:text-lg lg:text-xl font-medium'>LOGIN</span></Link>}
                    {user && user?.data && <Link href="/logout" className='flex items-center gap-1 hover:text-org transition-colors ease-in-out delay-75 duration-100 cursor-pointer'><i className='bx bx-log-out-circle text-[20px] md:text-[26px] lg:text-[32px]'></i><span className='md:text-lg lg:text-xl font-medium'>LOGOUT</span></Link>}
                </ul>
            </nav>
            {/* MOBILE NAVBAR */}
            <nav className='py-8 md:hidden flex justify-between items-center border-b border-slate-700/50' >
                <i className='bx bx-menu text-[32px] opacity-0'></i>
                <svg className='h-8' aria-hidden="true" focusable="false" viewBox="3 8.72 18 6.28" role="img" fill="#ffffff"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path></svg>
                <i onClick={() => setShowMobNav(!showMobNav)} className='bx bx-menu text-[32px]'></i>
                {
                    showMobNav &&
                    <div className='fixed top-0 left-0 h-full w-full bg-black/60 backdrop-blur-xl flex flex-col justify-start pt-14 gap-6 z-10 overflow-hidden'>
                        <span className='absolute right-6 top-8' >
                            <i onClick={() => setShowMobNav(!showMobNav)} className='bx bx-x text-[32px] text-white'></i>
                        </span>
                        <ul className='flex flex-col justify-center items-center gap-6 text-xl font-medium'>
                            {
                                buttons.map((btn) => <Link onClick={() => setShowMobNav(!showMobNav)} href={btn.link}><li className={currentRoute == btn.link ? 'navBtn hover:scale-110 cursor-pointer !text-org' : 'navBtn hover:scale-110 cursor-pointer'}>{btn.name}</li></Link>)
                            }
                        </ul>
                        <ul className='flex justify-center items-center gap-4 text-white'>
                            <Link onClick={() => setShowMobNav(!showMobNav)} href='/cart' className='flex items-center gap-1 hover:text-org transition-colors ease-in-out delay-75 duration-100 cursor-pointer'><i className='bx bx-cart text-[32px]'></i><span className='md:text-lg lg:text-xl font-medium'>CART</span></Link>
                            {!user && !user?.data && <Link onClick={() => setShowMobNav(!showMobNav)} href="/login" className='flex items-center gap-1 hover:text-org transition-colors ease-in-out delay-75 duration-100 cursor-pointer'><i className='bx bx-user-circle text-[32px]'></i><span className='md:text-lg lg:text-xl font-medium'>LOGIN</span></Link>}
                            {user && user?.data && <Link onClick={() => setShowMobNav(!showMobNav)} href="/logout" className='flex items-center gap-1 hover:text-org transition-colors ease-in-out delay-75 duration-100 cursor-pointer'><i className='bx bx-log-out-circle text-[32px]'></i><span className='md:text-lg lg:text-xl font-medium'>LOGOUT</span></Link>}
                        </ul>
                    </div>
                }
            </nav>
        </header >
    )
}

export default Navbar