// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext'
// import { FaStar, FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6'
// import { FaHeart } from 'react-icons/fa'
// import { TbShoppingBagPlus } from 'react-icons/tb'
// import ProductDescription from '../components/ProductDescription'
// import ProductFeatures from '../components/ProductFeatures'
// import RelatedProducts from '../components/RelatedProducts'
// import Footer from '../components/Footer'


// const Product = () => {

//   const { productId } = useParams()
//   const { products, currency, addToCart } = useContext(ShopContext)
//   const [product, setProduct] = useState(null)
//   const [image, setImage] = useState("")
//   const [size, setSize] = useState("")

//   const fetchProductData = async () => {
//     const selectedProduct = products.find((item) => item._id === productId)
//     if (selectedProduct) {
//       setProduct(selectedProduct)
//       setImage(selectedProduct.image[0])
//       // console.log(selectedProduct)
//     }
//   }

//   useEffect(() => {
//     fetchProductData()
//   }, [productId, products])

//   if (!product) {
//     return <div>...Loading</div>
//   }

//   return (
//     <div>
//       <div className='max-padd-container'>
//         {/* Product data */}
//         <div className='flex flex-col gap-12 p-3 mb-6 xl:flex-row bg-primary rounded-2xl'>
//           {/* Product image */}
//           <div className='flex flex-1 gap-x-2 xl:flex-1'>
//             <div className='flexCenter flex-col gap-[7px] flex-wrap'>
//               {product.image.map((item, i) => (
//                 <img onClick={() => setImage(item)} key={i} src={item} alt="productImg" className='max-h-[89px] rounded-lg' />
//               ))}
//             </div>
//             <div className='max-h-[377px] w-auto flex'>
//               <img src={image} alt="productImg" className='rounded-xl bg-gray-10' />
//             </div>
//           </div>
//           {/* Product info */}
//           <div className='flex-[1.5] rounded-2xl xl:px-7'>
//             <h3 className='leading-none h3'>{product.name}</h3>
//             {/* Rating and price */}
//             <div className='flex items-baseline gap-x-5'>
//               <div className='flex items-center gap-x-2 text-secondary'>
//                 <div className='flex gap-x-2 text-secondary'>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStarHalfStroke />
//                 </div>
//                 <span className='medium-14'>(122)</span>
//               </div>
//             </div>
//             <h4 className='my-2 h4'>{currency}{product.price}.00</h4>
//             <p className='max-w-[555px]'>{product.description}</p>
//             <div className='flex flex-col gap-4 my-4 mb-5'>
//               <div className='flex gap-2'>
//                 {[...product.sizes].sort((a, b) => {
//                   const order = ["S", "M", "L", "XL", "XXL"]
//                   return order.indexOf(a) - order.indexOf(b)
//                 }).map((item, i) => (
//                   <button key={i} onClick={() => setSize(item)} className={`${item === size ? "ring-1 ring-slate-900/20" : "ring-1 ring-slate-900/5"} medium-14 h-8 w-10 bg-primary rounded`}>{item}</button>
//                 ))}
//               </div>
//             </div>
//             <div className='flex items-center gap-x-4'>
//               <button onClick={()=>addToCart(product._id, size)} className='btn-secondary !rounded-lg sm:w-1/2 flexCenter gap-x-2 capitalize'>Add to Cart <TbShoppingBagPlus /></button>
//               <button className='btn-light !rounded-lg !py-3.5'><FaHeart /></button>
//             </div>
//             <div className='flex items-center mt-3 gap-x-2'>
//               <FaTruckFast className='text-lg' />
//               <span className='medium-14'>Free Delivery on orders over 500$</span>
//             </div>
//             <hr className='w-2/3 my-3' />
//             <div className='mt-2 flex flex-col gap-1 text-gray-30 text-[14px]'>
//               <p>Authenticy You Can Trust</p>
//               <p>Enjoy Cash on Delivery for Your Convenience</p>
//               <p>Enjoy Cash on Delivery for Your Convenience</p>
//             </div>
//           </div>
//         </div>
//         <ProductDescription />
//         <ProductFeatures />
//         <RelatedProducts category={product.category} subCategory={product.subCategory} />
//       </div>

