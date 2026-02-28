// // import React from 'react'

// // const Contact = () => {
// //   return (
// //     <div>
// //       <h1>hellop</h1>
// //     </div>
// //   )
// // }

// // export default Contact


// // import React, { useMemo, useState } from "react";

// // const Contact = () => {
// //   const initial = useMemo(
// //     () => ({
// //       name: "",
// //       email: "",
// //       subject: "",
// //       message: "",
// //     }),
// //     []
// //   );

// //   const [form, setForm] = useState(initial);
// //   const [errors, setErrors] = useState({});
// //   const [status, setStatus] = useState({ type: "", message: "" }); // type: success | error
// //   const [loading, setLoading] = useState(false);

// //   const onChange = (e) => {
// //     const { name, value } = e.target;
// //     setForm((p) => ({ ...p, [name]: value }));
// //     // live clear
// //     setErrors((p) => ({ ...p, [name]: "" }));
// //     setStatus({ type: "", message: "" });
// //   };

// //   const validate = () => {
// //     const next = {};
// //     const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

// //     if (!form.name.trim()) next.name = "Name is required";
// //     if (!form.email.trim()) next.email = "Email is required";
// //     else if (!emailOk) next.email = "Please enter a valid email";
// //     if (!form.subject.trim()) next.subject = "Subject is required";
// //     if (!form.message.trim()) next.message = "Message is required";
// //     else if (form.message.trim().length < 10)
// //       next.message = "Message should be at least 10 characters";

// //     return next;
// //   };

// //   const onSubmit = async (e) => {
// //     e.preventDefault();
// //     const v = validate();
// //     setErrors(v);
// //     if (Object.keys(v).length) return;

// //     try {
// //       setLoading(true);
// //       setStatus({ type: "", message: "" });

// //       // ✅ If you have backend endpoint, replace this URL:
// //       // await fetch(`${import.meta.env.VITE_API_URL}/contact`, {...})
// //       await new Promise((r) => setTimeout(r, 700));

// //       setStatus({
// //         type: "success",
// //         message: "Message sent successfully! We’ll get back to you soon.",
// //       });
// //       setForm(initial);
// //     } catch (err) {
// //       setStatus({
// //         type: "error",
// //         message: "Something went wrong. Please try again.",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="py-10 max-padd-container md:py-14">
// //       {/* Header */}
// //       <div className="mb-8 md:mb-10">
// //         <h1 className="mb-2 h2 text-tertiary dark:text-white">Contact Us</h1>
// //         <p className="max-w-2xl">
// //           Need help with an order, product info, or partnership? Send us a message
// //           and our team will reply within 24–48 hours.
// //         </p>
// //       </div>

// //       <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
// //         {/* Form Card */}
// //         <div className="rounded-2xl bg-white dark:bg-[#13293D] border border-gray-10/60 dark:border-white/10 shadows p-5 md:p-7 transition-colors duration-300">
// //           {/* Status */}
// //           {status.message ? (
// //             <div
// //               className={`mb-5 rounded-xl px-4 py-3 text-sm border ${
// //                 status.type === "success"
// //                   ? "bg-primary/60 border-secondary/30 text-tertiary dark:text-gray-100"
// //                   : "bg-red-50 border-red-200 text-red-700 dark:bg-red-950/40 dark:border-red-400/30 dark:text-red-200"
// //               }`}
// //               role="status"
// //               aria-live="polite"
// //             >
// //               {status.message}
// //             </div>
// //           ) : null}

