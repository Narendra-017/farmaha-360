module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}', 
    './public/index.html', 
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  safelist: [
    'bg-red-500',
    'text-center',
    'p-4', 
  ],
  corePlugins: {
    preflight: false, 
  },
}
