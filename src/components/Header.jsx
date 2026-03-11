// // // // import React, { useContext, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import Navbar from "./Navbar";
// // // // import { TbBasket, TbUserCircle } from "react-icons/tb";
// // // // import { RiUserLine } from "react-icons/ri";
// // // // import { ShopContext } from "../context/ShopContext";

// // // // const Header = () => {
// // // //   const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
// // // //   const [menuOpened, setMenuOpened] = useState(false);

// // // //   const logout = () => {
// // // //     localStorage.removeItem("token");
// // // //     setToken("");
// // // //     navigate("/login");
// // // //   };

// // // //   return (
// // // //     <motion.header
// // // //       initial={{ y: -60, opacity: 0 }}
// // // //       animate={{ y: 0, opacity: 1 }}
// // // //       transition={{ duration: 0.6, ease: "easeOut" }}
// // // //       className="w-full max-padd-container"
// // // //     >
// // // //       <div className="py-3 flexBetween">
// // // //         {/* Logo Left side */}
// // // //         <Link to={"/"} className="flex flex-1">
// // // //           <motion.div
// // // //             whileHover={{ scale: 1.05 }}
// // // //             transition={{ type: "spring", stiffness: 250 }}
// // // //             className="bold-32"
// // // //           >
// // // //             Outfir<span className="text-secondary">o</span>
// // // //           </motion.div>
// // // //         </Link>

// // // //         {/* Navbar */}
// // // //         <div className="flex-1">
// // // //           <Navbar
// // // //             containerStyles="hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1"
// // // //           />
// // // //         </div>

// // // //         {/* Buttons Right side */}
// // // //         <div className="flex items-center justify-end flex-1 gap-x-2 xs:gap-x-8">

// // // //           {/* Cart */}
// // // //           <Link to={"/cart"} className="relative flex">
// // // //             <motion.div
// // // //               whileHover={{ scale: 1.1 }}
// // // //               transition={{ type: "spring", stiffness: 300 }}
// // // //             >
// // // //               <TbBasket className="text-[27px]" />
// // // //             </motion.div>

// // // //             <motion.span
// // // //               key={getCartCount()}
// // // //               initial={{ scale: 0 }}
// // // //               animate={{ scale: 1 }}
// // // //               transition={{ type: "spring", stiffness: 400 }}
// // // //               className="bg-secondary text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md"
// // // //             >
// // // //               {getCartCount()}
// // // //             </motion.span>
// // // //           </Link>

// // // //           {/* User profile */}
// // // //           <div className="relative group">
// // // //             <div>
// // // //               {token ? (
// // // //                 <motion.div
// // // //                   whileHover={{ scale: 1.1 }}
// // // //                   transition={{ type: "spring", stiffness: 250 }}
// // // //                 >
// // // //                   <TbUserCircle className="text-[29px] cursor-pointer" />
// // // //                 </motion.div>
// // // //               ) : (
// // // //                 <motion.button
// // // //                   onClick={() => navigate("/login")}
// // // //                   whileHover={{ scale: 1.05 }}
// // // //                   whileTap={{ scale: 0.95 }}
// // // //                   transition={{ type: "spring", stiffness: 250 }}
// // // //                   className="btn-light flexCenter gap-x-2"
// // // //                 >
// // // //                   Login
// // // //                   <RiUserLine className="text-xl" />
// // // //                 </motion.button>
// // // //               )}
// // // //             </div>

// // // //             {/* Extended Dropdown */}
// // // //             <AnimatePresence>
// // // //               {token && (
// // // //                 <motion.ul
// // // //                   initial={{ opacity: 0, y: -10 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   exit={{ opacity: 0, y: -10 }}
// // // //                   transition={{ duration: 0.25 }}
// // // //                   className="absolute right-0 z-50 flex-col hidden w-40 p-2 bg-white rounded shadow-md ring-1 ring-slate-900/5 top-7 group-hover:flex regular-14"
// // // //                 >
// // // //                   {/* <motion.li
// // // //                     whileHover={{ x: 5 }}
// // // //                     onClick={() => navigate("/profile")}
// // // //                     className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
// // // //                   >
// // // //                     Profile
// // // //                   </motion.li> */}

// // // //                   <motion.li
// // // //                     whileHover={{ x: 5 }}
// // // //                     onClick={() => navigate("/orders")}
// // // //                     className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
// // // //                   >
// // // //                     My Orders
// // // //                   </motion.li>

// // // //                   <motion.li
// // // //                     whileHover={{ x: 5 }}
// // // //                     onClick={() => navigate("/cart")}
// // // //                     className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
// // // //                   >
// // // //                     My Cart
// // // //                   </motion.li>

// // // //                   <motion.li
// // // //                     whileHover={{ x: 5 }}
// // // //                     onClick={() => navigate("/orders")}
// // // //                     className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
// // // //                   >
// // // //                     Track Orders
// // // //                   </motion.li>

// // // //                   <motion.li
// // // //                     whileHover={{ x: 5 }}
// // // //                     onClick={logout}
// // // //                     className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
// // // //                   >
// // // //                     Logout
// // // //                   </motion.li>
// // // //                 </motion.ul>
// // // //               )}
// // // //             </AnimatePresence>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </motion.header>
// // // //   );
// // // // };

// // // // export default Header;


// // // // import React, { useContext, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import Navbar from "./Navbar";
// // // // import { FaBarsStaggered } from "react-icons/fa6";
// // // // import { FaSearch } from "react-icons/fa";
// // // // import { TbBasket, TbUserCircle } from "react-icons/tb";
// // // // import { RiUserLine } from "react-icons/ri";
// // // // import { ShopContext } from "../context/ShopContext";

// // // // const Header = () => {
// // // //   const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
// // // //   const [menuOpened, setMenuOpened] = useState(false);

// // // //   const toggleMenu = () => setMenuOpened((prev) => !prev);

// // // //   const logout = () => {
// // // //     localStorage.removeItem("token");
// // // //     setToken("");
// // // //     navigate("/login");
// // // //   };

// // // //   return (
// // // //     <motion.header
// // // //       initial={{ y: -60, opacity: 0 }}
// // // //       animate={{ y: 0, opacity: 1 }}
// // // //       transition={{ duration: 0.6, ease: "easeOut" }}
// // // //       className="w-full max-padd-container"
// // // //     >
// // // //       <div className="py-3 flexBetween">
// // // //         {/* Logo Left side */}
// // // //         <Link to={"/"} className="flex flex-1">
// // // //           <motion.div
// // // //             whileHover={{ scale: 1.05 }}
// // // //             transition={{ type: "spring", stiffness: 250 }}
// // // //             className="bold-32"
// // // //           >
// // // //             Outfir<span className="text-secondary">o</span>
// // // //           </motion.div>
// // // //         </Link>

