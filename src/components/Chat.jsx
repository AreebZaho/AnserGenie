import {useContxt} from "../contexts/context";
import Card from "./Card";
import cardDetails from "../constants/cardDetails";
import Message from "./Message";

export default function Chat() {
	const {chatStarted, loading, chat} = useContxt();

	return (
		<div
			className={
				"flex flex-col items-center w-full m-auto dark:bg-slate-900 max-h-[calc(85%)] overflow-y-auto " +
				(!chatStarted ? "gap-12 xl:gap-20" : "gap-4")
			}
			style={{scrollbarColor: "transparent"}}
		>
			{!chatStarted ? (
				<>
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
				chat.map(({isQuestion, text}, index) => {
					return <Message key={index} isQuestion={isQuestion} text={text} />;
				})
			)}
		</div>
	);
}
