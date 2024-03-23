import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import Loader from "./Loader";
import {useContxt} from "../contexts/context";

export default function Message({isQuestion, text}) {
	const {loading} = useContxt();

	return (
		<div className="w-full max-w-[830px] py-2 px-16 flex gap-4">
			{isQuestion ? (
				<div className="flex items-center justify-center h-6 aspect-square">
					<i className="text-lg fa-solid fa-user"></i>
				</div>
			) : (
				<img src={logo} className={"h-6 " + (text ? "" : "animate-bounce")} />
			)}
			{text ? (
				<p className={"dark:text-white " + (isQuestion ? "text-lg" : "")}>
					{text}
				</p>
			) : (
				<Loader />
			)}
		</div>
	);
}

Message.propTypes = {
	isQuestion: PropTypes.bool,
	text: PropTypes.string,
};
