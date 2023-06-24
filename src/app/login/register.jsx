"use client"
import { api } from '@/api/api'
import { useFormik } from 'formik'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import * as Yup from 'yup'

const Register = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [res, setRes] = useState(1)
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
            .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, 'Password must contain at least one numeric digit and one letter')
            .min(4, 'Password must be at least 4 characters long'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirm_password: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const { confirm_password, ...data } = values
                setIsLoading(true)
                const response = await fetch(`${api}/user/new`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                if (response.status === 201) {
                    setRes(201)
                    setIsLoading(false)
                } else if (response.status === 409) {
                    setRes(409)
                    setIsLoading(false)
                } else if (response.status === 404) {
                    setRes(404)
                    setIsLoading(false)
                }
            } catch (error) {
                setRes(500)
                setIsLoading(false)
                console.log(error)
            }
        },
    });

    return (
        <motion.main initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className='flex flex-col items-center justify-center'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center gap-4 text-white/90 font-medium w-[265px]'>
                <input id='firstName' name='firstName' onChange={formik.handleChange} value={formik.values.firstName} className='px-4 py-2 outline-none focus:outline focus:outline-2 focus:outline-org bg-slate-700/40 rounded-md w-full' type="text" placeholder='First Name' />
                {formik.touched.firstName && formik.errors.firstName && (<div className='text-red-600 animate-pulse'>{formik.errors.firstName}</div>)}
                <input id='lastName' name='lastName' onChange={formik.handleChange} value={formik.values.lastName} className='px-4 py-2 outline-none focus:outline focus:outline-2 focus:outline-org bg-slate-700/40 rounded-md w-full' type="text" placeholder='Last Name' />
                {formik.touched.lastName && formik.errors.lastName && (<div className='text-red-600 animate-pulse' >{formik.errors.lastName} !</div>)}
                <input id='email' name='email' onChange={formik.handleChange} value={formik.values.email} className='px-4 py-2 outline-none focus:outline focus:outline-2 focus:outline-org bg-slate-700/40 rounded-md w-full' type="email" placeholder='Your Email' />
                {formik.touched.email && formik.errors.email && (<div className='text-red-600 animate-pulse'>{formik.errors.email}</div>)}
                <input id='password' name='password' onChange={formik.handleChange} value={formik.values.password} className='px-4 py-2 outline-none focus:outline focus:outline-2 focus:outline-org bg-slate-700/40 rounded-md w-full' type="password" placeholder='Your Password' />
                {formik.touched.password && formik.errors.password && (<div className='text-red-600 animate-pulse'>{formik.errors.password}</div>)}
                <input id='confirm_password' name='confirm_password' onChange={formik.handleChange} value={formik.values.confirm_password} className='px-4 py-2 outline-none focus:outline focus:outline-2 focus:outline-org bg-slate-700/40 rounded-md w-full' type="password" placeholder='Verify Password' />
                {formik.touched.confirm_password && formik.errors.confirm_password && (<div className='text-red-600 animate-pulse'>{formik.errors.confirm_password}</div>)}
                {!isLoading && res === 1 && <input className='px-4 py-2 text-white bg-org rounded-md cursor-pointer hover:bg-org/50 hover:scale-105 w-full' type="submit" value='REGISTER' />}
                {isLoading && <i className='bx bx-loader-circle bx-spin bx-flip-vertical text-org text-3xl' ></i>}
                {res === 201 && <div className='border-2 border-green-500 text-green-500 rounded-lg px-4 py-2 font-semibold' >Registered Successfully ! 🎉</div>}
                {res === 409 && <div className='border-2 border-yellow-500 text-yellow-500 rounded-lg px-4 py-2 font-semibold' >Email Already Exist ! 🙀</div>}
                {res === 500 || res === 404 && <div className='border-2 border-red-500 text-red-500 rounded-lg px-4 py-2 font-semibold' >Please try again ! ☹️</div>}
            </form>
            <p className='text-center text-white/70 py-2'>Already Registered ?<br />Click on Login button above...</p>
        </motion.main>
    )
}

export default Register