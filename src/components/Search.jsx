import {send_icon} from "../assets/assets";
import {useContxt} from "../contexts/context";
import runChat from "../config/gemini";

const Search = () => {
	const {input, setInput, setChatStarted} = useContxt();

	return (
		<div className="bg-gemini-gray rounded-full w-full max-w-[830px] px-6 py-4 flex-1">
			<form action="" className="flex">
				<input
					type="text"
					placeholder="Enter a prompt here"
					value={input}
					className="flex-1 mr-4 text-sm font-semibold bg-transparent focus:outline-none"
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
					<img src={send_icon} alt="send" />
				</button>
			</form>
		</div>
	);
};

export default Search;