// // // //         {/* Navbar */}
// // // //         <div className="flex-1">
// // // //           <AnimatePresence>
// // // //             {menuOpened && (
// // // //               <motion.div
// // // //                 initial={{ opacity: 0, y: -20, scale: 0.95 }}
// // // //                 animate={{ opacity: 1, y: 0, scale: 1 }}
// // // //                 exit={{ opacity: 0, y: -20, scale: 0.95 }}
// // // //                 transition={{ duration: 0.3 }}
// // // //               >
// // // //                 <Navbar
// // // //                   containerStyles="flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50"
// // // //                 />
// // // //               </motion.div>
// // // //             )}
// // // //           </AnimatePresence>

// // // //           {!menuOpened && (
// // // //             <Navbar
// // // //               containerStyles="hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1"
// // // //             />
// // // //           )}
// // // //         </div>

// // // //         {/* Buttons Right side */}
// // // //         <div className="flex items-center justify-end flex-1 gap-x-2 xs:gap-x-8">
// // // //           {/* menu toggle */}
// // // //           <motion.div
// // // //             whileTap={{ scale: 0.9 }}
// // // //             className="xl:hidden"
// // // //           >
// // // //             <FaBarsStaggered
// // // //               onClick={toggleMenu}
// // // //               className="text-xl cursor-pointer"
// // // //             />
// // // //           </motion.div>

// // // //           {/* search icon */}
// // // //           <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
// // // //             <FaSearch className="text-lg cursor-pointer" />
// // // //           </motion.div>

// // // //           {/* Cart */}
// // // //           <Link to={"/cart"} className="relative flex">
// // // //             <motion.div
// // // //               whileHover={{ scale: 1.1 }}
// // // //               transition={{ type: "spring", stiffness: 300 }}
// // // //             >
// // // //               <TbBasket className="text-[27px]" />
// // // //             </motion.div>

// // // //             <motion.span
// // // //               key={getCartCount()}
// // // //               initial={{ scale: 0 }}
// // // //               animate={{ scale: 1 }}
// // // //               transition={{ type: "spring", stiffness: 400 }}
// // // //               className="bg-secondary text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md"
// // // //             >
// // // //               {getCartCount()}
// // // //             </motion.span>
// // // //           </Link>

// // // //           {/* User profile */}
// // // //           <div className="relative group">
// // // //             <div>
// // // //               {token ? (
// // // //                 <motion.div
// // // //                   whileHover={{ scale: 1.1 }}
// // // //                   transition={{ type: "spring", stiffness: 250 }}
// // // //                 >
// // // //                   <TbUserCircle className="text-[29px] cursor-pointer" />
// // // //                 </motion.div>
// // // //               ) : (
// // // //                 <motion.button
// // // //                   onClick={() => navigate("/login")}
// // // //                   whileHover={{ scale: 1.05 }}
// // // //                   whileTap={{ scale: 0.95 }}
// // // //                   transition={{ type: "spring", stiffness: 250 }}
// // // //                   className="btn-light flexCenter gap-x-2"
// // // //                 >
// // // //                   Login
// // // //                   <RiUserLine className="text-xl" />
// // // //                 </motion.button>
// // // //               )}
// // // //             </div>

// // // //             {/* Dropdown */}
// // // //             <AnimatePresence>
// // // //               {token && (
// // // //                 <motion.ul
// // // //                   initial={{ opacity: 0, y: -10 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   exit={{ opacity: 0, y: -10 }}
// // // //                   transition={{ duration: 0.25 }}
// // // //                   className="absolute right-0 z-50 flex-col hidden w-32 p-2 bg-white rounded shadow-md ring-1 ring-slate-900/5 top-7 group-hover:flex regular-14"
// // // //                 >
// // // //                   <motion.li
// // // //                     whileHover={{ x: 5 }}
// // // //                     onClick={() => navigate("/orders")}
// // // //                     className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
// // // //                   >
// // // //                     Orders
// // // //                   </motion.li>
// // // //                   <motion.li
// // // //                     whileHover={{ x: 5 }}
// // // //                     onClick={logout}
// // // //                     className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
// // // //                   >
// // // //                     Logout
// // // //                   </motion.li>
// // // //                 </motion.ul>
// // // //               )}
// // // //             </AnimatePresence>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </motion.header>
// // // //   );
// // // // };

// // // // export default Header;


// // // import React, { useContext, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import Navbar from "./Navbar";
// // // import { FaBarsStaggered } from "react-icons/fa6";
// // // import { FaSearch } from "react-icons/fa";
// // // import { TbBasket, TbUserCircle } from "react-icons/tb";
// // // import { RiUserLine } from "react-icons/ri";
// // // import { IoClose } from "react-icons/io5";
// // // import { ShopContext } from "../context/ShopContext";

// // // const Header = () => {
// // //   const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
// // //   const [menuOpened, setMenuOpened] = useState(false);

// // //   const toggleMenu = () => setMenuOpened((prev) => !prev);

// // //   const logout = () => {
// // //     localStorage.removeItem("token");
// // //     setToken("");
// // //     navigate("/login");
// // //   };

// // //   return (
// // //     <motion.header
// // //       initial={{ y: -60, opacity: 0 }}
// // //       animate={{ y: 0, opacity: 1 }}
// // //       transition={{ duration: 0.6, ease: "easeOut" }}
// // //       className="w-full max-padd-container"
// // //     >
// // //       <div className="py-3 flexBetween">

// // //         {/* Logo */}
// // //         <Link to={"/"} className="flex flex-1">
// // //           <motion.div
// // //             whileHover={{ scale: 1.05 }}
// // //             transition={{ type: "spring", stiffness: 250 }}
// // //             className="bold-32"
// // //           >
// // //             Outfir<span className="text-secondary">o</span>
// // //           </motion.div>
// // //         </Link>

// // //         {/* Navbar */}
// // //         <div className="flex-1">

// // //           <AnimatePresence>
// // //             {menuOpened && (
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: -30, scale: 0.95 }}
// // //                 animate={{ opacity: 1, y: 0, scale: 1 }}
// // //                 exit={{ opacity: 0, y: -30, scale: 0.95 }}
// // //                 transition={{ duration: 0.35, ease: "easeOut" }}
// // //                 className="fixed z-50 w-56 p-5 bg-white shadow-xl top-16 right-6 rounded-xl ring-1 ring-slate-900/5 backdrop-blur-sm"
// // //               >

