import {useContxt} from "../contexts/context";
import runChat from "../config/gemini";
import {useId} from "react";

export default function Search() {
	const {
		input,
		setInput,
		setChatStarted,
		setAnswer,
		loadingAns,
		setLoadingAns,
		setMessages,
		setMessagesCount,
	} = useContxt();

	const inputId = useId();

	const populateAnswer = async (answerArray) => {
		return new Promise((resolve) => {
			for (let i = 0; i < answerArray.length; i++) {
				setTimeout(() => {
					setAnswer(answerArray.slice(0, i + 1).join(" "));
				}, i * 50);
			}
			setTimeout(() => {
				setAnswer("");
				resolve();
			}, answerArray.length * 50);
		});
	};

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
						id="i"
						type="text"
						placeholder="Enter your request here"
						value={input}
						className="flex-1 mr-4 text-sm bg-transparent focus:outline-none dark:text-slate-200 text-slate-600"
						onChange={(e) => setInput(e.target.value)}
					/>
					<button
						type="submit"
						className={"" + (loadingAns ? "cursor-none" : "")}
						onClick={async (e) => {
							e.preventDefault();
							if (!input || loadingAns) return;
							setChatStarted(1);
							setLoadingAns(true);
							setMessages((prevChats) => [
								...prevChats.map((message) => ({
									...message,
									last: false,
								})),
								{question: input, last: true},
							]);
							setInput("");
							setMessagesCount((prevCount) => prevCount + 1);
							await populateAnswer(
								(
									await runChat(input)
								)
									.split("**")
									.map((sentence, index) =>
										index % 2 ? `<b>${sentence}</b>` : sentence
									)
									.join("")
									.split("*")
									.join("<br>")
									.split("\n")
									.join("<br>")
									.split("```")
									.map((sentence, index) =>
										index % 2
											? `<p class='p-4 text-sm bg-gray-300 dark:bg-gray-700 rounded-md font-mono shadow-md dark:shadow-light'>${sentence}</p>`
											: sentence
									)
									.join("")
									.split(" ")
							);
							setLoadingAns(false);
						}}
					>
						<i
							className={
								loadingAns
									? "fa-solid fa-spinner animate-spin text-lg"
									: "fa-solid fa-arrow-up text-xl"
							}
						></i>
					</button>
				</form>
			</label>
		</div>
	);
}
