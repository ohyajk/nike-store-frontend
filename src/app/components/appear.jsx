"use client"
import React from 'react'
import { motion } from 'framer-motion';

const Appear = ({ children }) => {
    return (
        <motion.main initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            {children}
        </motion.main>

    )
}

export default Appear