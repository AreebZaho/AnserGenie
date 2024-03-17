import {useContxt} from "../contexts/context";
import runChat from "../config/gemini";

const Search = () => {
	const {input, setInput, setChatStarted} = useContxt();

	return (
		<div className="bg-[#f0f4f9] rounded-full w-full max-w-[830px] px-6 py-3 flex-1 shadow-md dark:bg-slate-600">
			<form action="" className="flex">
				<input
					type="text"
					placeholder="Enter your request here"
					value={input}
					className="flex-1 mr-4 text-sm font-medium bg-transparent focus:outline-none dark:text-slate-200 text-slate-600"
					onChange={(e) => setInput(e.target.value)}
				/>
				<button
					type="submit"
					className="flex gap-2 sm:gap-6 [&_img]:h-6"
					onClick={(e) => {
						e.preventDefault();
						if (!input) return;
						setInput("");
						setChatStarted(1);
						runChat(input);
					}}
				>
					<div onClick={() => {}}>
						<i className="text-xl fa-solid fa-arrow-up"></i>
					</div>
				</button>
			</form>
		</div>
	);
};

export default Search;
