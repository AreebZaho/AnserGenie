import runChat from "../config/gemini";
import { useEffect, useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	setInput,
	setChatStarted,
	setLoadingRes,
	setResult,
	addMessage,
	updateLastMessage,
	incMessagesCount,
} from "../features";

export default function Search() {
	const dispatch = useDispatch();
	const input = useSelector((state) => state.input.input);
	const loadingRes = useSelector((state) => state.loadingRes.loadingRes);
	const messagesCount = useSelector(
		(state) => state.messagesCount.messagesCount
	);

	useEffect(() => {
		document.getElementById("activeChatId").scrollTop =
			document.getElementById("activeChatId").scrollHeight;
	}, [messagesCount]);

	const populateResult = async (resultArray) => {
		const size = resultArray.length;
		return new Promise((resolve) => {
			for (let i = 0; i < size; i++) {
				setTimeout(() => {
					dispatch(setResult(resultArray.slice(0, i + 1).join(" ")));
				}, i * 50);
			}
			setTimeout(() => {
				dispatch(updateLastMessage({ key: "populationDone", val: 1 }));
				resolve();
			}, size * 50);
		});
	};

	const inputId = useId();

	return (
		<div className="absolute flex flex-col items-center w-full px-4 bottom-4">
			<div className="w-full max-w-[830px] h-12 fade-above-search-light dark:fade-above-search-dark"></div>
			<label
				htmlFor={inputId}
				className="bg-[#f0f4f9] rounded-full w-full max-w-[830px] px-6 py-3 flex-1 shadow-md dark:bg-slate-600">
				<form action="" className="flex">
					<input
						id={inputId}
						type="text"
						placeholder="Enter your request here"
						value={input}
						className="flex-1 mr-4 text-sm bg-transparent focus:outline-none dark:text-slate-200 text-slate-600 search"
						onChange={(e) => dispatch(setInput(e.target.value))}
					/>
					<button
						type="submit"
						className={"" + (loadingRes ? "cursor-not-allowed" : "")}
						onClick={async (e) => {
							e.preventDefault();
							if (!input || loadingRes) return;
							if (!messagesCount) dispatch(setChatStarted(true));
							dispatch(incMessagesCount());
							dispatch(setLoadingRes(true));
							dispatch(
								addMessage({ question: input, answer: "", populationDone: 0 })
							);
							dispatch(setInput(""));
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
							dispatch(setLoadingRes(false));
						}}>
						<i
							className={
								loadingRes
									? "fa-solid fa-spinner animate-spin text-lg"
									: "fa-solid fa-check text-xl " +
									  (input ? "" : "opacity-30 cursor-not-allowed")
							}></i>
					</button>
				</form>
			</label>
		</div>
	);
}
