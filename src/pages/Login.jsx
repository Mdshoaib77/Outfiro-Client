// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import login from "../assets/login.png";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Login = () => {
//   const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
//   const [currState, setCurrState] = useState("Login");

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       if (currState === "Sign Up") {
//         const response = await axios.post(backendUrl + "/api/user/register", {
//           name,
//           email,
//           password,
//         });
//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem("token", response.data.token);
//         } else {
//           toast.error(response.data.message);
//         }
//       } else {
//         const response = await axios.post(backendUrl + "/api/user/login", {
//           email,
//           password,
//         });
//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem("token", response.data.token);
//         } else {
//           toast.error(response.data.message);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       navigate("/");
//     }
//   }, [token]);

//   return (
//     <div className="absolute top-0 left-0 z-50 w-full h-full bg-white">
//       {/* Container */}
//       <div className="flex w-full h-full">
//         {/* Image Side */}
//         <div className="hidden w-1/2 sm:block">
//           <img
//             src={login}
//             alt="loginImg"
//             className="object-cover w-full h-full"
//           />
//         </div>
//         {/* Form Side */}
//         <div className="flex w-full sm:w-1/2 items-center justify-center text-[90%]">
//           <form
//             onSubmit={onSubmitHandler}
//             className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5"
//           >
//             <div className="w-full mb-4">
//               <h3 className="bold-36">{currState}</h3>
//             </div>
//             {currState === "Sign Up" && (
//               <div className="w-full">
//                 <label htmlFor="name" className="medium-15">
//                   Name
//                 </label>
//                 <input
//                   onChange={(e) => setName(e.target.value)}
//                   value={name}
//                   type="text"
//                   placeholder="Name"
//                   className="w-full px-3
//                          py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
//                   required
//                 />
//               </div>
//             )}
//             <div className="w-full">
//               <label htmlFor="email" className="medium-15">
//                 Email
//               </label>
//               <input
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 type="text"
//                 placeholder="Email"
//                 className="w-full px-3
//                          py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
//                 required
//               />
//             </div>
//             <div className="w-full">
//               <label htmlFor="password" className="medium-15">
//                 Password
//               </label>
//               <input
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 type="password"
//                 placeholder="Password"
//                 className="w-full px-3
//                          py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="btn-dark w-full mt-5 !py-[8px] !rounded"
//             >
//               {currState === "Sign Up" ? "Sign Up" : "Login"}
//             </button>
//             <div className="flex flex-col w-full gap-y-3">
//               <div className="underline medium-15">Forgot your password?</div>
//               {currState === "Login" ? (
//                 <div className="underline medium-15">
//                   Don't have an account?
//                   <span
//                     onClick={() => setCurrState("Sign Up")}
//                     className="cursor-pointer"
//                   >
//                     {" "}
//                     Create account
//                   </span>
//                 </div>
//               ) : (
//                 <div className="underline medium-15">
//                   Already have an account?
//                   <span
//                     onClick={() => setCurrState("Login")}
//                     className="cursor-pointer"
//                   >
//                     {" "}
//                     Login
//                   </span>
//                 </div>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShopContext } from "../context/ShopContext";
import login from "../assets/login.png";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [currState, setCurrState] = useState("Login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 z-50 w-full h-full bg-white"
    >
      <div className="flex w-full h-full">

        {/* Image Side */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden w-1/2 sm:block"
        >
          <img
            src={login}
            alt="loginImg"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex w-full sm:w-1/2 items-center justify-center text-[90%]"
        >
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5"
          >
            <div className="w-full mb-4">
              <motion.h3
                key={currState}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bold-36"
              >
                {currState}
              </motion.h3>
            </div>

            <AnimatePresence mode="wait">
              {currState === "Sign Up" && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <label htmlFor="name" className="medium-15">
                    Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Name"
                    className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                    required
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="w-full">
              <label htmlFor="email" className="medium-15">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Email"
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="password" className="medium-15">
                Password
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 250 }}
              type="submit"
              className="btn-dark w-full mt-5 !py-[8px] !rounded"
            >
              {currState === "Sign Up" ? "Sign Up" : "Login"}
            </motion.button>

            <div className="flex flex-col w-full gap-y-3">
              <div className="underline cursor-pointer medium-15">
                Forgot your password?
              </div>

              {currState === "Login" ? (
                <div className="underline medium-15">
                  Don't have an account?
                  <span
                    onClick={() => setCurrState("Sign Up")}
                    className="cursor-pointer"
                  >
                    {" "}Create account
                  </span>
                </div>
              ) : (
                <div className="underline medium-15">
                  Already have an account?
                  <span
                    onClick={() => setCurrState("Login")}
                    className="cursor-pointer"
                  >
                    {" "}Login
                  </span>
                </div>
              )}
            </div>

          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;