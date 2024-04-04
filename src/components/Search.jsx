import {useContxt} from "../contexts/context";
import runChat from "../config/gemini";
import {useId} from "react";

export default function Search() {
	const inputId = useId();

	const {
		input,
		setInput,
		setChatStarted,
		setResult,
		loadingRes,
		setLoadingRes,
		setMessages,
		messagesCount,
	} = useContxt();

	const populateResult = async (resultArray) => {
		const size = resultArray.length;
		return new Promise((resolve) => {
			for (let i = 0; i < size; i++) {
				setTimeout(() => {
					setResult(resultArray.slice(0, i + 1).join(" "));
				}, i * 50);
			}
			setTimeout(() => {
				setMessages((allMessages) =>
					allMessages.map((message) =>
						message.last ? {...message, populationDone: 1} : message
					)
				);
				resolve();
			}, size * 50);
		});
	};

	return (
		<div className="absolute flex flex-col items-center w-full px-4 bottom-4">
			<div className="w-full max-w-[830px] h-12 fade-above-search-light dark:fade-above-search-dark"></div>
			<label
				htmlFor={inputId}
				className="bg-[#f0f4f9] rounded-full w-full max-w-[830px] px-6 py-3 flex-1 shadow-md dark:bg-slate-600"
			>
				<form action="" className="flex">
					<input
						id={inputId}
						type="text"
						placeholder="Enter your request here"
						value={input}
						className="flex-1 mr-4 text-sm bg-transparent focus:outline-none dark:text-slate-200 text-slate-600 search"
						onChange={(e) => setInput(e.target.value)}
					/>
					<button
						type="submit"
						className={"" + (loadingRes ? "cursor-not-allowed" : "")}
						onClick={async (e) => {
							e.preventDefault();
							if (!input || loadingRes) return;
							if (!messagesCount) setChatStarted(1);
							setLoadingRes(true);
							setMessages((prevMsgs) => [
								...prevMsgs.map((message) => ({
									...message,
									last: false,
								})),
								{question: input, answer: "", last: true, populationDone: 0},
							]);
							setInput("");
							try {
								await populateResult(
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
							} catch (error) {
								await populateResult(
									("Sorry, failed to fetch answer.<br>" + error.message).split(
										" "
									)
								);
							}
							setLoadingRes(false);
						}}
					>
						<i
							className={
								loadingRes
									? "fa-solid fa-spinner animate-spin text-lg"
									: "fa-solid fa-check text-xl " + (input ? "" : "opacity-30 cursor-not-allowed")
							}
						></i>
					</button>
				</form>
			</label>
		</div>
	);
}
