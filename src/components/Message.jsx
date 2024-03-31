import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import Loader from "./Loader";
import {useContxt} from "../contexts/context";
import {useEffect, useState} from "react";

export default function Message({question, last}) {
	const {answer} = useContxt();
	const [result, setResult] = useState(answer);

	useEffect(() => {
		if (!last || !answer) return;
		setResult(answer);
		//explanation:
		//after answer population answer = "" and at that time returns from here (else in infinite loop of setting to "" and loader appearing)
		//LATER when new message arrives, this message's last marked as false and now does not matter what answer is
		//since last is set to false, never runs
	}, [answer, last]);

	return (
		<div
			className={
				"w-full max-w-[850px] py-2 pt-3 sm:pt-4 sm:pb-2 flex gap-4 sm:gap-6 flex-col text-md sm:text-lg max-lg:px-4 max-sm:px-2 dark:text-white  " +
				(last ? "min-h-full" : "")
			}
		>
			<div className="flex gap-2 sm:gap-4">
				<div className="flex items-center justify-center h-6 aspect-square">
					<i className="text-md sm:text-lg fa-solid fa-user"></i>
				</div>
				<p className="px-2 pb-0.5 font-semibold bg-gray-200 shadow-md rounded-xl dark:bg-gray-700 dark:text-white">
					{question}
				</p>
			</div>
			<div className="flex gap-4 sm:gap-6">
				<img
					src={logo}
					className={
						"h-4 sm:h-6 max-sm:ml-1 max-sm:mt-1 " +
						(!result ? "animate-bounce" : "")
					}
				/>
				{!result ? (
					<Loader />
				) : (
					<p
						className={"max-sm:pr-2 max-xs:pr-3 " + (last ? "pb-24" : "")}
						dangerouslySetInnerHTML={{__html: result}}
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
};
