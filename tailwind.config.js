/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/common/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        colors: {
            ...colors,
            black: "#191C1E",
            hover: "#21262A",
            primary: "#EB4B51"
        },
        extend: {
            backgroundImage: {
                'dark-logo': "url('/logo-white.svg')",
                'light-logo': "url('/logo.svg')",
                'responsive-logo': "url('/favicon.svg')"
            }
        },
    },
    plugins: [],
}
