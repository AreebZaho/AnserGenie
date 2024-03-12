/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"gemini-gray": "#f0f4f9",
			},
		},
	},
	plugins: [],
};
