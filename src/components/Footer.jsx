// import React from 'react'
// import { FaMailBulk } from 'react-icons/fa'
// import { FaLocationDot, FaPhone, FaQuestion } from 'react-icons/fa6'

// const Footer = () => {
//     return (
//         <footer>
//             <div className='flex flex-col items-start justify-between gap-8 py-6 max-padd-container lg:flex-row mb-7 bg-primary'>
//                 <div>
//                     <h4 className='h4'>We are always here to help</h4>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae.</p>
//                 </div>
//                 <div className='flex-wrap gap-8 flexStart'>
//                     <div className='flexCenter gap-x-6'>
//                         <FaLocationDot />
//                         <div>
//                             <h5 className='h5'>Location</h5>
//                             <p>123, Avenue, Cl</p>
//                         </div>
//                     </div>
//                     <div className='flexCenter gap-x-6'>
//                         <FaPhone />
//                         <div>
//                             <h5 className='h5'>Phone</h5>
//                             <p>+0123456789</p>
//                         </div>
//                     </div>
//                     <div className='flexCenter gap-x-6'>
//                         <FaMailBulk />
//                         <div>
//                             <h5 className='h5'>Email Support</h5>
//                             <p>info@outfiro.com</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex flex-wrap items-start justify-between gap-12 mt-12 max-padd-container'>
//                 {/* logo - Left side */}
//                 <div className='flex flex-col max-w-sm gap-y-5'>
//                     <div className='bold-32'>
//                         Outfir<span className='text-secondary'>o</span>
//                     </div>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum reprehenderit possimus!</p>
//                 </div>
//                 <div className='flex-wrap flexStart gap-7 xl:gap-x-36'>
//                     <ul>
//                         <h4 className='mb-3 h4'>Customer Service</h4>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Help center</a></li>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Payment methods</a></li>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Contact</a></li>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Shipping status</a></li>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Complaints</a></li>
//                     </ul>
//                     <ul>
//                         <h4 className='mb-3 h4'>Legal</h4>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Privacy Policy</a></li>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Cookie settings</a></li>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Terms & conditions</a></li>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Cancelation</a></li>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Imprint</a></li>
//                     </ul>
//                     <ul>
//                         <h4 className='mb-3 h4'>Others</h4>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Our teams</a></li>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Sustainability</a></li>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Press</a></li>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Jobs</a></li>
//                         <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Newsletter</a></li>
//                     </ul>
//                 </div>
//             </div>
//             {/* copyrights */}
//             <p className='px-8 py-2 mt-6 rounded max-padd-container bg-primary medium-14 flexBetween'><span>2025 Outfiro</span><span>All rights reserved</span></p>
//         </footer>
//     )
// }

// export default Footer


import React from 'react'
import { motion } from 'framer-motion'
import { FaMailBulk } from 'react-icons/fa'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const Footer = () => {
    return (
        <footer>

            {/* Top Contact Section */}
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className='flex flex-col items-start justify-between gap-8 py-6 max-padd-container lg:flex-row mb-7 bg-primary'
            >
                <motion.div variants={fadeUp}>
                    <h4 className='h4'>We are always here to help</h4>
                    <p>
                        Need assistance with your order or have questions about our collections? 
                        The Outfiro support team is ready to assist you anytime.
                    </p>
                </motion.div>

                <div className='flex-wrap gap-8 flexStart'>

                    <motion.div variants={fadeUp} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }} className='flexCenter gap-x-6'>
                        <FaLocationDot />
                        <div>
                            <h5 className='h5'>Location</h5>
                            <p>House 123, Fashion Avenue, Dhaka</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }} className='flexCenter gap-x-6'>
                        <FaPhone />
                        <div>
                            <h5 className='h5'>Phone</h5>
                            <p>+880 1234 567890</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }} className='flexCenter gap-x-6'>
                        <FaMailBulk />
                        <div>
                            <h5 className='h5'>Email Support</h5>
                            <p>support@outfiro.com</p>
                        </div>
                    </motion.div>

                </div>
            </motion.div>

            {/* Main Footer */}
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className='flex flex-wrap items-start justify-between gap-12 mt-12 max-padd-container'
            >
                {/* Logo */}
                <motion.div variants={fadeUp} className='flex flex-col max-w-sm gap-y-5'>
                    <div className='bold-32'>
                        Outfir<span className='text-secondary'>o</span>
                    </div>
                    <p>
                        Outfiro is your destination for modern, stylish, and affordable fashion. 
                        Discover premium dresses designed to elevate your everyday look.
                    </p>
                </motion.div>

                <div className='flex-wrap flexStart gap-7 xl:gap-x-36'>

                    <motion.ul variants={fadeUp}>
                        <h4 className='mb-3 h4'>Customer Service</h4>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Help center</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Payment methods</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Contact</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Shipping status</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Complaints</a></li>
                    </motion.ul>

                    <motion.ul variants={fadeUp}>
                        <h4 className='mb-3 h4'>Legal</h4>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Privacy Policy</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Cookie settings</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Terms & conditions</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Cancelation</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Imprint</a></li>
                    </motion.ul>

                    <motion.ul variants={fadeUp}>
                        <h4 className='mb-3 h4'>Others</h4>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Our teams</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Sustainability</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Press</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Jobs</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Newsletter</a></li>
                    </motion.ul>

                </div>
            </motion.div>

            {/* Copyright */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='px-8 py-2 mt-6 rounded max-padd-container bg-primary medium-14 flexBetween'
            >
                <span>2026 Outfiro</span>
                <span>All rights reserved</span>
            </motion.p>

        </footer>
    )
}

export default Footer