import {useContxt} from "../contexts/context";
import Card from "./Card";
import {
	compass_icon,
	bulb_icon,
	gallery_icon2,
	code_icon,
} from "../assets/assets";

const Chat = () => {
	const {chatStarted} = useContxt();

	return (
		<div className="absolute flex flex-col items-center w-full gap-12 m-auto xl:gap-20">
			{!chatStarted ? (
				<>
					{" "}
					<p className="font-sans text-3xl xsm:text-4xl md:text-5xl font-semibold leading-tight text-[#c4c7c5] px-6">
						<span className="welcome-heading">Hello there </span>👋
						<br />
						How can I help you today?
					</p>
					<div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
						<Card
							title="Suggest the best parks to visit in a city with descriptions"
							logo={compass_icon}
						/>
						<Card
							title="Help me compare these college majors"
							logo={bulb_icon}
						/>
						<Card
							title="Generate the code for a button with HTML and CSS"
							logo={code_icon}
						/>
						<Card
							title="Write a birthday message for a 12 year old"
							logo={gallery_icon2}
						/>
					</div>{" "}
				</>
			) : (
				<div>started</div>
			)}
		</div>
	);
};

export default Chat;
