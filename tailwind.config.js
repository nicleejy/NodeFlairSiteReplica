/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				green: {
					DEFAULT: "#1fc76a",
				},
			},
		},
		fontFamily: {
			opensans: ["Open Sans", "sans-serif"],
		},
	},
	plugins: [],
};
