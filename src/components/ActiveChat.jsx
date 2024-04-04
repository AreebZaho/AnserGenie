import {useContxt} from "../contexts/context";
import Card from "./Card";
import cardDetails from "../constants/cardDetails";
import Message from "./Message";
import {useEffect} from "react";

export default function ActiveChat() {
	const {messages, messagesCount} = useContxt();

	useEffect(() => {
		document.getElementById("chat").scrollTop =
			document.getElementById("chat").scrollHeight;
	}, [messagesCount]);

	return (
		<div
			id="chat"
			className={
				"flex flex-col items-center w-full m-auto lg:px-4 overflow-y-auto scroll-smooth h-chatHeight " +
				(!messagesCount ? "gap-12 xl:gap-20" : "gap-4")
			}
		>
			{!messagesCount ? (
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
				messages.map(({question, answer, last, populationDone}, index) => (
					<Message
						key={index}
						question={question}
						answer={answer}
						last={last}
						populationDone={populationDone}
					/>
				))
			)}
		</div>
	);
}