// //           <form onSubmit={onSubmit} className="space-y-4">
// //             {/* Name */}
// //             <div>
// //               <label
// //                 htmlFor="name"
// //                 className="block mb-1 text-sm font-semibold text-tertiary dark:text-gray-100"
// //               >
// //                 Full Name <span className="text-secondary">*</span>
// //               </label>
// //               <input
// //                 id="name"
// //                 name="name"
// //                 value={form.name}
// //                 onChange={onChange}
// //                 placeholder="Your name"
// //                 className={`w-full rounded-xl px-4 py-3 outline-none border transition-colors duration-300
// //                   bg-white text-tertiary border-gray-10
// //                   dark:bg-[#0F2233] dark:text-gray-100 dark:border-white/10
// //                   focus:border-secondary dark:focus:border-secondary
// //                   ${errors.name ? "border-red-400 dark:border-red-400/70" : ""}`}
// //               />
// //               {errors.name ? (
// //                 <p className="mt-1 text-xs text-red-600 dark:text-red-200">
// //                   {errors.name}
// //                 </p>
// //               ) : null}
// //             </div>

// //             {/* Email */}
// //             <div>
// //               <label
// //                 htmlFor="email"
// //                 className="block mb-1 text-sm font-semibold text-tertiary dark:text-gray-100"
// //               >
// //                 Email <span className="text-secondary">*</span>
// //               </label>
// //               <input
// //                 id="email"
// //                 name="email"
// //                 value={form.email}
// //                 onChange={onChange}
// //                 placeholder="you@email.com"
// //                 className={`w-full rounded-xl px-4 py-3 outline-none border transition-colors duration-300
// //                   bg-white text-tertiary border-gray-10
// //                   dark:bg-[#0F2233] dark:text-gray-100 dark:border-white/10
// //                   focus:border-secondary dark:focus:border-secondary
// //                   ${errors.email ? "border-red-400 dark:border-red-400/70" : ""}`}
// //               />
// //               {errors.email ? (
// //                 <p className="mt-1 text-xs text-red-600 dark:text-red-200">
// //                   {errors.email}
// //                 </p>
// //               ) : null}
// //             </div>

// //             {/* Subject */}
// //             <div>
// //               <label
// //                 htmlFor="subject"
// //                 className="block mb-1 text-sm font-semibold text-tertiary dark:text-gray-100"
// //               >
// //                 Subject <span className="text-secondary">*</span>
// //               </label>
// //               <input
// //                 id="subject"
// //                 name="subject"
// //                 value={form.subject}
// //                 onChange={onChange}
// //                 placeholder="How can we help?"
// //                 className={`w-full rounded-xl px-4 py-3 outline-none border transition-colors duration-300
// //                   bg-white text-tertiary border-gray-10
// //                   dark:bg-[#0F2233] dark:text-gray-100 dark:border-white/10
// //                   focus:border-secondary dark:focus:border-secondary
// //                   ${errors.subject ? "border-red-400 dark:border-red-400/70" : ""}`}
// //               />
// //               {errors.subject ? (
// //                 <p className="mt-1 text-xs text-red-600 dark:text-red-200">
// //                   {errors.subject}
// //                 </p>
// //               ) : null}
// //             </div>

// //             {/* Message */}
// //             <div>
// //               <label
// //                 htmlFor="message"
// //                 className="block mb-1 text-sm font-semibold text-tertiary dark:text-gray-100"
// //               >
// //                 Message <span className="text-secondary">*</span>
// //               </label>
// //               <textarea
// //                 id="message"
// //                 name="message"
// //                 value={form.message}
// //                 onChange={onChange}
// //                 placeholder="Write your message..."
// //                 rows={5}
// //                 className={`w-full rounded-xl px-4 py-3 outline-none border transition-colors duration-300 resize-none
// //                   bg-white text-tertiary border-gray-10
// //                   dark:bg-[#0F2233] dark:text-gray-100 dark:border-white/10
// //                   focus:border-secondary dark:focus:border-secondary
// //                   ${errors.message ? "border-red-400 dark:border-red-400/70" : ""}`}
// //               />
// //               {errors.message ? (
// //                 <p className="mt-1 text-xs text-red-600 dark:text-red-200">
// //                   {errors.message}
// //                 </p>
// //               ) : null}
// //             </div>

