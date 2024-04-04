import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import Loader from "./Loader";
import {useContxt} from "../contexts/context";
import {useEffect, useState} from "react";

export default function Message({question, answer, last, populationDone}) {
	const {result, setResult, setMessages} = useContxt();
	const [populatedRes, setPopulatedRes] = useState(answer || result);

	useEffect(() => {
		if (populationDone === 2) return;
		else if (populationDone === 0) setPopulatedRes(result);
		else {
			setMessages((allMessages) =>
				allMessages.map((message) =>
					message.last
						? {...message, answer: result, populationDone: 2}
						: message
				)
			);
			setResult("");
		}
	}, [result, populationDone]);

	return (
		<div
			className={
				"w-full max-w-[850px] px-4 py-2 pt-3 sm:pt-4 sm:pb-2 flex gap-4 sm:gap-6 flex-col text-md sm:text-lg max-lg:px-4 max-sm:px-2 dark:text-white  " +
				(last ? "min-h-full" : "")
			}
		>
			<div className="flex gap-2 sm:gap-4">
				<div className="flex items-center justify-center h-6 mt-0.5 aspect-square">
					<i className="text-md sm:text-lg fa-solid fa-user"></i>
				</div>
				<p className="px-2 pb-0.5 font-semibold bg-gray-200 shadow-md rounded-xl dark:bg-gray-700 dark:text-white">
					{question}
				</p>
			</div>
			<div className="flex gap-4 sm:gap-5">
				<img
					src={logo}
					className={
						"h-4 sm:h-6 max-sm:ml-1 mt-1 max-sm:mt-1.5 " +
						(!populatedRes ? "animate-bounce" : "")
					}
				/>
				{!populatedRes ? (
					<Loader />
				) : (
					<p
						className={"max-sm:pr-2 max-xs:pr-3 " + (last ? "pb-24" : "")}
						dangerouslySetInnerHTML={{
							__html: answer || populatedRes,
						}}
					></p>
				)}
			</div>
		</div>
	);
}

Message.propTypes = {
	question: PropTypes.string,
	answer: PropTypes.string,
	last: PropTypes.bool,
	populationDone: PropTypes.number,
};
