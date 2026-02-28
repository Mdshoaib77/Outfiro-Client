import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { TbBasket, TbUserCircle } from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
  const [menuOpened, setMenuOpened] = useState(false);

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
          <Navbar
            containerStyles="hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1"
          />
        </div>

        {/* Buttons Right side */}
        <div className="flex items-center justify-end flex-1 gap-x-2 xs:gap-x-8">

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

            {/* Extended Dropdown */}
            <AnimatePresence>
              {token && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 z-50 flex-col hidden w-40 p-2 bg-white rounded shadow-md ring-1 ring-slate-900/5 top-7 group-hover:flex regular-14"
                >
                  {/* <motion.li
                    whileHover={{ x: 5 }}
                    onClick={() => navigate("/profile")}
                    className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
                  >
                    Profile
                  </motion.li> */}

                  <motion.li
                    whileHover={{ x: 5 }}
                    onClick={() => navigate("/orders")}
                    className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
                  >
                    My Orders
                  </motion.li>

                  <motion.li
                    whileHover={{ x: 5 }}
                    onClick={() => navigate("/cart")}
                    className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
                  >
                    My Cart
                  </motion.li>

                  <motion.li
                    whileHover={{ x: 5 }}
                    onClick={() => navigate("/orders")}
                    className="p-2 rounded-md cursor-pointer text-tertiary hover:bg-primary"
                  >
                    Track Orders
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