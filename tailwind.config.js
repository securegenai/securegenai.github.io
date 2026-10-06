/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          mint: 'var(--brand-mint)',
          hover: 'var(--brand-mint-hover)',
          muted: 'var(--brand-green-muted)',
          ink: 'var(--brand-ink)',
          pale: 'var(--brand-pale)',
        },
      },
    },
  },
  plugins: [],
};
