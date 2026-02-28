// import React from 'react'
// import { FaStar } from 'react-icons/fa6'
// import { Link } from 'react-router-dom'

// const Item = ({ product }) => {
//     return (
//         <div className='relative bottom-12'>
//             {/* Image */}
//             <Link to={`/product/${product._id}`} className='flexCenter relative top-12 overflow-hidden m-2.5 rounded-xl'>
//                 <img src={product.image[0]} alt="productImg" />
//             </Link>
//             {/* Info */}
//             <div className='p-3 pt-12 bg-white rounded-lg shadows'>
//                 <h4 className='bold-15 line-clamp-1 !my-0'>{product.name}</h4>
//                 <div className='pt-1 flexBetween'>
//                     <h5 className='pr-2 h5'>${product.price}.00</h5>
//                     <div className='flex items-baseline gap-x-1'>
//                         <FaStar className='text-secondary'/>
//                         <h5 className='h5 relative bottom-0.5'>4.8</h5>
//                     </div>
//                 </div>
//                 <p className='py-1 line-clamp-2'>{product.description}</p>
//             </div>
//         </div>
//     )
// }

// export default Item

import React from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className='relative bottom-12'
        >
            {/* Image */}
            <Link
                to={`/product/${product._id}`}
                className='flexCenter relative top-12 overflow-hidden m-2.5 rounded-xl'
            >
                <motion.img
                    src={product.image[0]}
                    alt="productImg"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                />
            </Link>

            {/* Info */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='p-3 pt-12 bg-white rounded-lg shadows'
            >
                <motion.h4
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className='bold-15 line-clamp-1 !my-0'
                >
                    {product.name}
                </motion.h4>

                <div className='pt-1 flexBetween'>
                    <motion.h5
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className='pr-2 h5'
                    >
                        ${product.price}.00
                    </motion.h5>

                    <motion.div
                        className='flex items-baseline gap-x-1'
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 250 }}
                    >
                        <FaStar className='text-secondary'/>
                        <h5 className='h5 relative bottom-0.5'>4.8</h5>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className='py-1 line-clamp-2'
                >
                    {product.description}
                </motion.p>
            </motion.div>
        </motion.div>
    )
}

export default Item