// // //                 {/* Cross Button */}
// // //                 <div className="flex justify-end mb-3">
// // //                   <motion.div
// // //                     whileHover={{ rotate: 90, scale: 1.1 }}
// // //                     whileTap={{ scale: 0.9 }}
// // //                     className="cursor-pointer"
// // //                   >
// // //                     <IoClose
// // //                       className="text-2xl text-gray-600"
// // //                       onClick={() => setMenuOpened(false)}
// // //                     />
// // //                   </motion.div>
// // //                 </div>

// // //                 <Navbar
// // //                   containerStyles="flex items-start flex-col gap-y-8"
// // //                 />

// // //               </motion.div>
// // //             )}
// // //           </AnimatePresence>

// // //           {!menuOpened && (
// // //             <Navbar
// // //               containerStyles="hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1"
// // //             />
// // //           )}
// // //         </div>

// // //         {/* Right Side */}
// // //         <div className="flex items-center justify-end flex-1 gap-x-2 xs:gap-x-8">

// // //           {/* menu toggle */}
// // //           <motion.div whileTap={{ scale: 0.9 }} className="xl:hidden">
// // //             <FaBarsStaggered
// // //               onClick={toggleMenu}
// // //               className="text-xl cursor-pointer"
// // //             />
// // //           </motion.div>

// // //           {/* search */}
// // //           <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
// // //             <FaSearch className="text-lg cursor-pointer" />
// // //           </motion.div>

// // //           {/* Cart */}
// // //           <Link to={"/cart"} className="relative flex">
// // //             <motion.div
// // //               whileHover={{ scale: 1.1 }}
// // //               transition={{ type: "spring", stiffness: 300 }}
// // //             >
// // //               <TbBasket className="text-[27px]" />
// // //             </motion.div>

// // //             <motion.span
// // //               key={getCartCount()}
// // //               initial={{ scale: 0 }}
// // //               animate={{ scale: 1 }}
// // //               transition={{ type: "spring", stiffness: 400 }}
// // //               className="bg-secondary text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md"
// // //             >
// // //               {getCartCount()}
// // //             </motion.span>
// // //           </Link>

// // //           {/* User */}
// // //           <div className="relative group">
// // //             <div>
// // //               {token ? (
// // //                 <motion.div
// // //                   whileHover={{ scale: 1.1 }}
// // //                   transition={{ type: "spring", stiffness: 250 }}
// // //                 >
// // //                   <TbUserCircle className="text-[29px] cursor-pointer" />
// // //                 </motion.div>
// // //               ) : (
// // //                 <motion.button
// // //                   onClick={() => navigate("/login")}
// // //                   whileHover={{ scale: 1.05 }}
// // //                   whileTap={{ scale: 0.95 }}
// // //                   transition={{ type: "spring", stiffness: 250 }}
// // //                   className="btn-light flexCenter gap-x-2"
// // //                 >
// // //                   Login
// // //                   <RiUserLine className="text-xl" />
// // //                 </motion.button>
// // //               )}
// // //             </div>

// // //             {/* Dropdown */}
// // //             <AnimatePresence>
// // //               {token && (
// // //                 <motion.ul
// // //                   initial={{ opacity: 0, y: -10 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   exit={{ opacity: 0, y: -10 }}
// // //                   transition={{ duration: 0.25 }}
// // //                   className="absolute right-0 z-50 flex-col hidden w-32 p-2 bg-white rounded shadow-md ring-1 ring-slate-900/5 top-7 group-hover:flex regular-14"
// // //                 >
// // //                   <motion.li
// // //                     whileHover={{ x: 5 }}
// // //                     onClick={() => navigate("/orders")}
// // //                     className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
// // //                   >
// // //                     Orders
// // //                   </motion.li>

// // //                   <motion.li
// // //                     whileHover={{ x: 5 }}
// // //                     onClick={logout}
// // //                     className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
// // //                   >
// // //                     Logout
// // //                   </motion.li>
// // //                 </motion.ul>
// // //               )}
// // //             </AnimatePresence>

// // //           </div>
// // //         </div>
// // //       </div>
// // //     </motion.header>
// // //   );
// // // };

// // // export default Header;


// // import React, { useContext, useState } from "react";
// // import { Link } from "react-router-dom";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Navbar from "./Navbar";
// // import { FaBarsStaggered } from "react-icons/fa6";
// // import { FaSearch } from "react-icons/fa";
// // import { TbBasket, TbUserCircle } from "react-icons/tb";
// // import { RiUserLine } from "react-icons/ri";
// // import { IoClose } from "react-icons/io5";
// // import { ShopContext } from "../context/ShopContext";

// // const Header = () => {
// //   const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
// //   const [menuOpened, setMenuOpened] = useState(false);

// //   const toggleMenu = () => setMenuOpened((prev) => !prev);

// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     setToken("");
// //     navigate("/login");
// //   };

// //   return (
// //     <motion.header
// //       initial={{ y: -60, opacity: 0 }}
// //       animate={{ y: 0, opacity: 1 }}
// //       transition={{ duration: 0.6, ease: "easeOut" }}
// //       className="w-full max-padd-container"
// //     >
// //       <div className="py-3 flexBetween">
        
// //         {/* Logo */}
// //         <Link to={"/"} className="flex flex-1">
// //           <motion.div
// //             whileHover={{ scale: 1.05 }}
// //             transition={{ type: "spring", stiffness: 250 }}
// //             className="bold-32"
// //           >
// //             Outfir<span className="text-secondary">o</span>
// //           </motion.div>
// //         </Link>

// //         {/* Navbar */}
// //         <div className="flex-1">

// //           <AnimatePresence>
// //             {menuOpened && (
// //               <>
// //                 {/* overlay */}
// //                 <motion.div
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 0.4 }}
// //                   exit={{ opacity: 0 }}
// //                   transition={{ duration: 0.3 }}
// //                   className="fixed inset-0 z-40 bg-black xl:hidden"
// //                   onClick={() => setMenuOpened(false)}
// //                 />

// //                 {/* left slide menu */}
// //                 <motion.div
// //                   initial={{ x: "-100%" }}
// //                   animate={{ x: 0 }}
// //                   exit={{ x: "-100%" }}
// //                   transition={{ type: "spring", stiffness: 120, damping: 20 }}
// //                   className="fixed top-0 left-0 z-50 w-1/2 h-screen p-6 bg-white shadow-xl xl:hidden"
// //                 >
                  
// //                   {/* cross button */}
// //                   <div className="flex justify-end mb-6">
// //                     <motion.div
// //                       whileHover={{ rotate: 90 }}
// //                       whileTap={{ scale: 0.9 }}
// //                       className="cursor-pointer"
// //                     >
// //                       <IoClose
// //                         className="text-3xl"
// //                         onClick={() => setMenuOpened(false)}
// //                       />
// //                     </motion.div>
// //                   </div>

// //                   <Navbar
// //                     containerStyles="flex flex-col gap-y-8"
// //                   />
// //                 </motion.div>
// //               </>
// //             )}
// //           </AnimatePresence>

