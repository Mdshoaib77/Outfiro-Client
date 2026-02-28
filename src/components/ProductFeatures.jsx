// import React from 'react'
// import { RiSecurePaymentLine } from 'react-icons/ri'
// import { TbArrowBackUp, TbTruckDelivery } from 'react-icons/tb'

// const ProductFeatures = () => {
//   return (
//     <section className='mt-6 bg-primary rounded-xl'>
//         <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 rounded-xl'>
//             <div className='p-2 flexCenter gap-x-4 rounded-3xl'>
//                 <div className='text-3xl'><TbArrowBackUp className='mb-3 text-yellow-500'/></div>
//                 <div>
//                     <h4 className='capitalize h4'>Easy Return</h4>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque corrupti asperiores animi, praesentium temporibus!</p>
//                 </div>
//             </div>
//             <div className='p-2 flexCenter gap-x-4 rounded-3xl'>
//                 <div className='text-3xl'><TbTruckDelivery className='mb-3 text-red-500'/></div>
//                 <div>
//                     <h4 className='capitalize h4'>Fast Delivery</h4>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque corrupti asperiores animi, praesentium temporibus!</p>
//                 </div>
//             </div>
//             <div className='p-2 flexCenter gap-x-4 rounded-3xl'>
//                 <div className='text-3xl'><RiSecurePaymentLine className='mb-3 text-secondary'/></div>
//                 <div>
//                     <h4 className='capitalize h4'>Secure Payment</h4>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque corrupti asperiores animi, praesentium temporibus!</p>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default ProductFeatures


import React from 'react'
import { motion } from 'framer-motion'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { TbArrowBackUp, TbTruckDelivery } from 'react-icons/tb'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const ProductFeatures = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className='mt-6 bg-primary rounded-xl'
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 rounded-xl'
      >

        {/* Easy Return */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className='p-2 flexCenter gap-x-4 rounded-3xl'
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250 }}
            className='text-3xl'
          >
            <TbArrowBackUp className='mb-3 text-yellow-500'/>
          </motion.div>
          <div>
            <h4 className='capitalize h4'>Easy Return</h4>
            <p>
              Shop confidently with Outfiro’s hassle-free return policy. 
              If your outfit doesn’t fit perfectly, enjoy smooth and simple returns.
            </p>
          </div>
        </motion.div>

        {/* Fast Delivery */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className='p-2 flexCenter gap-x-4 rounded-3xl'
        >
          <motion.div
            whileHover={{ rotate: -10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250 }}
            className='text-3xl'
          >
            <TbTruckDelivery className='mb-3 text-red-500'/>
          </motion.div>
          <div>
            <h4 className='capitalize h4'>Fast Delivery</h4>
            <p>
              Experience quick and reliable delivery services that bring 
              your favorite Outfiro styles right to your doorstep.
            </p>
          </div>
        </motion.div>

        {/* Secure Payment */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className='p-2 flexCenter gap-x-4 rounded-3xl'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250 }}
            className='text-3xl'
          >
            <RiSecurePaymentLine className='mb-3 text-secondary'/>
          </motion.div>
          <div>
            <h4 className='capitalize h4'>Secure Payment</h4>
            <p>
              Your transactions are fully protected with advanced encryption, 
              ensuring a safe and secure shopping experience every time.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  )
}

export default ProductFeatures