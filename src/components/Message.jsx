import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import Loader from "./Loader";
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setResult, updateLastMessage} from "../features";

export default function Message({question, answer, populationDone, index}) {
	const dispatch = useDispatch();
	const result = useSelector((state) => state.result.result);
	const messages = useSelector((state) => state.messages.messages);
	const [populatedRes, setPopulatedRes] = useState(answer || result);
	useEffect(() => {
		if (populationDone === 2) return;
		else if (populationDone === 0) setPopulatedRes(result);
		else {
			dispatch(updateLastMessage({key: "answer", val: result}));
			dispatch(updateLastMessage({key: "populationDone", val: 2}));
			dispatch(setResult(""));
		}
	}, [result, populationDone]);

	return (
		<div
			className={
				"w-full max-w-[850px] px-4 py-2 pt-3 sm:pt-4 sm:pb-2 flex gap-4 sm:gap-6 flex-col text-md sm:text-lg max-lg:px-4 max-sm:px-2 dark:text-white  " +
				(index === messages.length - 1 ? "min-h-full" : "")
			}>
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
						className={
							"max-sm:pr-2 max-xs:pr-3 " +
							(index === messages.length - 1 ? "pb-24" : "")
						}
						dangerouslySetInnerHTML={{
							__html: answer || populatedRes,
						}}></p>
				)}
			</div>
		</div>
	);
}

Message.propTypes = {
	question: PropTypes.string,
	answer: PropTypes.string,
	populationDone: PropTypes.number,
	index: PropTypes.number,
};
