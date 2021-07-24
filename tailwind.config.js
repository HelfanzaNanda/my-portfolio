const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
		colors: {
			'true-gray': colors.trueGray,
			indigo: colors.indigo,
			rose: colors.rose,
			amber: colors.amber,
		}
	},
  },
  variants: {
    extend: {
		width: ['hover', 'focus'],
		margin: ['hover', 'focus'],
		borderWidth: ['hover', 'focus'],
		textColor: ['active'],
		backgroundColor: ['active'],
	},
  },
  plugins: [],
}
