import {useContxt} from "../contexts/context";

const Card = ({title, logo}) => {
	const {setInput} = useContxt();

	return (
		<div
			className="relative p-4 cursor-pointer w-36 xsm:w-48 aspect-square rounded-xl bg-gemini-gray hover:bg-gray-200"
			onClick={() => {
				setInput(title);
			}}
		>
			{<p className="max-xsm:text-xs">{title}</p>}
			<div className="absolute p-2 bg-white rounded-full bottom-3 right-3 xsm:bottom-6 xsm:right-6">
				<img src={logo} alt="" className="h-4 xsm:h-6" />
			</div>
		</div>
	);
};

export default Card;