// //           {!menuOpened && (
// //             <Navbar
// //               containerStyles="hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1"
// //             />
// //           )}

// //         </div>

// //         {/* Right Side */}
// //         <div className="flex items-center justify-end flex-1 gap-x-2 xs:gap-x-8">

// //           {/* menu toggle */}
// //           <motion.div whileTap={{ scale: 0.9 }} className="xl:hidden">
// //             <FaBarsStaggered
// //               onClick={toggleMenu}
// //               className="text-xl cursor-pointer"
// //             />
// //           </motion.div>

// //           {/* search */}
// //           <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
// //             <FaSearch className="text-lg cursor-pointer" />
// //           </motion.div>

// //           {/* Cart */}
// //           <Link to={"/cart"} className="relative flex">
// //             <motion.div
// //               whileHover={{ scale: 1.1 }}
// //               transition={{ type: "spring", stiffness: 300 }}
// //             >
// //               <TbBasket className="text-[27px]" />
// //             </motion.div>

// //             <motion.span
// //               key={getCartCount()}
// //               initial={{ scale: 0 }}
// //               animate={{ scale: 1 }}
// //               transition={{ type: "spring", stiffness: 400 }}
// //               className="bg-secondary text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md"
// //             >
// //               {getCartCount()}
// //             </motion.span>
// //           </Link>

// //           {/* User */}
// //           <div className="relative group">
// //             <div>
// //               {token ? (
// //                 <motion.div
// //                   whileHover={{ scale: 1.1 }}
// //                   transition={{ type: "spring", stiffness: 250 }}
// //                 >
// //                   <TbUserCircle className="text-[29px] cursor-pointer" />
// //                 </motion.div>
// //               ) : (
// //                 <motion.button
// //                   onClick={() => navigate("/login")}
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   transition={{ type: "spring", stiffness: 250 }}
// //                   className="btn-light flexCenter gap-x-2"
// //                 >
// //                   Login
// //                   <RiUserLine className="text-xl" />
// //                 </motion.button>
// //               )}
// //             </div>

// //             {/* Dropdown */}
// //             <AnimatePresence>
// //               {token && (
// //                 <motion.ul
// //                   initial={{ opacity: 0, y: -10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: -10 }}
// //                   transition={{ duration: 0.25 }}
// //                   className="absolute right-0 z-50 flex-col hidden w-32 p-2 bg-white rounded shadow-md ring-1 ring-slate-900/5 top-7 group-hover:flex regular-14"
// //                 >
// //                   <motion.li
// //                     whileHover={{ x: 5 }}
// //                     onClick={() => navigate("/orders")}
// //                     className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
// //                   >
// //                     Orders
// //                   </motion.li>

// //                   <motion.li
// //                     whileHover={{ x: 5 }}
// //                     onClick={logout}
// //                     className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
// //                   >
// //                     Logout
// //                   </motion.li>
// //                 </motion.ul>
// //               )}
// //             </AnimatePresence>

// //           </div>
// //         </div>
// //       </div>
// //     </motion.header>
// //   );
// // };

// // export default Header;

// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "./Navbar";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";
// import { TbBasket, TbUserCircle } from "react-icons/tb";
// import { RiUserLine } from "react-icons/ri";
// import { IoClose } from "react-icons/io5";
// import { ShopContext } from "../context/ShopContext";

// const Header = () => {
//   const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
//   const [menuOpened, setMenuOpened] = useState(false);

//   const toggleMenu = () => setMenuOpened((prev) => !prev);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/login");
//   };

//   return (
//     <motion.header
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="w-full max-padd-container"
//     >
//       <div className="py-3 flexBetween">
        
//         {/* Logo */}
//         <Link to={"/"} className="flex flex-1">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 250 }}
//             className="bold-32"
//           >
//             Outfir<span className="text-secondary">o</span>
//           </motion.div>
//         </Link>

//         {/* Navbar */}
//         <div className="flex-1">

//           <AnimatePresence>
//             {menuOpened && (
//               <>
//                 {/* overlay */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 0.45 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
//                   onClick={() => setMenuOpened(false)}
//                 />

//                 {/* drawer */}
//                 <motion.div
//                   initial={{ x: "-100%" }}
//                   animate={{ x: 0 }}
//                   exit={{ x: "-100%" }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 140,
//                     damping: 18
//                   }}
//                   className="fixed top-0 left-0 z-50 w-1/2 h-screen p-6 border-r border-gray-200 shadow-2xl bg-white/90 backdrop-blur-xl xl:hidden"
//                 >

//                   {/* cross */}
//                   <div className="flex items-center justify-between mb-8">
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="bold-22"
//                     >
//                       Menu
//                     </motion.div>

//                     <motion.div
//                       whileHover={{ rotate: 90, scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="cursor-pointer"
//                       onClick={() => setMenuOpened(false)}
//                     >
//                       <IoClose className="text-3xl" />
//                     </motion.div>
//                   </div>

//                   {/* navbar items */}
//                   <motion.div
//                     initial="hidden"
//                     animate="show"
//                     variants={{
//                       hidden: {},
//                       show: {
//                         transition: {
//                           staggerChildren: 0.08
//                         }
//                       }
//                     }}
//                   >
//                     <Navbar
//                       containerStyles="flex flex-col gap-y-8 text-lg"
//                     />
//                   </motion.div>

//                 </motion.div>
//               </>
//             )}
//           </AnimatePresence>

//           {!menuOpened && (
//             <Navbar
//               containerStyles="hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1"
//             />
//           )}

//         </div>

//         {/* Right Side */}
//         <div className="flex items-center justify-end flex-1 gap-x-2 xs:gap-x-8">

//           {/* menu toggle */}
//           <motion.div whileTap={{ scale: 0.9 }} className="xl:hidden">
//             <FaBarsStaggered
//               onClick={toggleMenu}
//               className="text-xl cursor-pointer"
//             />
//           </motion.div>

//           {/* search */}
//           <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
//             <FaSearch className="text-lg cursor-pointer" />
//           </motion.div>

//           {/* Cart */}
//           <Link to={"/cart"} className="relative flex">
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <TbBasket className="text-[27px]" />
//             </motion.div>

//             <motion.span
//               key={getCartCount()}
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 400 }}
//               className="bg-secondary text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md"
//             >
//               {getCartCount()}
//             </motion.span>
//           </Link>

//           {/* User */}
//           <div className="relative group">
//             <div>
//               {token ? (
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 250 }}
//                 >
//                   <TbUserCircle className="text-[29px] cursor-pointer" />
//                 </motion.div>
//               ) : (
//                 <motion.button
//                   onClick={() => navigate("/login")}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 250 }}
//                   className="btn-light flexCenter gap-x-2"
//                 >
//                   Login
//                   <RiUserLine className="text-xl" />
//                 </motion.button>
//               )}
//             </div>