//       <Footer />
//     </div>
//   )
// }

// export default Product


import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { FaStar, FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa'
import { TbShoppingBagPlus } from 'react-icons/tb'
import ProductDescription from '../components/ProductDescription'
import ProductFeatures from '../components/ProductFeatures'
import RelatedProducts from '../components/RelatedProducts'
import Footer from '../components/Footer'

const Product = () => {

  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [product, setProduct] = useState(null)
  const [image, setImage] = useState("")
  const [size, setSize] = useState("")

  const fetchProductData = async () => {
    const selectedProduct = products.find((item) => item._id === productId)
    if (selectedProduct) {
      setProduct(selectedProduct)
      setImage(selectedProduct.image[0])
    }
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  if (!product) {
    return <div>...Loading</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='max-padd-container'>

        {/* Product data */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='flex flex-col gap-12 p-3 mb-6 xl:flex-row bg-primary rounded-2xl'
        >

          {/* Product image */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='flex flex-1 gap-x-2 xl:flex-1'
          >
            <div className='flexCenter flex-col gap-[7px] flex-wrap'>
              {product.image.map((item, i) => (
                <motion.img
                  key={i}
                  onClick={() => setImage(item)}
                  src={item}
                  alt="productImg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className='max-h-[89px] rounded-lg cursor-pointer'
                />
              ))}
            </div>

            <motion.div
              key={image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className='max-h-[377px] w-auto flex'
            >
              <motion.img
                src={image}
                alt="productImg"
                className='rounded-xl bg-gray-10'
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='flex-[1.5] rounded-2xl xl:px-7'
          >
            <h3 className='leading-none h3'>{product.name}</h3>

            {/* Rating */}
            <div className='flex items-baseline gap-x-5'>
              <div className='flex items-center gap-x-2 text-secondary'>
                <div className='flex gap-x-2 text-secondary'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <span className='medium-14'>(122)</span>
              </div>
            </div>

            <h4 className='my-2 h4'>{currency}{product.price}.00</h4>

            <p className='max-w-[555px]'>{product.description}</p>

            {/* Sizes */}
            <div className='flex flex-col gap-4 my-4 mb-5'>
              <div className='flex gap-2'>
                {[...product.sizes].sort((a, b) => {
                  const order = ["S", "M", "L", "XL", "XXL"]
                  return order.indexOf(a) - order.indexOf(b)
                }).map((item, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setSize(item)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className={`${item === size ? "ring-1 ring-slate-900/20" : "ring-1 ring-slate-900/5"} medium-14 h-8 w-10 bg-primary rounded`}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className='flex items-center gap-x-4'>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 250 }}
                onClick={() => addToCart(product._id, size)}
                className='btn-secondary !rounded-lg sm:w-1/2 flexCenter gap-x-2 capitalize'
              >
                Add to Cart <TbShoppingBagPlus />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='btn-light !rounded-lg !py-3.5'
              >
                <FaHeart />
              </motion.button>
            </div>

            {/* Delivery */}
            <div className='flex items-center mt-3 gap-x-2'>
              <FaTruckFast className='text-lg' />
              <span className='medium-14'>Free Delivery on orders over 500$</span>
            </div>

            <hr className='w-2/3 my-3' />

            <div className='mt-2 flex flex-col gap-1 text-gray-30 text-[14px]'>
              <p>Authenticity You Can Trust</p>
              <p>Enjoy Cash on Delivery for Your Convenience</p>
              <p>Secure Packaging for Safe Shipping</p>
            </div>
          </motion.div>

        </motion.div>

        <ProductDescription />
        <ProductFeatures />
        <RelatedProducts
          category={product.category}
          subCategory={product.subCategory}
        />
      </div>

      <Footer />
    </motion.div>
  )
}

export default Product