/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('daisyui')],
	theme: {
		colors: {
			'background': '#121212',
			'primary': '#FF7801',
			'secondary': '#7E41FF',
			'base': '#EAEAEA',
			'black': '#000000',
			'gray': '#262626',
			'white': '#FFFFFF'
		  },
		extend: {}
	},
	daisyui: {
		themes: [
			{
				baseTheme: {
					'background': '#121212',
					'primary': '#FF7801',
					'secondary': '#7E41FF',
					'base': '#EAEAEA',
					'black': '#000000',
					'gray': '#262626',
					'white': '#FFFFFF'
				}
			}
		],
	},
};