//             {/* Dropdown */}
//             <AnimatePresence>
//               {token && (
//                 <motion.ul
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.25 }}
//                   className="absolute right-0 z-50 flex-col hidden w-32 p-2 bg-white rounded shadow-md ring-1 ring-slate-900/5 top-7 group-hover:flex regular-14"
//                 >
//                   <motion.li
//                     whileHover={{ x: 5 }}
//                     onClick={() => navigate("/orders")}
//                     className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
//                   >
//                     Orders
//                   </motion.li>

//                   <motion.li
//                     whileHover={{ x: 5 }}
//                     onClick={logout}
//                     className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
//                   >
//                     Logout
//                   </motion.li>
//                 </motion.ul>
//               )}
//             </AnimatePresence>

//           </div>
//         </div>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;

// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "./Navbar";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";
// import { TbBasket, TbUserCircle } from "react-icons/tb";
// import { RiUserLine } from "react-icons/ri";
// import { IoClose } from "react-icons/io5";
// import { ShopContext } from "../context/ShopContext";

// const Header = () => {
//   const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
//   const [menuOpened, setMenuOpened] = useState(false);

//   const toggleMenu = () => setMenuOpened((prev) => !prev);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/login");
//   };

//   return (
//     <motion.header
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="w-full bg-white max-padd-container dark:bg-gray-900"
//     >
//       <div className="py-3 flexBetween">
        
//         {/* Logo */}
//         <Link to={"/"} className="flex flex-1">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 250 }}
//             className="bold-32 text-tertiary dark:text-white"
//           >
//             Outfir<span className="text-secondary">o</span>
//           </motion.div>
//         </Link>

//         {/* Navbar */}
//         <div className="flex-1">

//           <AnimatePresence>
//             {menuOpened && (
//               <>
//                 {/* overlay */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 0.45 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
//                   onClick={() => setMenuOpened(false)}
//                 />

//                 {/* drawer */}
//                 <motion.div
//                   initial={{ x: "-100%" }}
//                   animate={{ x: 0 }}
//                   exit={{ x: "-100%" }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 140,
//                     damping: 18
//                   }}
//                   className="fixed top-0 left-0 z-50 w-1/2 h-screen p-6 border-r border-gray-200 shadow-2xl dark:border-gray-700 bg-white/90 dark:bg-gray-900 backdrop-blur-xl xl:hidden"
//                 >

//                   {/* cross */}
//                   <div className="flex items-center justify-between mb-8">
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="bold-22 text-tertiary dark:text-white"
//                     >
//                       Menu
//                     </motion.div>

//                     <motion.div
//                       whileHover={{ rotate: 90, scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="cursor-pointer"
//                       onClick={() => setMenuOpened(false)}
//                     >
//                       <IoClose className="text-3xl dark:text-white" />
//                     </motion.div>
//                   </div>

//                   {/* navbar items */}
//                   <motion.div
//                     initial="hidden"
//                     animate="show"
//                     variants={{
//                       hidden: {},
//                       show: {
//                         transition: {
//                           staggerChildren: 0.08
//                         }
//                       }
//                     }}
//                   >
//                     <Navbar
//                       containerStyles="flex flex-col gap-y-8 text-lg"
//                     />
//                   </motion.div>

//                 </motion.div>
//               </>
//             )}
//           </AnimatePresence>

//           {!menuOpened && (
//             <Navbar
//               containerStyles="hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 dark:ring-gray-700 rounded-full p-1"
//             />
//           )}

//         </div>

//         {/* Right Side */}
//         <div className="flex items-center justify-end flex-1 gap-x-2 xs:gap-x-8">

//           {/* menu toggle */}
//           <motion.div whileTap={{ scale: 0.9 }} className="xl:hidden">
//             <FaBarsStaggered
//               onClick={toggleMenu}
//               className="text-xl cursor-pointer dark:text-white"
//             />
//           </motion.div>

//           {/* search */}
//           <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
//             <FaSearch className="text-lg cursor-pointer dark:text-white" />
//           </motion.div>

//           {/* Cart */}
//           <Link to={"/cart"} className="relative flex">
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <TbBasket className="text-[27px] dark:text-white" />
//             </motion.div>

//             <motion.span
//               key={getCartCount()}
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 400 }}
//               className="bg-secondary text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md"
//             >
//               {getCartCount()}
//             </motion.span>
//           </Link>

//           {/* User */}
//           <div className="relative group">
//             <div>
//               {token ? (
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 250 }}
//                 >
//                   <TbUserCircle className="text-[29px] cursor-pointer dark:text-white" />
//                 </motion.div>
//               ) : (
//                 <motion.button
//                   onClick={() => navigate("/login")}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 250 }}
//                   className="btn-light flexCenter gap-x-2"
//                 >
//                   Login
//                   <RiUserLine className="text-xl" />
//                 </motion.button>
//               )}
//             </div>

//             {/* Dropdown */}
//             <AnimatePresence>
//               {token && (
//                 <motion.ul
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.25 }}
//                   className="absolute right-0 z-50 flex-col hidden w-32 p-2 bg-white rounded shadow-md dark:bg-gray-800 ring-1 ring-slate-900/5 dark:ring-gray-700 top-7 group-hover:flex regular-14"
//                 >
//                   <motion.li
//                     whileHover={{ x: 5 }}
//                     onClick={() => navigate("/orders")}
//                     className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary"
//                   >
//                     Orders
//                   </motion.li>

//                   <motion.li
//                     whileHover={{ x: 5 }}
//                     onClick={logout}
//                     className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary"
//                   >
//                     Logout
//                   </motion.li>
//                 </motion.ul>
//               )}
//             </AnimatePresence>

//           </div>
//         </div>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;


// import React, { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "./Navbar";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { TbBasket, TbUserCircle } from "react-icons/tb";
// import { RiUserLine } from "react-icons/ri";
// import { IoClose } from "react-icons/io5";
// import { MdDarkMode, MdLightMode } from "react-icons/md";
// import { ShopContext } from "../context/ShopContext";

// const Header = () => {
//   const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
//   const [menuOpened, setMenuOpened] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleMenu = () => setMenuOpened((prev) => !prev);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/login");
//   };

//   /* Dark Mode Load */
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//       setDarkMode(true);
//     }
//   }, []);

//   /* Toggle Theme */
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

//   return (
//     <motion.header
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="w-full bg-white max-padd-container dark:bg-gray-900"
//     >
//       <div className="py-3 flexBetween">
        
