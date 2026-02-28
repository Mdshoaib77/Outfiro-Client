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


import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { MdDarkMode, MdLightMode } from "react-icons/md"

const Navbar = ({ containerStyles }) => {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === "dark") {
            setDarkMode(true)
            document.documentElement.classList.add("dark")
        }
    }, [])

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        setDarkMode(!darkMode)
    }

    const navLinks = [
        { path: '/', title: 'Home' },
        { path: '/collection', title: 'Collection' },
        { path: '/testimonials', title: 'Testimonials' },
        { path: '/contact', title: 'Contact' },
    ]

    return (
        <nav
            className={`
                ${containerStyles}
                flex items-center gap-2
                bg-white
                transition-colors duration-300

                dark:bg-[#0F2233]
            `}
        >
            {navLinks.map((link) => (
                <NavLink
                    key={link.title}
                    to={link.path}
                    className={({ isActive }) =>
                        `${isActive ? "active-link" : ""} px-3 py-2 rounded-full`
                    }
                >
                    {link.title}
                </NavLink>
            ))}

            <button
                onClick={toggleTheme}
                className="ml-3 text-xl dark:text-gray-200"
            >
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>
        </nav>
    )
}

export default Navbar