// import React from 'react'

// const Title = ({title1, title2, titleStyles, title1Styles, paraStyles}) => {
//   return (
//     <div className={`${titleStyles} pb-1`}>
//         <h3 className={`${title1Styles} h3`}>
//             {title1}
//            <span className='text-secondary !font-light'> {title2}</span>
//         </h3>
//         <p className={`${paraStyles} hidden`}>Discover the best deals on top-quality products, Crafted <br />
//         to elevate your everyday experience.</p>
//     </div>
//   )
// }

// export default Title

import React from 'react'
import { motion } from 'framer-motion'

const Title = ({ title1, title2, titleStyles, title1Styles, paraStyles }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${titleStyles} pb-1`}
    >
      <motion.h3
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className={`${title1Styles} h3`}
      >
        {title1}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='text-secondary !font-light'
        >
          {" "}{title2}
        </motion.span>
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className={`${paraStyles} hidden`}
      >
        Discover the best deals on top-quality products, Crafted <br />
        to elevate your everyday experience.
      </motion.p>
    </motion.div>
  )
}

export default Title