//         {/* Logo */}
//         <Link to={"/"} className="flex flex-1">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 250 }}
//             className="bold-32 text-tertiary dark:text-white"
//           >
//             Outfir<span className="text-secondary">o</span>
//           </motion.div>
//         </Link>

//         {/* Navbar */}
//         <div className="flex-1">

//           <AnimatePresence>
//             {menuOpened && (
//               <>
//                 {/* overlay */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 0.45 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
//                   onClick={() => setMenuOpened(false)}
//                 />

//                 {/* drawer */}
//                 <motion.div
//                   initial={{ x: "-100%" }}
//                   animate={{ x: 0 }}
//                   exit={{ x: "-100%" }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 140,
//                     damping: 18
//                   }}
//                   className="fixed top-0 left-0 z-50 w-1/2 h-screen p-6 border-r border-gray-200 shadow-2xl dark:border-gray-700 bg-white/90 dark:bg-gray-900 backdrop-blur-xl xl:hidden"
//                 >

//                   {/* cross */}
//                   <div className="flex items-center justify-between mb-8">
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="bold-22 text-tertiary dark:text-white"
//                     >
//                       Menu
//                     </motion.div>

//                     <motion.div
//                       whileHover={{ rotate: 90, scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="cursor-pointer"
//                       onClick={() => setMenuOpened(false)}
//                     >
//                       <IoClose className="text-3xl dark:text-white" />
//                     </motion.div>
//                   </div>

//                   <motion.div
//                     initial="hidden"
//                     animate="show"
//                     variants={{
//                       hidden: {},
//                       show: {
//                         transition: {
//                           staggerChildren: 0.08
//                         }
//                       }
//                     }}
//                   >
//                     <Navbar
//                       containerStyles="flex flex-col gap-y-8 text-lg"
//                     />
//                   </motion.div>

//                 </motion.div>
//               </>
//             )}
//           </AnimatePresence>

//           {!menuOpened && (
//             <Navbar
//               containerStyles="hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 dark:ring-gray-700 rounded-full p-1"
//             />
//           )}

//         </div>

//         {/* Right Side */}
//         <div className="flex items-center justify-end flex-1 gap-x-2 xs:gap-x-8">

//           {/* menu toggle */}
//           <motion.div whileTap={{ scale: 0.9 }} className="xl:hidden">
//             <FaBarsStaggered
//               onClick={toggleMenu}
//               className="text-xl cursor-pointer dark:text-white"
//             />
//           </motion.div>

//           {/* 🌙 Dark Mode Toggle */}
//           <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
//             <button onClick={toggleTheme} className="text-xl cursor-pointer">
//               {darkMode ? (
//                 <MdLightMode className="dark:text-white" />
//               ) : (
//                 <MdDarkMode className="dark:text-white" />
//               )}
//             </button>
//           </motion.div>

//           {/* Cart */}
//           <Link to={"/cart"} className="relative flex">
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <TbBasket className="text-[27px] dark:text-white" />
//             </motion.div>

//             <motion.span
//               key={getCartCount()}
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 400 }}
//               className="bg-secondary text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md"
//             >
//               {getCartCount()}
//             </motion.span>
//           </Link>

//           {/* User */}
//           <div className="relative group">
//             <div>
//               {token ? (
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 250 }}
//                 >
//                   <TbUserCircle className="text-[29px] cursor-pointer dark:text-white" />
//                 </motion.div>
//               ) : (
//                 <motion.button
//                   onClick={() => navigate("/login")}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 250 }}
//                   className="btn-light flexCenter gap-x-2"
//                 >
//                   Login
//                   <RiUserLine className="text-xl" />
//                 </motion.button>
//               )}
//             </div>

//             {/* Dropdown */}
//             <AnimatePresence>
//               {token && (
//                 <motion.ul
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.25 }}
//                   className="absolute right-0 z-50 flex-col hidden w-32 p-2 bg-white rounded shadow-md dark:bg-gray-800 ring-1 ring-slate-900/5 dark:ring-gray-700 top-7 group-hover:flex regular-14"
//                 >
//                   <motion.li
//                     whileHover={{ x: 5 }}
//                     onClick={() => navigate("/orders")}
//                     className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary"
//                   >
//                     Orders
//                   </motion.li>

//                   <motion.li
//                     whileHover={{ x: 5 }}
//                     onClick={logout}
//                     className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary"
//                   >
//                     Logout
//                   </motion.li>
//                 </motion.ul>
//               )}
//             </AnimatePresence>

//           </div>
//         </div>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;


// import React, { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "./Navbar";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { TbBasket, TbUserCircle } from "react-icons/tb";
// import { RiUserLine } from "react-icons/ri";
// import { IoClose } from "react-icons/io5";
// import { MdDarkMode, MdLightMode } from "react-icons/md";
// import { ShopContext } from "../context/ShopContext";

// const Header = () => {
//   const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
//   const [menuOpened, setMenuOpened] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleMenu = () => setMenuOpened((prev) => !prev);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/login");
//   };

//   /* Load Saved Theme */
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//       setDarkMode(true);
//     }
//   }, []);

//   /* Toggle Theme */
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

//   return (
//     <motion.header
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="w-full bg-white max-padd-container dark:bg-gray-900"
//     >
//       <div className="py-3 flexBetween">

//         {/* Logo */}
//         <Link to={"/"} className="flex flex-1">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 250 }}
//             className="bold-32 text-tertiary dark:text-white"
//           >
//             Outfir<span className="text-secondary">o</span>
//           </motion.div>
//         </Link>

//         {/* Navbar */}
//         <div className="flex-1">

//           <AnimatePresence>
//             {menuOpened && (
//               <>
//                 {/* overlay */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 0.45 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
//                   onClick={() => setMenuOpened(false)}
//                 />

//                 {/* drawer */}
//                 <motion.div
//                   initial={{ x: "-100%" }}
//                   animate={{ x: 0 }}
//                   exit={{ x: "-100%" }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 140,
//                     damping: 18
//                   }}
//                   className="fixed top-0 left-0 z-50 w-1/2 h-screen p-6 border-r border-gray-200 shadow-2xl dark:border-gray-700 bg-white/90 dark:bg-gray-900 backdrop-blur-xl xl:hidden"
//                 >

//                   {/* cross */}
//                   <div className="flex items-center justify-between mb-8">
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="bold-22 text-tertiary dark:text-white"
//                     >
//                       Menu
//                     </motion.div>

//                     <motion.div
//                       whileHover={{ rotate: 90, scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="cursor-pointer"
//                       onClick={() => setMenuOpened(false)}
//                     >
//                       <IoClose className="text-3xl dark:text-white" />
//                     </motion.div>
//                   </div>

