import {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import {useContxt} from "../contexts/context";

export default function ChatListItem({ index }) {
	const {
		loadingRes,
		messages,
		setMessages,
		chats,
		setChats,
		activeChatIndex,
		setActiveChatIndex,
		togglePinChat,
		deleteChat,
	} = useContxt();

	const titleRef = useRef(null);
	const [title, setTitle] = useState(
		chats[index].title ||
			(chats[index].msgs.length &&
				chats[index].msgs[chats[index].msgs.length - 1].question) ||
			"<i>New Chat</i>"
	);
	useEffect(() => {
		setTitle(
			chats[index].title ||
				(chats[index].msgs.length &&
					chats[index].msgs[chats[index].msgs.length - 1].question) ||
				"<i>New Chat</i>"
		);
	}, [messages, chats]);

	const chatSettingsTogglerRef = useRef(null);
	const [isChatSettingsOpen, setIsChatSettingsOpen] = useState(false);

	const setActiveChat = (e) => {
		if (
			loadingRes ||
			e.target === chatSettingsTogglerRef.current ||
			e.target === chatSettingsTogglerRef.current.children[0] ||
			index === activeChatIndex
		)
			return;
		setActiveChatIndex(index);
		setMessages(chats[index].msgs);
	};

	return (
		<div className="relative flex justify-center w-full">
			<div
				onClick={(e) => setActiveChat(e)}
				className={
					"flex items-center px-3 w-[95%] justify-between cursor-pointer h-8 rounded-full " +
					(index === activeChatIndex
						? "bg-yellow-600 hover:opacity-90"
						: `hover:bg-slate-300 dark:hover:bg-slate-500 ${
								isChatSettingsOpen
									? "bg-slate-300 dark:bg-slate-500"
									: "bg-slate-200 dark:bg-slate-600"
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  }`)
				}
			>
				<div className={"flex items-center gap-2 w-[91%]"}>
					<i className="flex items-center text-sm fa-regular fa-message"></i>
					<p
						ref={titleRef}
						className="w-full h-6 mt-1 overflow-x-auto text-xs text-nowrap chatListTitle focus:outline-none"
						dangerouslySetInnerHTML={{__html: title}}
					></p>
				</div>
				<div
					ref={chatSettingsTogglerRef}
					className={
						"flex items-center justify-center w-6 h-6 p-2 -mr-2 rounded-full hover:bg-white dark:hover:bg-slate-700 " +
						(isChatSettingsOpen ? "bg-white dark:bg-slate-800" : "")
					}
					onClick={() =>
						setIsChatSettingsOpen((prev) => (loadingRes ? prev : !prev))
					}
				>
					<i
						className={
							"cursor-pointer text-sm fa-solid " +
							(chats[index].pinned ? "fa-thumbtack" : "fa-ellipsis-vertical")
						}
					></i>
				</div>
			</div>
			<div
				className={
					"absolute z-20 top-8 right-[3%] p-2 rounded-lg flex-col shadow-xl bg-white [&>div]:chat-list-settings-option [&_i]:text-sm dark:bg-slate-800 " +
					(isChatSettingsOpen ? "flex" : "hidden")
				}
			>
				<div
					className="hover:bg-blue-200"
					onClick={() => {
						setIsChatSettingsOpen(false);
						togglePinChat(index);
					}}
				>
					<i
						className={
							"fa-solid " +
							(chats[index].pinned ? "fa-ban -mr-1" : "fa-thumbtack -mr-0.5")
						}
						style={{color: "rgb(59, 130, 246"}}
					></i>
					<p>{chats[index].pinned ? "Unpin" : "Pin"}</p>
				</div>
				<div
					className="hover:bg-amber-100"
					onClick={() => {
						setIsChatSettingsOpen(false);
						const propmtValue = prompt(
							"Enter new title for this chat",
							title
						).trim();
						setTitle(
							propmtValue ||
								chats[index].msgs[chats[index].msgs.length - 1].question ||
								"<i>New Chat</i>"
						);
						setChats((allChats) =>
							//sets to "" if promptValue is empty string
							allChats.map((chat, idx) =>
								idx === index ? {...chat, title: propmtValue} : chat
							)
						);
					}}
				>
					<i
						className="-mr-1 fa-solid fa-pen"
						style={{color: "rgb(202, 138, 4"}}
					></i>
					<p>Rename</p>
				</div>
				<div
					className="hover:bg-red-200"
					onClick={() => {
						if (confirm("Are you sure you want to delete this chat?")) {
							setIsChatSettingsOpen(false);
							deleteChat(index);
						}
					}}
				>
					<i
						className="-mr-0.5 fa-solid fa-trash"
						style={{color: "rgb(220, 38, 38"}}
					></i>
					<p>Delete</p>
				</div>
			</div>
		</div>
	);
}

ChatListItem.propTypes = {
	index: PropTypes.number,
};
