import {useContxt} from "../contexts/context";

export default function Card({title, icon}) {
	const {setInput} = useContxt();

	return (
		<div
			className="relative p-4 shadow-md cursor-pointer w-36 xs:w-48 aspect-square rounded-xl bg-[#f0f4f9] hover:bg-gray-200 dark:bg-slate-700 hover:-translate-y-0.5 duration-150 transition-all"
			onClick={() => {
				setInput(title);
			}}
		>
			{<code className="max-xs:text-xs dark:text-white">{title}</code>}
			<div className="absolute flex items-center justify-center w-8 h-8 p-1 bg-white rounded-full bottom-3 right-3 xs:bottom-6 xs:right-6 aspect-square dark:bg-slate-500">
				<i className={icon + " text-xl"}></i>
			</div>
		</div>
	);
}
