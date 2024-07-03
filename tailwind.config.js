/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#FCAF3C',
					'primary-content': '#171F30',
					secondary: '#E35A50',
					'secondary-content': '#171F30',
					accent: '#ffffff',
					'accent-content': '#171F30',
					neutral: '#303745',
					'neutral-content': '#7B8598',
					'base-100': '#171F30',
					'base-200': '#141b29',
					'base-300': '#0e111b',
					'base-content': '#7B8598'
				}
			}
		]
	},
	theme: {
		extend: {},
		fontFamily: {
			ubuntu: ['Ubuntu', 'sans-serif'],
			rubik: ['Rubik', 'sans-serif']
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
