// // /** @type {import('tailwindcss').Config} */
// // export default {
// //   content: [
// //     "./index.html",
// //     "./src/**/*.{js,ts,jsx,tsx}",
// //   ],
// //   theme: {
// //     extend: {
// //       colors: {
// //         primary: "#c1e8ef36",
// //         secondary: "#43c2d1",
// //         tertiary: "#272626",
// //         gray: {
// //           10: "#EEEEEE",
// //           20: "#A2A2A2",
// //           30: "#7B7B7B",
// //           50: "#585858",
// //           90: "#141414",
// //         },
// //       },
// //       screens: {
// //         xs: "400px",
// //         "3xl": "1680px",
// //         "4xl": "2200px",
// //       },
// //       backgroundImage: {
// //         hero: "url(/src/assets/bg.png)",
// //         banner: "url(/src/assets/banner.png)"
// //       },
// //     },
// //   },
// //   plugins: [],
// // }


// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class", // ✅ Added for dark mode (layout safe)

//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],

//   theme: {
//     extend: {
//       colors: {
//         primary: "#c1e8ef36",
//         secondary: "#43c2d1",
//         tertiary: "#272626",
//         gray: {
//           10: "#EEEEEE",
//           20: "#A2A2A2",
//           30: "#7B7B7B",
//           50: "#585858",
//           90: "#141414",
//         },
//       },

//       screens: {
//         xs: "400px",
//         "3xl": "1680px",
//         "4xl": "2200px",
//       },

//       backgroundImage: {
//         hero: "url(/src/assets/bg.png)",
//         banner: "url(/src/assets/banner.png)"
//       },
//     },
//   },

//   plugins: [],
// }


// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class", // ✅ Dark mode controlled by class

//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],

//   theme: {
//     extend: {

//       /* COLORS */

//       colors: {
//         primary: "#c1e8ef36",
//         secondary: "#43c2d1",
//         tertiary: "#272626",

//         gray: {
//           10: "#EEEEEE",
//           20: "#A2A2A2",
//           30: "#7B7B7B",
//           50: "#585858",
//           90: "#141414",
//         },

//         /* 🌙 DARK MODE SUPPORT COLORS (safe addition) */

//         darkbg: "#0B1C2D",
//         darkcard: "#13293D",
//         darktext: "#E5E7EB",
//         darkmuted: "#9CA3AF",
//       },

//       /* BREAKPOINTS */

//       screens: {
//         xs: "400px",
//         "3xl": "1680px",
//         "4xl": "2200px",
//       },

//       /* BACKGROUNDS */

//       backgroundImage: {
//         hero: "url(/src/assets/bg.png)",
//         banner: "url(/src/assets/banner.png)"
//       },

//     },
//   },

//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Dark mode controlled by class

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      /* COLORS */

      colors: {
        primary: "#c1e8ef36",
        secondary: "#43c2d1",
        tertiary: "#272626",

        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },

        /* DARK MODE SUPPORT COLORS */

        darkbg: "#0B1C2D",
        darkcard: "#13293D",
        darktext: "#E5E7EB",
        darkmuted: "#9CA3AF",
      },

      /* BREAKPOINTS */

      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },

      /* BACKGROUND IMAGES */

      backgroundImage: {
        hero: "url(/src/assets/bg.png)",
        banner: "url(/src/assets/banner.png)",
      },

    },
  },

  plugins: [],
}