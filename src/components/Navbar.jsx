// // import React from 'react'
// // import { NavLink } from 'react-router-dom'

// // const Navbar = ({ containerStyles }) => {

// //     const navLinks = [
// //         { path: '/', title: 'Home' },
// //         { path: '/collection', title: 'Collection' },
// //         { path: '/testimonials', title: 'Testimonials' },
// //         { path: 'mailto:info@outfiro.com', title: 'Contact' },
// //     ]

// //     return (
// //         <nav className={`${containerStyles}`}>
// //             {navLinks.map((link) => (
// //                 <NavLink
// //                     key={link.title}
// //                     to={link.path}
// //                     className={({ isActive }) => `${isActive ? "active-link" : ""} px-3 py-2 rounded-full`}
// //                 >
// //                     {link.title}
// //                 </NavLink>
// //             ))}
// //         </nav>
// //     )
// // }

// // export default Navbar



// import React, { useState, useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
// import { MdDarkMode, MdLightMode } from "react-icons/md"

// const Navbar = ({ containerStyles }) => {

//     const [darkMode, setDarkMode] = useState(false)

//     useEffect(() => {
//         const savedTheme = localStorage.getItem("theme")
//         if (savedTheme === "dark") {
//             setDarkMode(true)
//             document.documentElement.classList.add("dark")
//         }
//     }, [])

//     const toggleTheme = () => {
//         if (darkMode) {
//             document.documentElement.classList.remove("dark")
//             localStorage.setItem("theme", "light")
//         } else {
//             document.documentElement.classList.add("dark")
//             localStorage.setItem("theme", "dark")
//         }
//         setDarkMode(!darkMode)
//     }

//     const navLinks = [
//         { path: '/', title: 'Home' },
//         { path: '/collection', title: 'Collection' },
//         { path: '/testimonials', title: 'Testimonials' },
//         { path: 'mailto:info@outfiro.com', title: 'Contact' },
//     ]

//     return (
//         <nav className={`${containerStyles} flex items-center gap-2`}>
//             {navLinks.map((link) => (
//                 <NavLink
//                     key={link.title}
//                     to={link.path}
//                     className={({ isActive }) =>
//                         `${isActive ? "active-link" : ""} px-3 py-2 rounded-full`
//                     }
//                 >
//                     {link.title}
//                 </NavLink>
//             ))}

//             <button
//                 onClick={toggleTheme}
//                 className="ml-3 text-xl"
//             >
//                 {darkMode ? <MdLightMode /> : <MdDarkMode />}
//             </button>
//         </nav>
//     )
// }

// export default Navbar


// import React, { useState, useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
// import { MdDarkMode, MdLightMode } from "react-icons/md"

// const Navbar = ({ containerStyles }) => {

//     const [darkMode, setDarkMode] = useState(false)

//     useEffect(() => {
//         const savedTheme = localStorage.getItem("theme")
//         if (savedTheme === "dark") {
//             setDarkMode(true)
//             document.documentElement.classList.add("dark")
//         }
//     }, [])

//     const toggleTheme = () => {
//         if (darkMode) {
//             document.documentElement.classList.remove("dark")
//             localStorage.setItem("theme", "light")
//         } else {
//             document.documentElement.classList.add("dark")
//             localStorage.setItem("theme", "dark")
//         }
//         setDarkMode(!darkMode)
//     }

//     const navLinks = [
//         { path: '/', title: 'Home' },
//         { path: '/collection', title: 'Collection' },
//         { path: '/testimonials', title: 'Testimonials' },
//         { path: '/contact', title: 'Contact' },
//     ]

//     return (
//         <nav
//             className={`
//                 ${containerStyles}
//                 flex items-center gap-2
//                 bg-white
//                 transition-colors duration-300

//                 dark:bg-[#0F2233]
//             `}
//         >
//             {navLinks.map((link) => (
//                 <NavLink
//                     key={link.title}
//                     to={link.path}
//                     className={({ isActive }) =>
//                         `${isActive ? "active-link" : ""} px-3 py-2 rounded-full`
//                     }
//                 >
//                     {link.title}
//                 </NavLink>
//             ))}
//         </nav>
//     )
// }

// export default Navbar


// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { MdDarkMode, MdLightMode } from "react-icons/md";
// import { FaTimes } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = ({ containerStyles }) => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       setDarkMode(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (darkMode) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     }
//     setDarkMode(!darkMode);
//   };

