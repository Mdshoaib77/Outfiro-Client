// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import { FaBarsStaggered, FaRegCircleUser } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";
// import { TbBasket, TbUserCircle } from "react-icons/tb";
// import { RiUserLine } from "react-icons/ri";
// import { ShopContext } from "../context/ShopContext";

// const Header = () => {
//   const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
//   const [menuOpened, setMenuOpened] = useState(false);

//   const toggleMenu = () => setMenuOpened((prev) => !prev);

//   const logout = () => {
//     localStorage.removeItem('token')
//     setToken('')
//     navigate('/login')
//   };

//   return (
//     <header className="w-full max-padd-container">
//       <div className="py-3 flexBetween">
//         {/* Logo Left side */}
//         <Link to={"/"} className="flex flex-1">
//           <div className="bold-32">
//             Outfir<span className="text-secondary">o</span>
//           </div>
//         </Link>

//         {/* Navbar  */}
//         <div className="flex-1">
//           <Navbar
//             containerStyles={`${
//               menuOpened
//                 ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50"
//                 : "hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1"
//             }`}
//           />
//         </div>

//         {/* Buttons Right side */}
//         <div className="flex items-center justify-end flex-1 gap-x-2 xs:gap-x-8">
//           {/* menu toggle */}
//           <FaBarsStaggered
//             onClick={toggleMenu}
//             className="text-xl cursor-pointer xl:hidden"
//           />
//           {/* search icon */}
//           <FaSearch className="text-lg cursor-pointer" />
//           {/* Cart */}
//           <Link to={"/cart"} className="relative flex">
//             <TbBasket className="text-[27px]" />
//             <span className="bg-secondary text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md">
//               {getCartCount()}
//             </span>
//           </Link>
//           {/* User profile */}
//           <div className="relative group">
//             <div>
//               {token ? (
//                 <div>
//                   <TbUserCircle className="text-[29px] cursor-pointer" />
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => navigate("/login")}
//                   className="btn-light flexCenter gap-x-2"
//                 >
//                   Login
//                   <RiUserLine className="text-xl" />
//                 </button>
//               )}
//             </div>
//             {/* Dropdown */}
//             {token && (
//               <ul className="absolute right-0 z-50 flex-col hidden w-32 p-2 bg-white rounded shadow-md ring-1 ring-slate-900/5 top-7 group-hover:flex regular-14">
//                 <li
//                   onClick={() => navigate("/orders")}
//                   className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
//                 >
//                   Orders
//                 </li>
//                 <li
//                   onClick={logout}
//                   className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
//                 >
//                   Logout
//                 </li>
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TbBasket, TbUserCircle } from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-padd-container"
    >
      <div className="py-3 flexBetween">
        {/* Logo Left side */}
        <Link to={"/"} className="flex flex-1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="bold-32"
          >
            Outfir<span className="text-secondary">o</span>
          </motion.div>
        </Link>

        {/* Navbar */}
        <div className="flex-1">
          <AnimatePresence>
            {menuOpened && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Navbar
                  containerStyles="flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {!menuOpened && (
            <Navbar
              containerStyles="hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1"
            />
          )}
        </div>

        {/* Buttons Right side */}
        <div className="flex items-center justify-end flex-1 gap-x-2 xs:gap-x-8">
          {/* menu toggle */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="xl:hidden"
          >
            <FaBarsStaggered
              onClick={toggleMenu}
              className="text-xl cursor-pointer"
            />
          </motion.div>

          {/* search icon */}
          <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
            <FaSearch className="text-lg cursor-pointer" />
          </motion.div>

          {/* Cart */}
          <Link to={"/cart"} className="relative flex">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TbBasket className="text-[27px]" />
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

          {/* User profile */}
          <div className="relative group">
            <div>
              {token ? (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <TbUserCircle className="text-[29px] cursor-pointer" />
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
                  className="absolute right-0 z-50 flex-col hidden w-32 p-2 bg-white rounded shadow-md ring-1 ring-slate-900/5 top-7 group-hover:flex regular-14"
                >
                  <motion.li
                    whileHover={{ x: 5 }}
                    onClick={() => navigate("/orders")}
                    className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
                  >
                    Orders
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    onClick={logout}
                    className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
                  >
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