"use client"
import { api } from '@/api/api'
import { setUserFromLocalStorage } from '@/redux/slice/userSlice'
import { useFormik } from 'formik'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

const SignIn = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [res, setRes] = useState(1)
    const [formSubmitted, setFormSubmitted] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            setIsLoading(true)
            const response = await fetch(`${api}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            console.log(response)
            const data = await response.json()
            if (response.status === 200) {
                setRes(200)
                setIsLoading(false)
                const cookies = response.headers.get('Set-Cookie');
                if (cookies) {
                    const cookieArray = cookies.split(';');
                    cookieArray.forEach(cookie => {
                        document.cookie = cookie.trim();
                    });
                }
                window.localStorage.setItem('user', JSON.stringify(data));
                dispatch(setUserFromLocalStorage())
                setTimeout(() => {
                    router.push('/');
                }, 1500);
            }
            if (response.status === 401) {
                setIsLoading(false)
                setRes(401)
            }
            if (response.status === 404) {
                setRes(404)
                setIsLoading(false)
            }
            if (response.status === 500) {
                setRes(500)
                setIsLoading(false)
            }
            setFormSubmitted(true)
            console.log(res)
        },
    });
    const handleInputChange = () => {
        if (formSubmitted) {
            setFormSubmitted(false);
        }
    }

    return (
        <motion.main initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className='flex flex-col items-center justify-center'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center gap-4 text-white/90 font-medium w-[265px]'>
                <input id='email' name='email' onChange={(e) => { formik.handleChange(e); handleInputChange(); }} value={formik.values.email} className='px-4 py-2 outline-none focus:outline focus:outline-2 focus:outline-org bg-slate-700/40 rounded-md w-full' type="email" placeholder='Your Email' />
                {formik.touched.email && formik.errors.email && (<div className='text-red-600 animate-pulse'>{formik.errors.email}</div>)}
                <input id='password' name='password' onChange={(e) => { formik.handleChange(e); handleInputChange(); }} value={formik.values.password} className='px-4 py-2 outline-none focus:outline focus:outline-2 focus:outline-org bg-slate-700/40 rounded-md w-full' type="password" placeholder='Your Password' />
                {formik.touched.password && formik.errors.password && (<div className='text-red-600 animate-pulse'>{formik.errors.password}</div>)}
                {!isLoading && formik.touched && <input className='px-4 py-2 text-white bg-org rounded-md cursor-pointer hover:bg-org/50 hover:scale-105 w-full' type="submit" value='LOGIN' />}
                {isLoading && <i className='bx bx-loader-circle bx-spin bx-flip-vertical text-org text-3xl' ></i>}
                {(formik.touched.email || formik.touched.password) && res === 200 && formSubmitted && (
                    <div className='border-2 border-green-500 text-green-500 rounded-lg px-4 py-2 font-semibold'>
                        Logged In! Redirecting...🎉
                    </div>
                )}

                {(formik.touched.email || formik.touched.password) && res === 401 && formSubmitted && (
                    <div className='border-2 border-yellow-500 text-yellow-500 rounded-lg px-4 py-2 font-semibold'>
                        Wrong Credentials! 🙀
                    </div>
                )}

                {(formik.touched.email || formik.touched.password) && res === 500 && formSubmitted && (
                    <div className='border-2 border-red-500 text-red-500 rounded-lg px-4 py-2 font-semibold'>
                        Please try again! ☹️
                    </div>
                )}
            </form>
            <p className='text-center text-white/70 py-2'>New user here ?<br />Click on Register button above...</p>
        </motion.main>
    )
}

export default SignIn