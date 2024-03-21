export default function Loader() {
	return (
		<div className="flex flex-col w-full h-16 gap-2">
			<div
				className="w-full h-3 rounded-full animate-[loader_3s_linear_infinite]"
				style={{
					background:
						"linear-gradient(to right, #e0c0b0, #d0a090, #c090a0, #e0c0b0)",
				}}
			></div>
			<div
				className="w-full h-3 rounded-full animate-[loader_3s_linear_infinite]"
				style={{
					background:
						"linear-gradient(to right, #c090a0, #e0c0b0, #e0c0b0, #d0a090)",
				}}
			></div>
			<div
				className="w-3/5 h-3 rounded-full animate-[loader_3s_linear_infinite]"
				style={{
					background:
						"linear-gradient(to right, #e0c0b0, #d0a090, #c090a0, #e0c0b0)",
				}}
			></div>
		</div>
	);
}
