import {useContxt} from "../contexts/context";
import runChat from "../config/gemini";
import {useId} from "react";

export default function Search() {
	const {
		input,
		setInput,
		chatStarted,
		setChatStarted,
		loading,
		setLoading,
		setChat,
	} = useContxt();

	const inputId = useId();

	return (
		<div className="absolute flex flex-col items-center w-full px-4 bottom-4">
			<div className="w-full max-w-[830px] h-12 fade-above-search-light dark:fade-above-search-dark"></div>
			<label
				id="search"
				htmlFor={inputId}
				className="bg-[#f0f4f9] rounded-full w-full max-w-[830px] px-6 py-3 flex-1 shadow-md dark:bg-slate-600"
			>
				<form action="" className="flex">
					<input
						id={inputId}
						type="text"
						placeholder="Enter your request here"
						value={input}
						className="flex-1 mr-4 text-sm font-medium bg-transparent focus:outline-none dark:text-slate-200 text-slate-600"
						onChange={(e) => setInput(e.target.value)}
					/>
					<button
						type="submit"
						className="flex gap-2 sm:gap-6 [&_img]:h-6"
						onClick={async (e) => {
							e.preventDefault();
							if (!input) return;
							setChatStarted(1);
							setChat((prevChats) => [
								...prevChats,
								{isQuestion: true, text: input},
								{isQuestion: false, text: ""},
							]);
							setInput("");
							setLoading(true);
							const answer = await runChat(input);
							setChat((prevChats) =>
								prevChats.map((chat, index) =>
									index === prevChats.length - 1
										? {...chat, text: answer}
										: chat
								)
							);
							setLoading(false);
						}}
					>
						<i className="text-xl fa-solid fa-arrow-up"></i>
					</button>
				</form>
			</label>
		</div>
	);
}
