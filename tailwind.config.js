/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                blob: {
                    '0%, 100%': {
                        borderRadius: '33% 67% 70% 30% / 30% 30% 70% 70%',
                    },
                    '20%': {
                        borderRadius: '37% 63% 51% 49% / 37% 65% 35% 63%',
                    },
                    '40%': {
                        borderRadius: '36% 64% 64% 36% / 64% 48% 52% 36%',
                    },
                    '60%': {
                        borderRadius: '37% 63% 51% 49% / 30% 30% 70% 70%',
                    },
                    '80%': {
                        borderRadius: '40% 60% 42% 58% / 41% 51% 49% 59%',
                    },
                },
            },
            animation: {
                blob: 'blob 10s linear infinite',
            },
        },
    },
    plugins: [],
};
