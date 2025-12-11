/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Pastel Brown Professional Palette
                primary: {
                    DEFAULT: "#8B6F47",
                    light: "#C4A77D",
                    dark: "#5D4E37",
                },
                accent: {
                    DEFAULT: "#DAA520",
                    light: "#F5D78E",
                },
                background: "#FDF8F3",
                surface: "#FFFBF7",
                border: "#E5DDD4",
                text: {
                    primary: "#3D2914",
                    secondary: "#6B5642",
                    muted: "#9A8B7A",
                },
                success: "#4A7C59",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Outfit', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease forwards',
                'fade-in-up': 'fadeInUp 0.6s ease forwards',
                'slide-in-left': 'slideInLeft 0.6s ease forwards',
                'slide-in-right': 'slideInRight 0.6s ease forwards',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                fadeInUp: {
                    from: { opacity: 0, transform: 'translateY(30px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                },
                slideInLeft: {
                    from: { opacity: 0, transform: 'translateX(-30px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                slideInRight: {
                    from: { opacity: 0, transform: 'translateX(30px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
