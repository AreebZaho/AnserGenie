import {useContxt} from "../contexts/context";
import PropTypes from 'prop-types';

export default function Card({title, icon}) {
	const {setInput} = useContxt();

	return (
		<div
			className="relative p-4 shadow-md cursor-pointer w-36 xs:w-48 aspect-square rounded-xl bg-[#f0f4f9] hover:bg-gray-200 dark:bg-slate-700 hover:dark:bg-slate-600"
			onClick={() => {
				setInput(title);
			}}
		>
			{
				<p className="max-xs:text-xs dark:text-white">
					{title}
				</p>
			}
			<div className="absolute flex items-center justify-center w-8 h-8 p-1 bg-white rounded-full bottom-3 right-3 xs:bottom-6 xs:right-6 aspect-square dark:bg-slate-500">
				<i className={icon + " text-xl"}></i>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.string,
};