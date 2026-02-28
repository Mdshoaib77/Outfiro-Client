// import React, { useContext, useEffect, useState } from 'react'
// import Title from './Title'
// import { ShopContext } from '../context/ShopContext'
// import Item from './Item'

// const RelatedProducts = ({ category, subCategory }) => {

//     const { products } = useContext(ShopContext)
//     const [related, setRelated] = useState([])

//     useEffect(() => {
//         if (products.length > 0) {
//             let filtered = products.slice()

//             filtered = filtered.filter((item) => category === item.category)
//             filtered = filtered.filter((item) => subCategory === item.subCategory)

//             // console.log(filtered.slice(0, 5))
//             setRelated(filtered.slice(0, 5))
//         }
//     }, [products])

//     return (
//         <section className='py-16'>
//             <Title title1={'Related'} title2={'Products'} titleStyles={'pb-4'} />
//             <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
//                 {related.map((product, i) => (
//                     <Item key={product._id} product={product} />
//                 ))}
//             </div>
//         </section>
//     )
// }

// export default RelatedProducts


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

const RelatedProducts = ({ category, subCategory }) => {

    const { products } = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            let filtered = products.slice()

            filtered = filtered.filter((item) => category === item.category)
            filtered = filtered.filter((item) => subCategory === item.subCategory)

            setRelated(filtered.slice(0, 5))
        }
    }, [products, category, subCategory])

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className='py-16'
        >
            {/* Animated Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
            >
                <Title
                    title1={'Related'}
                    title2={'Products'}
                    titleStyles={'pb-4'}
                />
            </motion.div>

            {/* Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
            >
                {related.map((product) => (
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

export default RelatedProducts