// //             {/* Actions */}
// //             <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
// //               <button
// //                 type="submit"
// //                 disabled={loading}
// //                 className={`btn-secondary w-full sm:w-auto flexCenter gap-2 ${
// //                   loading ? "opacity-70 cursor-not-allowed" : ""
// //                 }`}
// //               >
// //                 {loading ? (
// //                   <>
// //                     <span className="inline-block w-4 h-4 border-2 rounded-full border-white/60 border-t-white animate-spin" />
// //                     Sending...
// //                   </>
// //                 ) : (
// //                   "Send Message"
// //                 )}
// //               </button>

// //               <p className="text-xs text-gray-30 dark:text-gray-300">
// //                 By sending, you agree to be contacted about your request.
// //               </p>
// //             </div>
// //           </form>
// //         </div>

// //         {/* Info Card */}
// //         <aside className="rounded-2xl bg-white dark:bg-[#0F2233] border border-gray-10/60 dark:border-white/10 shadows p-5 md:p-7 transition-colors duration-300">
// //           <h3 className="mb-3 h4 text-tertiary dark:text-white">Quick Info</h3>

// //           <div className="space-y-4">
// //             <div className="p-4 border rounded-xl bg-primary/40 dark:bg-white/5 border-gray-10/50 dark:border-white/10">
// //               <p className="mb-1 text-sm font-semibold text-tertiary dark:text-gray-100">
// //                 Support Email
// //               </p>
// //               <p className="text-sm dark:text-gray-200">info@outfiro.com</p>
// //             </div>

// //             <div className="p-4 border rounded-xl bg-primary/40 dark:bg-white/5 border-gray-10/50 dark:border-white/10">
// //               <p className="mb-1 text-sm font-semibold text-tertiary dark:text-gray-100">
// //                 Office Hours
// //               </p>
// //               <p className="text-sm dark:text-gray-200">Sat–Thu: 10am – 7pm</p>
// //             </div>

// //             <div className="p-4 border rounded-xl bg-primary/40 dark:bg-white/5 border-gray-10/50 dark:border-white/10">
// //               <p className="mb-1 text-sm font-semibold text-tertiary dark:text-gray-100">
// //                 Location
// //               </p>
// //               <p className="text-sm dark:text-gray-200">
// //                 Dhaka, Bangladesh (Online Store)
// //               </p>
// //             </div>

// //             <div className="p-4 border rounded-xl bg-primary/40 dark:bg-white/5 border-gray-10/50 dark:border-white/10">
// //               <p className="mb-1 text-sm font-semibold text-tertiary dark:text-gray-100">
// //                 Response Time
// //               </p>
// //               <p className="text-sm dark:text-gray-200">
// //                 Usually within 24–48 hours
// //               </p>
// //             </div>
// //           </div>

// //           {/* Small CTA */}
// //           <div className="p-4 mt-6 border rounded-xl border-secondary/30 bg-secondary/10 dark:bg-secondary/10">
// //             <p className="mb-1 text-sm font-semibold text-tertiary dark:text-gray-100">
// //               Order Help
// //             </p>
// //             <p className="text-sm dark:text-gray-200">
// //               Include your order ID in the subject for faster support.
// //             </p>
// //           </div>
// //         </aside>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;

// import React, { useMemo, useState } from "react";
// import Footer from "./Footer";

// const Contact = () => {
//   const initial = useMemo(
//     () => ({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     }),
//     []
//   );

//   const [form, setForm] = useState(initial);
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState({ type: "", message: "" }); // type: success | error
//   const [loading, setLoading] = useState(false);

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setForm((p) => ({ ...p, [name]: value }));
//     // live clear
//     setErrors((p) => ({ ...p, [name]: "" }));
//     setStatus({ type: "", message: "" });
//   };

//   const validate = () => {
//     const next = {};
//     const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

