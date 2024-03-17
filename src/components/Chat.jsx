import {useContxt} from "../contexts/context";
import Card from "./Card";
import cardDetails from "../constants/cardDetails";

const Chat = () => {
	const {chatStarted} = useContxt();

	return (
		<div className="flex flex-col items-center w-full gap-12 m-auto xl:gap-20 dark:bg-slate-900">
			{!chatStarted ? (
				<>
					{" "}
					<p className="font-sans text-3xl xs:text-4xl md:text-5xl font-semibold leading-tight text-[#757675] px-6 dark:text-slate-100">
						<span className="welcome-heading">Hello </span>👋
						<br />
						<i>How may I help you?</i>
					</p>
					<div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
						{cardDetails.map((card, index) => (
							<Card key={index} title={card.title} icon={card.icon} />
						))}
					</div>{" "}
				</>
			) : (
				<div>started</div>
			)}
		</div>
	);
};

export default Chat;
