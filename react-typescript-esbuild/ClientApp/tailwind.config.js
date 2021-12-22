module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        greenEagle: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#073B4C',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
        blueNcs: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#118AB2',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
        caribbeanGreen: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#06D6A0',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
        orangeYellow: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#FFD166',
          light: '#FFDA85',
          lightest: '#FFE7AD',
        },
        paradisePink: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#EF476F',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        }
      },
      width: {
        '49': '49.55%'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
