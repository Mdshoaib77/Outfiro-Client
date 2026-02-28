// import React from 'react'
// import Title from './Title'
// import { blogs } from '../assets/data'

// const Blog = () => {
//   return (
//     <section className='py-16 max-padd-container'>
//       <Title title1={'Our Expert'} title2={'Blog'} titleStyles={'pb-10'} paraStyles={'!block'} />
//       {/* Container */}
//       <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
//         {blogs.map((blog)=>(
//           <div key={blog.title} className='rounded-3xl border-[11px] border-primary overflow-hidden relative'>
//             <img src={blog.image} alt="blogImg"/>
//             {/* Overlay */}
//             <div className='absolute top-0 left-0 w-full h-full bg-black/25'/>
//             {/* Info */}
//             <div className='absolute bottom-4 left-4 text-white text-[15px]'>
//               <h3 className='font-[600] text-[16px] pr-4 leading-5'>{blog.title}</h3>
//               <h4 className='pt-1 pb-3 medium-14'>{blog.category}</h4>
//               <button className='btn-light !px-3 !py-0'>continue reading</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Blog

import React from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import { blogs } from '../assets/data'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const Blog = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className='py-16 max-padd-container'
    >
      <Title 
        title1={'Our Expert'} 
        title2={'Blog'} 
        titleStyles={'pb-10'} 
        paraStyles={'!block'} 
      />

      {/* Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.title}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
            className='rounded-3xl border-[11px] border-primary overflow-hidden relative cursor-pointer'
          >
            <motion.img
              src={blog.image}
              alt="blogImg"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />

            {/* Overlay */}
            <motion.div
              className='absolute top-0 left-0 w-full h-full bg-black/25'
              initial={{ opacity: 0.25 }}
              whileHover={{ opacity: 0.4 }}
              transition={{ duration: 0.3 }}
            />

            {/* Info */}
            <div className='absolute bottom-4 left-4 text-white text-[15px]'>
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='font-[600] text-[16px] pr-4 leading-5'
              >
                {blog.title}
              </motion.h3>

              <motion.h4
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className='pt-1 pb-3 medium-14'
              >
                {blog.category}
              </motion.h4>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className='btn-light !px-3 !py-0'
              >
                continue reading
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Blog