import React from "react"
import { motion } from "framer-motion"

import { FaCartShopping } from "react-icons/fa6"
import { FaSearch } from "react-icons/fa"
import { FaCreditCard } from "react-icons/fa"
import { FaTruck } from "react-icons/fa"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const steps = [
  {
    icon: <FaSearch />,
    title: "Browse Products",
    desc: "Explore the latest fashion collections for Men, Women, and Kids."
  },
  {
    icon: <FaCartShopping />,
    title: "Add To Cart",
    desc: "Choose your favorite items and add them to your shopping cart."
  },
  {
    icon: <FaCreditCard />,
    title: "Secure Checkout",
    desc: "Complete your purchase using our secure and fast checkout system."
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    desc: "Get your order delivered quickly and enjoy your new style."
  }
]

const HowItWorks = () => {
  return (
    <div className="bg-primary py-16 mt-6">

      <div className="max-padd-container">

        {/* Section Title */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <h2 className="text-3xl font-bold text-tertiary dark:text-white">
            How It Works
          </h2>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Shopping with Outfiro is simple and fast
          </p>

        </motion.div>


        {/* Steps */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (

            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow text-center"
            >

              <div className="text-3xl text-secondary mb-4 flex justify-center">
                {step.icon}
              </div>

              <h3 className="text-lg font-semibold text-tertiary dark:text-white mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-gray-500">
                {step.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default HowItWorks