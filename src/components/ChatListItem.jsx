import {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import {useSelector, useDispatch} from "react-redux";
import {
	setActiveChatIndex,
	setMessages,
	setChatStarted,
	setChats,
	addChat,
	updateChatTitle,
	togglePinChat,
	deleteChat,
	incPinnedChatsCount,
	decPinnedChatsCount,
} from "../features";

export default function ChatListItem({index}) {
	const dispatch = useDispatch();
	const loadingRes = useSelector((state) => state.loadingRes.loadingRes);
	const messages = useSelector((state) => state.messages.messages);
	const activeChatIndex = useSelector(
		(state) => state.activeChatIndex.activeChatIndex
	);
	const chats = useSelector((state) => state.chats.chats);

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
	}, [messages]);

	const chatSettingsTogglerRef = useRef(null);
	const [isChatSettingsOpen, setIsChatSettingsOpen] = useState(false);

	const setAsActiveChat = (e) => {
		if (
			loadingRes ||
			e.target === chatSettingsTogglerRef.current ||
			e.target === chatSettingsTogglerRef.current.children[0] ||
			index === activeChatIndex
		)
			return;
		dispatch(setActiveChatIndex(index));
		dispatch(setMessages(chats[index].msgs));
	};

	const togglePinChatProcedure = () => {
		dispatch(
			chats[index].pinned ? decPinnedChatsCount() : incPinnedChatsCount()
		);
		dispatch(togglePinChat(index));
	};

	const deleteChatProcedure = () => {
		chats[index].pinned && dispatch(decPinnedChatsCount());
		if (chats.length > 1) {
			dispatch(setChatStarted(chats[index ? 0 : 1].msgs.length ? true : false));
			if (index === activeChatIndex) {
				dispatch(setActiveChatIndex(0));
				dispatch(setMessages(chats[index ? 0 : 1].msgs));
			} else if (index < activeChatIndex) {
				dispatch(setActiveChatIndex(activeChatIndex - 1));
			}
			dispatch(deleteChat(index));
		} else {
			dispatch(setChats([]));
			//start new chat
			dispatch(setChatStarted(false));
			dispatch(setActiveChatIndex(0));
			dispatch(setMessages([]));
			dispatch(addChat());
			window.innerWidth > 1024 && document.querySelector(".search").focus();
		}
	};

	return (
		<div className="relative flex justify-center w-full">
			<div
				onClick={(e) => setAsActiveChat(e)}
				className={
					"flex items-center px-3 w-[95%] justify-between cursor-pointer h-8 rounded-full " +
					(index === activeChatIndex
						? "bg-yellow-600 hover:opacity-90"
						: `hover:bg-gray-400 dark:hover:bg-slate-500 ${
								isChatSettingsOpen
									? "bg-slate-400 dark:bg-slate-500"
									: "bg-slate-300 dark:bg-slate-600"
						  }`)
				}>
				<div className={"flex items-center gap-2 w-[91%]"}>
					<i className="flex items-center text-sm fa-regular fa-message"></i>
					<p
						ref={titleRef}
						className="w-full h-6 mt-1 overflow-x-auto text-xs text-nowrap chatListTitle focus:outline-none"
						dangerouslySetInnerHTML={{__html: title}}></p>
				</div>
				<div
					ref={chatSettingsTogglerRef}
					className={
						"flex items-center justify-center w-6 h-6 p-2 -mr-2 rounded-full hover:bg-white dark:hover:bg-slate-700 " +
						(isChatSettingsOpen ? "bg-white dark:bg-slate-800" : "")
					}
					onClick={() =>
						setIsChatSettingsOpen((prev) => (loadingRes ? prev : !prev))
					}>
					<i
						className={
							"cursor-pointer text-sm fa-solid " +
							(chats[index].pinned ? "fa-thumbtack" : "fa-ellipsis-vertical")
						}></i>
				</div>
			</div>
			<div
				className={
					"absolute z-20 top-8 right-[3%] p-2 rounded-lg flex-col shadow-xl bg-white [&>div]:chat-list-settings-option [&_i]:text-sm dark:bg-slate-800 " +
					(isChatSettingsOpen ? "flex" : "hidden")
				}>
				<div
					className="hover:bg-blue-200"
					onClick={() => {
						setIsChatSettingsOpen(false);
						togglePinChatProcedure();
					}}>
					<i
						className={
							"fa-solid " +
							(chats[index].pinned ? "fa-ban -mr-1" : "fa-thumbtack -mr-0.5")
						}
						style={{color: "rgb(59, 130, 246"}}></i>
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
						dispatch(updateChatTitle({index, title: propmtValue}));
					}}>
					<i
						className="-mr-1 fa-solid fa-pen"
						style={{color: "rgb(202, 138, 4"}}></i>
					<p>Rename</p>
				</div>
				<div
					className="hover:bg-red-200"
					onClick={() => {
						if (confirm("Are you sure you want to delete this chat?")) {
							setIsChatSettingsOpen(false);
							deleteChatProcedure();
						}
					}}>
					<i
						className="-mr-0.5 fa-solid fa-trash"
						style={{color: "rgb(220, 38, 38"}}></i>
					<p>Delete</p>
				</div>
			</div>
		</div>
	);
}

ChatListItem.propTypes = {
	index: PropTypes.number,
};