//   const navLinks = [
//     { path: "/", title: "Home" },
//     { path: "/collection", title: "Collection" },
//     { path: "/testimonials", title: "Testimonials" },
//     { path: "/contact", title: "Contact" },
//   ];

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <nav
//         className={`
//           ${containerStyles}
//           hidden xl:flex
//           items-center gap-6
//           px-6 py-2
//           rounded-full
//           bg-white/70
//           backdrop-blur-md
//           shadow-lg
//           transition-all duration-300
//           dark:bg-[#0F2233]/80
//         `}
//       >
//         {navLinks.map((link) => (
//           <NavLink
//             key={link.title}
//             to={link.path}
//             className={({ isActive }) =>
//               `
//               relative px-4 py-2 rounded-full
//               transition-all duration-300
//               hover:bg-secondary/20
//               ${isActive ? "bg-secondary text-white shadow-md" : ""}
//               `
//             }
//           >
//             {link.title}
//           </NavLink>
//         ))}

//         {/* Dark Mode */}
//         <button
//           onClick={toggleTheme}
//           className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#13293D] hover:scale-110 transition-all duration-300"
//         >
//           {darkMode ? <MdLightMode /> : <MdDarkMode />}
//         </button>
//       </nav>

//       {/* Mobile Toggle Button */}
//       <div className="xl:hidden">
//         <button
//           onClick={() => setMenuOpen(true)}
//           className="px-3 py-2 text-white rounded-md bg-secondary"
//         >
//           Menu
//         </button>
//       </div>

//       {/* Mobile Overlay Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <>
//             {/* Background Blur */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.5 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-40 bg-black"
//               onClick={() => setMenuOpen(false)}
//             />

//             {/* Slide Panel */}
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-[#0F2233] shadow-2xl z-50 p-6 flex flex-col"
//             >
//               {/* Cross Button */}
//               <div className="flex justify-end mb-8">
//                 <FaTimes
//                   onClick={() => setMenuOpen(false)}
//                   className="text-2xl transition-transform duration-300 cursor-pointer hover:rotate-90"
//                 />
//               </div>

//               {/* Links */}
//               <div className="flex flex-col gap-6">
//                 {navLinks.map((link) => (
//                   <NavLink
//                     key={link.title}
//                     to={link.path}
//                     onClick={() => setMenuOpen(false)}
//                     className={({ isActive }) =>
//                       `
//                       text-lg font-medium
//                       transition-all duration-300
//                       hover:text-secondary
//                       ${isActive ? "text-secondary" : ""}
//                       `
//                     }
//                   >
//                     {link.title}
//                   </NavLink>
//                 ))}
//               </div>

//               {/* Dark Mode Bottom */}
//               <div className="pt-10 mt-auto">
//                 <button
//                   onClick={toggleTheme}
//                   className="flex items-center justify-center w-full gap-2 py-3 text-white transition-all rounded-lg bg-secondary hover:opacity-90"
//                 >
//                   {darkMode ? <MdLightMode /> : <MdDarkMode />}
//                   Toggle Theme
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ containerStyles }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/collection", title: "Collection" },
    { path: "/testimonials", title: "Testimonials" },
    { path: "/contact", title: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`
          ${containerStyles}
          hidden xl:flex
          items-center gap-6
          px-6 py-2
          rounded-full
          bg-white/70
          backdrop-blur-md
          shadow-lg
          transition-all duration-300
          dark:bg-[#0F2233]/80
        `}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.title}
            to={link.path}
            className={({ isActive }) =>
              `
              relative px-4 py-2 rounded-full
              transition-all duration-300
              hover:bg-secondary/20
              ${isActive ? "bg-secondary text-white shadow-md" : ""}
              `
            }
          >
            {link.title}
          </NavLink>
        ))}

        {/* Dark Mode */}
        <button
          onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#13293D] hover:scale-110 transition-all duration-300"
        >
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </nav>

      {/* Mobile Toggle Button (Icon Version) */}
      <div className="xl:hidden">
        <motion.button
          onClick={() => setMenuOpen(true)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="p-2 text-white transition-all duration-300 rounded-md shadow-md bg-secondary"
        >
          <FiMenu className="text-2xl" />
        </motion.button>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-[#0F2233] shadow-2xl z-50 p-6 flex flex-col"
            >
              {/* Cross Button */}
              <div className="flex justify-end mb-8">
                <FaTimes
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl transition-transform duration-300 cursor-pointer hover:rotate-90"
                />
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.title}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `
                      text-lg font-medium
                      transition-all duration-300
                      hover:text-secondary
                      ${isActive ? "text-secondary" : ""}
                      `
                    }
                  >
                    {link.title}
                  </NavLink>
                ))}
              </div>

              {/* Dark Mode Bottom */}
              <div className="pt-10 mt-auto">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-full gap-2 py-3 text-white transition-all rounded-lg bg-secondary hover:opacity-90"
                >
                  {darkMode ? <MdLightMode /> : <MdDarkMode />}
                  Toggle Theme
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;