//     if (!form.name.trim()) next.name = "Name is required";
//     if (!form.email.trim()) next.email = "Email is required";
//     else if (!emailOk) next.email = "Please enter a valid email";
//     if (!form.subject.trim()) next.subject = "Subject is required";
//     if (!form.message.trim()) next.message = "Message is required";
//     else if (form.message.trim().length < 10)
//       next.message = "Message should be at least 10 characters";

//     return next;
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const v = validate();
//     setErrors(v);
//     if (Object.keys(v).length) return;

//     try {
//       setLoading(true);
//       setStatus({ type: "", message: "" });

//       // ✅ If you have backend endpoint, replace this URL:
//       // await fetch(`${import.meta.env.VITE_API_URL}/contact`, {...})
//       await new Promise((r) => setTimeout(r, 700));

//       setStatus({
//         type: "success",
//         message: "Message sent successfully! We’ll get back to you soon.",
//       });
//       setForm(initial);
//     } catch (err) {
//       setStatus({
//         type: "error",
//         message: "Something went wrong. Please try again.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="py-10 max-padd-container md:py-14">
//       {/* Header */}
//       <div className="mb-8 md:mb-10">
//         <h1 className="mb-2 h2 text-tertiary dark:text-white">Contact Us</h1>
//         <p className="max-w-2xl">
//           Need help with an order, product info, or partnership? Send us a message
//           and our team will reply within 24–48 hours.
//         </p>
//       </div>

//       <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
//         {/* Form Card */}
//         <div className="rounded-2xl bg-white dark:bg-[#13293D] border border-gray-10/60 dark:border-white/10 shadows p-5 md:p-7 transition-colors duration-300">
//           {/* Status */}
//           {status.message ? (
//             <div
//               className={`mb-5 rounded-xl px-4 py-3 text-sm border ${
//                 status.type === "success"
//                   ? "bg-primary/60 border-secondary/30 text-tertiary dark:text-gray-100"
//                   : "bg-red-50 border-red-200 text-red-700 dark:bg-red-950/40 dark:border-red-400/30 dark:text-red-200"
//               }`}
//               role="status"
//               aria-live="polite"
//             >
//               {status.message}
//             </div>
//           ) : null}

//           <form onSubmit={onSubmit} className="space-y-4">
//             {/* Name */}
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block mb-1 text-sm font-semibold text-tertiary dark:text-gray-100"
//               >
//                 Full Name <span className="text-secondary">*</span>
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 value={form.name}
//                 onChange={onChange}
//                 placeholder="Your name"
//                 className={`w-full rounded-xl px-4 py-3 outline-none border transition-colors duration-300
//                   bg-white text-tertiary border-gray-10
//                   dark:bg-[#0F2233] dark:text-gray-100 dark:border-white/10
//                   focus:border-secondary dark:focus:border-secondary
//                   ${errors.name ? "border-red-400 dark:border-red-400/70" : ""}`}
//               />
//               {errors.name ? (
//                 <p className="mt-1 text-xs text-red-600 dark:text-red-200">
//                   {errors.name}
//                 </p>
//               ) : null}
//             </div>

//             {/* Email */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block mb-1 text-sm font-semibold text-tertiary dark:text-gray-100"
//               >
//                 Email <span className="text-secondary">*</span>
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 value={form.email}
//                 onChange={onChange}
//                 placeholder="you@email.com"
//                 className={`w-full rounded-xl px-4 py-3 outline-none border transition-colors duration-300
//                   bg-white text-tertiary border-gray-10
//                   dark:bg-[#0F2233] dark:text-gray-100 dark:border-white/10
//                   focus:border-secondary dark:focus:border-secondary
//                   ${errors.email ? "border-red-400 dark:border-red-400/70" : ""}`}
//               />
//               {errors.email ? (
//                 <p className="mt-1 text-xs text-red-600 dark:text-red-200">
//                   {errors.email}
//                 </p>
//               ) : null}
//             </div>

