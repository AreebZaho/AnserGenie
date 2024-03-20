import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import Loader from "./Loader";
import {useContxt} from "../contexts/context";

const Message = ({isQuestion, text}) => {
	const {loading} = useContxt();

	return (
		<div className="w-4/5 max-w-[830px] p-2 flex gap-4">
			{isQuestion ? (
				<div className="flex items-center justify-center h-6 aspect-square">
					<i className="text-lg fa-solid fa-user"></i>
				</div>
			) : (
				<img src={logo} className="h-6" />
			)}
			<p className="dark:text-white">{loading ? <Loader /> : text}</p>
		</div>
	);
};

Message.propTypes = {
	isQuestion: PropTypes.bool,
	text: PropTypes.string,
};

export default Message;
