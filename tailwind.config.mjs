/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-fit': 'repeat(auto-fit, minmax(320px, 1fr))',
				'auto-hero': 'repeat(auto-fit, minmax(500px, 1fr))',
				'auto-pagos': 'repeat(auto-fit, minmax(320px, 1fr))',
				'auto-contact': 'repeat(auto-fit, minmax(320px, 1fr))',
				'auto-footer': 'repeat(auto-fit, minmax(320px, 1fr))',
			}
		},
	},
	plugins: [],
}

