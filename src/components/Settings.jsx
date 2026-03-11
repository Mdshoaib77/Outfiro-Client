import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { ShopContext } from "../context/ShopContext"
import Footer from "../components/Footer"
import Title from "../components/Title"
import { toast } from "react-toastify"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const Settings = () => {

  const { backendUrl, token } = useContext(ShopContext)

  const [user,setUser] = useState({
    name:"",
    email:""
  })

  const [password,setPassword] = useState({
    newPassword:""
  })


  /* Fetch Profile */

  const fetchProfile = async () => {

    try{

      const response = await axios.get(
        backendUrl + "/api/user/profile",
        { headers:{token} }
      )

      if(response.data.success){
        setUser(response.data.user)
      }

    }catch(error){
      console.log(error)
    }

  }


  /* Update Profile */

  const updateProfile = async () => {

    try{

      const response = await axios.post(
        backendUrl + "/api/user/update-profile",
        {
          name:user.name,
          email:user.email
        },
        { headers:{token} }
      )

      if(response.data.success){
        toast.success("Profile Updated")
      }

    }catch(error){
      console.log(error)
      toast.error(error.message)
    }

  }


  /* Change Password */

  const changePassword = async () => {

    try{

      const response = await axios.post(
        backendUrl + "/api/user/change-password",
        {
          newPassword:password.newPassword
        },
        { headers:{token} }
      )

      if(response.data.success){
        toast.success("Password Updated")
        setPassword({newPassword:""})
      }

    }catch(error){
      console.log(error)
      toast.error(error.message)
    }

  }


  useEffect(()=>{

    if(token){
      fetchProfile()
    }

  },[token])


  return (

    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5}}
    >

      <div className="bg-primary">

        <div className="py-16 max-padd-container">

          {/* Title */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="mb-14"
          >

            <Title
              title1={"Account"}
              title2={"Settings"}
            />

          </motion.div>


          {/* Profile Settings */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="p-8 mb-10 bg-white shadow rounded-xl"
          >

            <h3 className="mb-6 text-lg font-semibold">
              Profile Information
            </h3>

            <div className="flex flex-col gap-4">

              <input
                type="text"
                value={user.name}
                onChange={(e)=>setUser({...user,name:e.target.value})}
                placeholder="Name"
                className="p-3 border rounded-lg outline-none"
              />

              <input
                type="email"
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
                placeholder="Email"
                className="p-3 border rounded-lg outline-none"
              />

              <button
                onClick={updateProfile}
                className="px-6 py-2 text-white rounded-lg bg-secondary"
              >
                Update Profile
              </button>

            </div>

          </motion.div>


          {/* Password Settings */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="p-8 bg-white shadow rounded-xl"
          >

            <h3 className="mb-6 text-lg font-semibold">
              Change Password
            </h3>

            <div className="flex flex-col gap-4">

              <input
                type="password"
                placeholder="New Password"
                value={password.newPassword}
                onChange={(e)=>setPassword({newPassword:e.target.value})}
                className="p-3 border rounded-lg outline-none"
              />

              <button
                onClick={changePassword}
                className="px-6 py-2 text-white rounded-lg bg-secondary"
              >
                Update Password
              </button>

            </div>

          </motion.div>

        </div>

      </div>

      <Footer/>

    </motion.div>

  )

}

export default Settings