//             {/* Subject */}
//             <div>
//               <label
//                 htmlFor="subject"
//                 className="block mb-1 text-sm font-semibold text-tertiary dark:text-gray-100"
//               >
//                 Subject <span className="text-secondary">*</span>
//               </label>
//               <input
//                 id="subject"
//                 name="subject"
//                 value={form.subject}
//                 onChange={onChange}
//                 placeholder="How can we help?"
//                 className={`w-full rounded-xl px-4 py-3 outline-none border transition-colors duration-300
//                   bg-white text-tertiary border-gray-10
//                   dark:bg-[#0F2233] dark:text-gray-100 dark:border-white/10
//                   focus:border-secondary dark:focus:border-secondary
//                   ${errors.subject ? "border-red-400 dark:border-red-400/70" : ""}`}
//               />
//               {errors.subject ? (
//                 <p className="mt-1 text-xs text-red-600 dark:text-red-200">
//                   {errors.subject}
//                 </p>
//               ) : null}
//             </div>

//             {/* Message */}
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block mb-1 text-sm font-semibold text-tertiary dark:text-gray-100"
//               >
//                 Message <span className="text-secondary">*</span>
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={form.message}
//                 onChange={onChange}
//                 placeholder="Write your message..."
//                 rows={5}
//                 className={`w-full rounded-xl px-4 py-3 outline-none border transition-colors duration-300 resize-none
//                   bg-white text-tertiary border-gray-10
//                   dark:bg-[#0F2233] dark:text-gray-100 dark:border-white/10
//                   focus:border-secondary dark:focus:border-secondary
//                   ${errors.message ? "border-red-400 dark:border-red-400/70" : ""}`}
//               />
//               {errors.message ? (
//                 <p className="mt-1 text-xs text-red-600 dark:text-red-200">
//                   {errors.message}
//                 </p>
//               ) : null}
//             </div>

//             {/* Actions */}
//             <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`btn-secondary w-full sm:w-auto flexCenter gap-2 ${
//                   loading ? "opacity-70 cursor-not-allowed" : ""
//                 }`}
//               >
//                 {loading ? (
//                   <>
//                     <span className="inline-block w-4 h-4 border-2 rounded-full border-white/60 border-t-white animate-spin" />
//                     Sending...
//                   </>
//                 ) : (
//                   "Send Message"
//                 )}
//               </button>

//               <p className="text-xs text-gray-30 dark:text-gray-300">
//                 By sending, you agree to be contacted about your request.
//               </p>
//             </div>
//           </form>
//         </div>

//         {/* Info Card */}
//         <aside className="rounded-2xl bg-white dark:bg-[#0F2233] border border-gray-10/60 dark:border-white/10 shadows p-5 md:p-7 transition-colors duration-300">
//           <h3 className="mb-3 h4 text-tertiary dark:text-white">Quick Info</h3>

//           <div className="space-y-4">
//             <div className="p-4 border rounded-xl bg-primary/40 dark:bg-white/5 border-gray-10/50 dark:border-white/10">
//               <p className="mb-1 text-sm font-semibold text-tertiary dark:text-gray-100">
//                 Support Email
//               </p>
//               <p className="text-sm dark:text-gray-200">info@outfiro.com</p>
//             </div>

//             <div className="p-4 border rounded-xl bg-primary/40 dark:bg-white/5 border-gray-10/50 dark:border-white/10">
//               <p className="mb-1 text-sm font-semibold text-tertiary dark:text-gray-100">
//                 Office Hours
//               </p>
//               <p className="text-sm dark:text-gray-200">Sat–Thu: 10am – 7pm</p>
//             </div>

//             <div className="p-4 border rounded-xl bg-primary/40 dark:bg-white/5 border-gray-10/50 dark:border-white/10">
//               <p className="mb-1 text-sm font-semibold text-tertiary dark:text-gray-100">
//                 Location
//               </p>
//               <p className="text-sm dark:text-gray-200">
//                 Dhaka, Bangladesh (Online Store)
//               </p>
//             </div>

