import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const ProductDescription = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className='rounded-lg ring-1 ring-slate-900/10'
        >
            <div className='flex gap-3'>
                <motion.button
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className='w-32 p-3 border-b-2 medium-14 border-secondary'
                >
                    Description
                </motion.button>
                <motion.button
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className='w-32 p-3 medium-14'
                >
                    Care Guide
                </motion.button>
                <motion.button
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className='w-32 p-3 medium-14'
                >
                    Size Guide
                </motion.button>
            </div>

            <hr className='h-[1px] w-full'/>

            <div className='flex flex-col gap-3 p-3'>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <h5 className='h5'>Detail</h5>
                    <p className='text-sm'>
                        This Outfiro dress is crafted with premium breathable fabric 
                        designed to provide maximum comfort and elegance throughout the day. 
                        The modern cut and refined stitching ensure a flattering fit 
                        suitable for both casual outings and special occasions.
                    </p>
                    <p className='text-sm'>
                        With its timeless design and versatile styling, this piece 
                        seamlessly blends fashion and functionality, making it a must-have 
                        addition to your wardrobe.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h5 className='h5'>Benefit</h5>
                    <ul className='flex flex-col gap-1 pl-5 text-sm list-disc text-gray-30'>
                        <motion.li variants={fadeUp}>
                            High-quality fabric ensures long-lasting durability and all-day comfort.
                        </motion.li>
                        <motion.li variants={fadeUp}>
                            Designed to complement modern fashion trends with a timeless touch.
                        </motion.li>
                        <motion.li variants={fadeUp}>
                            Available in multiple sizes and elegant colors to match your style.
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ProductDescription