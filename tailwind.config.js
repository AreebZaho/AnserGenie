/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "468px",
			},
			height: {
				chatHeight: "calc(100vh - 116px)",
			},
			boxShadow: {
				light:
					"0 4px 6px -1px rgba(200, 200, 200, 0.3), 0 2px 4px -2px rgba(200, 200, 200, 0.2)",
			},
		},
	},
	plugins: [],
};
