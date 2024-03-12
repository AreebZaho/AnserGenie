const Card = ({title, logo}) => {
	return (
		<div className="relative w-48 h-48 p-4 cursor-pointer rounded-xl bg-gemini-gray hover:bg-gray-200">
			{<p>{title}</p>}
			<div className="absolute p-2 bg-white rounded-full bottom-6 right-6">
				<img src={logo} alt="" className="h-6" />
			</div>
		</div>
	);
};

export default Card;
