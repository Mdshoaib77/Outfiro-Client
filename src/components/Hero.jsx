// import React from 'react'
// import heroImg from '../assets/hero.png'
// import { BsFire } from "react-icons/bs"
// import { FaArrowRight } from "react-icons/fa6"
// import { Link } from 'react-router-dom'
// import { FaPlay } from 'react-icons/fa'

// const Hero = () => {
//     return (
//         <section className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[667px] w-full mb-10 relative'>
//             <div className='bg-white p-3 rounded-2xl max-w-[233px] relative top-8 xl:top-12'>
//                 <div className='relative'>
//                     <img src={heroImg} alt="" height={211} width={211} className='mb-3 rounded-3xl' />
//                     <span className='absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer top-1/2 left-1/2 flexCenter bg-secondary'>
//                         <span className='absolute w-full h-full bg-white rounded-full opacity-50 animate-ping'></span>
//                         <FaPlay className='text-sm relative left-[1px] text-white'/>
//                     </span>
//                 </div>
//                 <p className='text-[13px]'><b className='uppercase'>Unlock</b> your best look, one click at a time, Your style upgrade starts here, shop today!</p>
//             </div>
//             <div className='mt-12 sm:mt-20 xl:mt-40 max-w-[777px]'>
//                 <h5 className='flex items-baseline uppercase gap-x-2 text-secondary medium-18'>MODERN COLLECTION <BsFire /></h5>
//                 <h1 className='h1 font-[500] capitalize max-w-[722px]'>Every click brings you closer to perfection shop now!</h1>
//                 <div className='flex'>
//                     <Link className='pl-5 text-xs font-medium capitalize bg-white rounded-full flexCenter gap-x-2 group'>
//                         Check our modern Collection
//                         <FaArrowRight className='bg-secondary text-white rounded-full h-11 w-11 p-3 m-[3px] border border-white group-hover:-rotate-[20deg] transition-all duration-500'/>
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Hero

import React from 'react'
import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'
import { BsFire } from "react-icons/bs"
import { FaArrowRight } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

const Hero = () => {
    return (
        <section className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[667px] w-full mb-10 relative overflow-hidden'>

            {/* Left Card Animation */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='bg-white p-3 rounded-2xl max-w-[233px] relative top-8 xl:top-12'
            >
                <div className='relative'>
                    <motion.img
                        src={heroImg}
                        alt=""
                        height={211}
                        width={211}
                        className='mb-3 rounded-3xl'
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    />

                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
                        className='absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer top-1/2 left-1/2 flexCenter bg-secondary'
                    >
                        <span className='absolute w-full h-full bg-white rounded-full opacity-50 animate-ping'></span>
                        <FaPlay className='text-sm relative left-[1px] text-white'/>
                    </motion.span>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className='text-[13px]'
                >
                    <b className='uppercase'>Unlock</b> your best look, one click at a time, Your style upgrade starts here, shop today!
                </motion.p>
            </motion.div>

            {/* Right Content Animation */}
            <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className='mt-12 sm:mt-20 xl:mt-40 max-w-[777px]'
            >
                <motion.h5
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className='flex items-baseline uppercase gap-x-2 text-secondary medium-18'
                >
                    MODERN COLLECTION <BsFire />
                </motion.h5>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className='h1 font-[500] capitalize max-w-[722px]'
                >
                    Every click brings you closer to perfection shop now!
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className='flex'
                >
                    <Link className='pl-5 text-xs font-medium capitalize bg-white rounded-full flexCenter gap-x-2 group'>
                        Check our modern Collection
                        <motion.div
                            whileHover={{ rotate: -20 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <FaArrowRight className='bg-secondary text-white rounded-full h-11 w-11 p-3 m-[3px] border border-white'/>
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>

        </section>
    )
}

export default Hero