//                   <motion.div
//                     initial="hidden"
//                     animate="show"
//                     variants={{
//                       hidden: {},
//                       show: {
//                         transition: {
//                           staggerChildren: 0.08
//                         }
//                       }
//                     }}
//                   >
//                     <Navbar
//                       containerStyles="flex flex-col gap-y-8 text-lg"
//                     />
//                   </motion.div>

//                 </motion.div>
//               </>
//             )}
//           </AnimatePresence>

//           {!menuOpened && (
//             <Navbar
//               containerStyles="hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 dark:ring-gray-700 rounded-full p-1"
//             />
//           )}

//         </div>

//         {/* Right Side */}
//         <div className="flex items-center justify-end flex-1 gap-x-4 xs:gap-x-8">

//           {/* menu toggle */}
//           <motion.div whileTap={{ scale: 0.9 }} className="xl:hidden">
//             <FaBarsStaggered
//               onClick={toggleMenu}
//               className="text-[22px] cursor-pointer dark:text-white"
//             />
//           </motion.div>

//           {/* 🌙 Dark Mode Toggle */}
//           <motion.button
//             onClick={toggleTheme}
//             whileHover={{ scale: 1.15 }}
//             whileTap={{ scale: 0.9 }}
//             className="flex items-center justify-center text-gray-700 transition rounded-full cursor-pointer w-9 h-9 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
//           >
//             {darkMode ? (
//               <MdLightMode size={22} />
//             ) : (
//               <MdDarkMode size={22} />
//             )}
//           </motion.button>

//           {/* Cart */}
//           <Link to={"/cart"} className="relative flex items-center">
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <TbBasket className="text-[26px] dark:text-white" />
//             </motion.div>

//             <motion.span
//               key={getCartCount()}
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 400 }}
//               className="bg-secondary text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md"
//             >
//               {getCartCount()}
//             </motion.span>
//           </Link>

//           {/* User */}
//           <div className="relative group">
//             <div>
//               {token ? (
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 250 }}
//                 >
//                   <TbUserCircle className="text-[28px] cursor-pointer dark:text-white" />
//                 </motion.div>
//               ) : (
//                 <motion.button
//                   onClick={() => navigate("/login")}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 250 }}
//                   className="btn-light flexCenter gap-x-2"
//                 >
//                   Login
//                   <RiUserLine className="text-xl" />
//                 </motion.button>
//               )}
//             </div>

//             {/* Dropdown */}
//             <AnimatePresence>
//               {token && (
//                 <motion.ul
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.25 }}
//                   className="absolute right-0 z-50 flex-col hidden w-32 p-2 bg-white rounded shadow-md dark:bg-gray-800 ring-1 ring-slate-900/5 dark:ring-gray-700 top-7 group-hover:flex regular-14"
//                 >
//                   <motion.li
//                     whileHover={{ x: 5 }}
//                     onClick={() => navigate("/orders")}
//                     className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary"
//                   >
//                     Orders
//                   </motion.li>

//                   <motion.li
//                     whileHover={{ x: 5 }}
//                     onClick={logout}
//                     className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary"
//                   >
//                     Logout
//                   </motion.li>
//                 </motion.ul>
//               )}
//             </AnimatePresence>

//           </div>
//         </div>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;


// import React, { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "./Navbar";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { TbBasket, TbUserCircle } from "react-icons/tb";
// import { RiUserLine } from "react-icons/ri";
// import { IoClose } from "react-icons/io5";
// import { MdDarkMode, MdLightMode } from "react-icons/md";
// import { ShopContext } from "../context/ShopContext";

// const Header = () => {
//   const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
//   const [menuOpened, setMenuOpened] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleMenu = () => setMenuOpened((prev) => !prev);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/login");
//   };

//   /* Load Saved Theme */
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//       setDarkMode(true);
//     }
//   }, []);

//   /* Toggle Theme */
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

//   return (
//     <motion.header
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="w-full bg-white max-padd-container dark:bg-gray-900"
//     >
//       <div className="py-3 flexBetween">

//         {/* Logo */}
//         <Link to={"/"} className="flex flex-1">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 250 }}
//             className="bold-32 text-tertiary dark:text-white"
//           >
//             Outfir<span className="text-secondary">o</span>
//           </motion.div>
//         </Link>

//         {/* Navbar */}
//         <div className="flex-1">

//           <AnimatePresence>
//             {menuOpened && (
//               <>
//                 {/* overlay */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 0.45 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
//                   onClick={() => setMenuOpened(false)}
//                 />

//                 {/* drawer */}
//                 <motion.div
//                   initial={{ x: "-100%" }}
//                   animate={{ x: 0 }}
//                   exit={{ x: "-100%" }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 140,
//                     damping: 18
//                   }}
//                   className="fixed top-0 left-0 z-50 w-1/2 h-screen p-6 border-r border-gray-200 shadow-2xl dark:border-gray-700 bg-white/90 dark:bg-gray-900 backdrop-blur-xl xl:hidden"
//                 >

//                   {/* cross */}
//                   <div className="flex items-center justify-between mb-8">
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="bold-22 text-tertiary dark:text-white"
//                     >
//                       Menu
//                     </motion.div>

//                     <motion.div
//                       whileHover={{ rotate: 90, scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="cursor-pointer"
//                       onClick={() => setMenuOpened(false)}
//                     >
//                       <IoClose className="text-3xl dark:text-white" />
//                     </motion.div>
//                   </div>

//                   <motion.div
//                     initial="hidden"
//                     animate="show"
//                     variants={{
//                       hidden: {},
//                       show: {
//                         transition: {
//                           staggerChildren: 0.08
//                         }
//                       }
//                     }}
//                   >
//                     <Navbar
//                       containerStyles="flex flex-col gap-y-8 text-lg"
//                     />
//                   </motion.div>

//                 </motion.div>
//               </>
//             )}
//           </AnimatePresence>

//           {!menuOpened && (
//             <Navbar
//               containerStyles="hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 dark:ring-gray-700 rounded-full p-1"
//             />
//           )}

//         </div>

//         {/* Right Side */}
//         <div className="flex items-center justify-end flex-1 gap-x-4 xs:gap-x-8">

//           {/* menu toggle */}
//           <motion.div whileTap={{ scale: 0.9 }} className="xl:hidden">
//             <FaBarsStaggered
//               onClick={toggleMenu}
//               className="text-[22px] cursor-pointer dark:text-white"
//             />
//           </motion.div>

//           {/* 🌙 Dark Mode Toggle */}
//           <motion.button
//             onClick={toggleTheme}
//             whileHover={{ scale: 1.15 }}
//             whileTap={{ scale: 0.9 }}
//             className="flex items-center justify-center text-gray-700 transition rounded-full cursor-pointer w-9 h-9 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
//           >
//             {darkMode ? (
//               <MdLightMode size={22} />
//             ) : (
//               <MdDarkMode size={22} />
//             )}
//           </motion.button>