//             <div className="p-4 border rounded-xl bg-primary/40 dark:bg-white/5 border-gray-10/50 dark:border-white/10">
//               <p className="mb-1 text-sm font-semibold text-tertiary dark:text-gray-100">
//                 Response Time
//               </p>
//               <p className="text-sm dark:text-gray-200">
//                 Usually within 24–48 hours
//               </p>
//             </div>
//           </div>

//           {/* Small CTA */}
//           <div className="p-4 mt-6 border rounded-xl border-secondary/30 bg-secondary/10 dark:bg-secondary/10">
//             <p className="mb-1 text-sm font-semibold text-tertiary dark:text-gray-100">
//               Order Help
//             </p>
//             <p className="text-sm dark:text-gray-200">
//               Include your order ID in the subject for faster support.
//             </p>
//           </div>
//         </aside>
//       </div>

//       {/* Footer Section */}
//      <Footer/>
//     </div>
//   );
// };

// export default Contact;

// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Contact


import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import { FaEnvelope, FaLocationDot, FaPhone, FaClock } from 'react-icons/fa6'
import Footer from '../components/Footer'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your submission logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='mb-16 bg-primary'>
        <div className='py-10 max-padd-container'>
          
          <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20 mb-16 rounded-2xl'>

            {/* Left Side - Info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='flex flex-col items-start justify-between gap-10'
            >
              <Title
                title1={'Get In'}
                title2={'Touch'}
                title1Styles={'pb-10'}
                paraStyles={'!block'}
              />

              <div className='flex flex-col w-full gap-6'>
                {/* Contact Info Cards */}
                <motion.div whileHover={{ scale: 1.02 }} className='flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm'>
                  <div className='p-3 rounded-full bg-secondary/10 text-secondary'>
                    <FaEnvelope />
                  </div>
                  <div>
                    <h5 className='bold-14'>Email Us</h5>
                    <p className='text-sm text-gray-500'>info@outfiro.com</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className='flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm'>
                  <div className='p-3 rounded-full bg-secondary/10 text-secondary'>
                    <FaPhone />
                  </div>
                  <div>
                    <h5 className='bold-14'>Call Us</h5>
                    <p className='text-sm text-gray-500'>+880 123 456 789</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className='flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm'>
                  <div className='p-3 rounded-full bg-secondary/10 text-secondary'>
                    <FaLocationDot />
                  </div>
                  <div>
                    <h5 className='bold-14'>Office Location</h5>
                    <p className='text-sm text-gray-500'>Dhaka, Bangladesh</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className='flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm'>
                  <div className='p-3 rounded-full bg-secondary/10 text-secondary'>
                    <FaClock />
                  </div>
                  <div>
                    <h5 className='bold-14'>Support Hours</h5>
                    <p className='text-sm text-gray-500'>Sat - Thu: 10am - 7pm</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='p-8 bg-white shadow-sm rounded-2xl'
            >
              <h4 className='mb-6 h4'>Send us a Message</h4>
              <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Full Name" 
                    onChange={handleChange}
                    className='w-full px-4 py-3 text-sm border-none rounded-lg outline-none bg-primary'
                    required
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    onChange={handleChange}
                    className='w-full px-4 py-3 text-sm border-none rounded-lg outline-none bg-primary'
                    required
                  />
                </div>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  onChange={handleChange}
                  className='w-full px-4 py-3 text-sm border-none rounded-lg outline-none bg-primary'
                  required
                />
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5"
                  onChange={handleChange}
                  className='w-full px-4 py-3 text-sm border-none rounded-lg outline-none resize-none bg-primary'
                  required
                ></textarea>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className='w-full py-3 font-semibold transition-all rounded-lg btn-secondary'
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  )
}

export default Contact