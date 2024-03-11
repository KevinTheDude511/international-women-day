/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#163723',
                secondary: '#efe8db',
                third: '#a3c4f3',
                buttonHover: '#f5e6cb',
            }
        },
    },
    plugins: [],
}

