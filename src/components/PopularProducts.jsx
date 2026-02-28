// import React, { useContext, useEffect, useState } from 'react'
// import Title from './Title'
// import { ShopContext } from '../context/ShopContext'
// import Item from './Item'

// const PopularProducts = () => {

//   const {products} = useContext(ShopContext)
//   const [popularProducts, setPopularProducts] = useState([])

// useEffect(()=>{
//   const data = products.filter(item => item.popular)
//   setPopularProducts(data.slice(0, 5))
// }, [products])
  
//   return (
//     <section className='py-16 max-padd-container bg-primary'>
//       <Title title1={'Popular'} title2={'Products'} titleStyles={'pb-10'} paraStyles={'!block'}/>
//       {/* Container */}
//       <div className='grid grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
//         {popularProducts.map(product=>(
//           <div key={product._id}>
//             <Item product={product}/>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default PopularProducts

import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import Item from './Item'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const PopularProducts = () => {

  const { products } = useContext(ShopContext)
  const [popularProducts, setPopularProducts] = useState([])

  useEffect(() => {
    const data = products.filter(item => item.popular)
    setPopularProducts(data.slice(0, 5))
  }, [products])

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className='py-16 max-padd-container bg-primary'
    >
      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <Title
          title1={'Popular'}
          title2={'Products'}
          titleStyles={'pb-10'}
          paraStyles={'!block'}
        />
      </motion.div>

      {/* Grid Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className='grid grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
      >
        {popularProducts.map(product => (
          <motion.div
            key={product._id}
            variants={itemVariants}
          >
            <Item product={product} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default PopularProducts