//           {/* Cart */}
//           <Link to={"/cart"} className="relative flex items-center">
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <TbBasket className="text-[26px] dark:text-white" />
//             </motion.div>

//             <motion.span
//               key={getCartCount()}
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 400 }}
//               className="bg-secondary text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md"
//             >
//               {getCartCount()}
//             </motion.span>
//           </Link>

//           {/* User */}
//           <div className="relative group">
//             <div>
//               {token ? (
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 250 }}
//                 >
//                   <TbUserCircle className="text-[28px] cursor-pointer dark:text-white" />
//                 </motion.div>
//               ) : (
//                 <motion.button
//                   onClick={() => navigate("/login")}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 250 }}
//                   className="btn-light flexCenter gap-x-2"
//                 >
//                   Login
//                   <RiUserLine className="text-xl" />
//                 </motion.button>
//               )}
//             </div>

//             {/* Dropdown */}
//             <AnimatePresence>
//               {token && (
//                 <motion.ul
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.25 }}
//                   className="absolute right-0 z-50 flex-col hidden w-40 p-2 bg-white rounded shadow-md dark:bg-gray-800 ring-1 ring-slate-900/5 dark:ring-gray-700 top-7 group-hover:flex regular-14"
//                 >

//                   {/* Orders */}
//                   <motion.li
//                     whileHover={{ x: 5 }}
//                     onClick={() => navigate("/orders")}
//                     className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary"
//                   >
//                     Orders
//                   </motion.li>

//                   {/* Wishlist */}
//                   <motion.li
//                     whileHover={{ x: 5 }}
//                     onClick={() => navigate("/wishlist")}
//                     className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary"
//                   >
//                     Wishlist
//                   </motion.li>

//                   {/* Profile */}
//                   <motion.li
//                     whileHover={{ x: 5 }}
//                     onClick={() => navigate("/profile")}
//                     className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary"
//                   >
//                     Profile
//                   </motion.li>

//                   {/* Logout */}
//                   <motion.li
//                     whileHover={{ x: 5 }}
//                     onClick={logout}
//                     className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary"
//                   >
//                     Logout
//                   </motion.li>

//                 </motion.ul>
//               )}
//             </AnimatePresence>

//           </div>
//         </div>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;


import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { FaBarsStaggered } from "react-icons/fa6";
import { TbBasket, TbUserCircle } from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  /* Load Saved Theme */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  /* Toggle Theme */
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

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white max-padd-container dark:bg-gray-900"
    >
      <div className="py-3 flexBetween">

        {/* Logo */}
        <Link to={"/"} className="flex flex-1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="bold-32 text-tertiary dark:text-white"
          >
            Outfir<span className="text-secondary">o</span>
          </motion.div>
        </Link>

        {/* Navbar */}
        <div className="flex-1">

          <AnimatePresence>
            {menuOpened && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.45 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
                  onClick={() => setMenuOpened(false)}
                />

                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 18
                  }}
                  className="fixed top-0 left-0 z-50 w-1/2 h-screen p-6 border-r border-gray-200 shadow-2xl dark:border-gray-700 bg-white/90 dark:bg-gray-900 backdrop-blur-xl xl:hidden"
                >

                  <div className="flex items-center justify-between mb-8">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bold-22 text-tertiary dark:text-white"
                    >
                      Menu
                    </motion.div>

                    <motion.div
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="cursor-pointer"
                      onClick={() => setMenuOpened(false)}
                    >
                      <IoClose className="text-3xl dark:text-white" />
                    </motion.div>
                  </div>

                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.08
                        }
                      }
                    }}
                  >
                    <Navbar
                      containerStyles="flex flex-col gap-y-8 text-lg"
                    />
                  </motion.div>

                </motion.div>
              </>
            )}
          </AnimatePresence>

          {!menuOpened && (
            <Navbar
              containerStyles="hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 dark:ring-gray-700 rounded-full p-1"
            />
          )}

        </div>

        {/* Right Side */}
        <div className="flex items-center justify-end flex-1 gap-x-4 xs:gap-x-8">

          <motion.div whileTap={{ scale: 0.9 }} className="xl:hidden">
            <FaBarsStaggered
              onClick={toggleMenu}
              className="text-[22px] cursor-pointer dark:text-white"
            />
          </motion.div>

          {/* Dark Mode */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center text-gray-700 transition rounded-full cursor-pointer w-9 h-9 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? (
              <MdLightMode size={22} />
            ) : (
              <MdDarkMode size={22} />
            )}
          </motion.button>

          {/* Cart */}
          <Link to={"/cart"} className="relative flex items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TbBasket className="text-[26px] dark:text-white" />
            </motion.div>

            <motion.span
              key={getCartCount()}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="bg-secondary text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md"
            >
              {getCartCount()}
            </motion.span>
          </Link>

          {/* User */}
          <div className="relative group">
            <div>
              {token ? (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <TbUserCircle className="text-[28px] cursor-pointer dark:text-white" />
                </motion.div>
              ) : (
                <motion.button
                  onClick={() => navigate("/login")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="btn-light flexCenter gap-x-2"
                >
                  Login
                  <RiUserLine className="text-xl" />
                </motion.button>
              )}
            </div>

            {/* Dropdown */}
            <AnimatePresence>
              {token && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 z-50 flex-col hidden w-40 p-2 bg-white rounded shadow-md dark:bg-gray-800 ring-1 ring-slate-900/5 dark:ring-gray-700 top-7 group-hover:flex regular-14"
                >

                  <motion.li whileHover={{ x: 5 }} onClick={() => navigate("/dashboard")} className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary">
                    Dashboard
                  </motion.li>

                  <motion.li whileHover={{ x: 5 }} onClick={() => navigate("/orders")} className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary">
                    Orders
                  </motion.li>

                  <motion.li whileHover={{ x: 5 }} onClick={() => navigate("/wishlist")} className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary">
                    Wishlist
                  </motion.li>

                  <motion.li whileHover={{ x: 5 }} onClick={() => navigate("/cart")} className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary">
                    Cart
                  </motion.li>

                  <motion.li whileHover={{ x: 5 }} onClick={() => navigate("/profile")} className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary">
                    Profile
                  </motion.li>

                  <motion.li whileHover={{ x: 5 }} onClick={() => navigate("/settings")} className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary">
                    Settings
                  </motion.li>

                  <motion.li whileHover={{ x: 5 }} onClick={logout} className="p-2 rounded-md cursor-pointer text-tertiary dark:text-white hover:bg-primary">
                    Logout
                  </motion.li>

                </motion.ul>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;