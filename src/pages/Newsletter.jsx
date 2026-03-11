import React, { useState } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    setSuccess(true);
    setEmail("");

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 mt-6 bg-secondary text-center"
    >

      <div className="max-w-3xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-white"
        >
          Subscribe to our Newsletter
        </motion.h2>

        <p className="text-white/80 mt-3">
          Get updates about new products and special offers.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >

          <input
            type="email"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-5 py-3 rounded-lg outline-none w-full sm:w-80 text-gray-800 shadow-md focus:ring-2 focus:ring-primary"
          />

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-md hover:opacity-90 transition"
          >
            Subscribe
          </motion.button>

        </form>

        {success && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-300 mt-4 font-medium"
          >
            🎉 Successfully Subscribed!
          </motion.p>
        )}

      </div>

    </motion.section>
  );
};

export default Newsletter;