import {useState, useEffect} from "react";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import {ContextProvider} from "./contexts/context";

export default function App() {
	const [darkTheme, setDarkTheme] = useState(
		localStorage.getItem("darkActive") &&
			localStorage.getItem("darkActive") === "true"
	);

	useEffect(() => {
		if (darkTheme) {
			document.querySelector("html").classList.add("dark");
			localStorage.setItem("darkActive", "true");
		} else {
			document.querySelector("html").classList.remove("dark");
			localStorage.setItem("darkActive", "false");
		}
	}, [darkTheme]);

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	window.addEventListener("resize", () => {
		setWindowWidth(window.innerWidth);
	});

	const [sidebarExpanded, setSidebarExpanded] = useState(windowWidth > 1280);

	const [input, setInput] = useState("");
	const [chatStarted, setChatStarted] = useState(
		localStorage.getItem("chats") &&
			JSON.parse(localStorage.getItem("chats"))[0].length
	);

	const [result, setResult] = useState("");
	const [loadingRes, setLoadingRes] = useState(false);

	const [chats, setChats] = useState(
		localStorage.getItem("chats")
			? JSON.parse(localStorage.getItem("chats"))
			: [{title: "", msgs: [], pinned: false}]
	);
	const [messages, setMessages] = useState(
		localStorage.getItem("chats")
			? JSON.parse(localStorage.getItem("chats"))[0].msgs
			: []
	);
	const [messagesCount, setMessagesCount] = useState(
		localStorage.getItem("chats")
			? JSON.parse(localStorage.getItem("chats"))[0].msgs.length
			: 0
	);
	const [activeChatIndex, setActiveChatIndex] = useState(0);

	useEffect(() => {
		setMessagesCount(messages.length);
		// console.log(
		// 	"msgs:",
		// 	messages,
		// 	"cnt: ",
		// 	messagesCount,
		// );
		if (
			JSON.stringify(chats[activeChatIndex].msgs) !== JSON.stringify(messages)
		)
			setChats((prevChats) =>
				prevChats.map((chat, index) =>
					index === activeChatIndex ? {...chat, msgs: messages} : chat
				)
			);
	}, [messages]);

	useEffect(() => {
		localStorage.setItem("chats", JSON.stringify(chats));
		// console.log("localstorage chats updated", chats);
	}, [chats]);

	//used by New Chat button in Sidebar as well
	const startNewChat = () => {
		setChatStarted(false);
		setActiveChatIndex(0);
		setMessages([]);
		setChats((allChats) => [{title: "", msgs: [], pinned: false}, ...allChats]);
		document.querySelector(".search").focus();
	};

	const [pinnedChatsCount, setPinnedChatsCount] = useState(
		(localStorage.getItem("chats") &&
			JSON.parse(localStorage.getItem("chats")).filter((chat) => chat.pinned)
				.length) ||
			0
	);
	const togglePinChat = (index) => {
		setPinnedChatsCount((prev) => prev + (chats[index].pinned ? -1 : 1));
		setChats((allChats) =>
			allChats.map((chat, i) =>
				i === index ? {...chat, pinned: !chat.pinned} : chat
			)
		);
		// console.log(
		// "activeIdx:",
		// activeChatIndex,
		// "messages:",
		// messages,
		// );
	};

	const deleteChat = (index) => {
		if (chats[index].pinned) setPinnedChatsCount((prev) => prev - 1);
		if (chats.length > 1) {
			setChatStarted(chats[index ? 0 : 1].msgs.length ? true : false);
			setChats((allChats) => allChats.filter((_, i) => i !== index));
			if (index === activeChatIndex) {
				setActiveChatIndex(0);
				setMessages(chats[index ? 0 : 1].msgs);
			} else if (index < activeChatIndex) {
				setActiveChatIndex(activeChatIndex - 1);
			}
		} else {
			setChats([]);
			startNewChat();
		}
	};

	return (
		<ContextProvider
			value={{
				darkTheme,
				setDarkTheme,
				windowWidth,
				sidebarExpanded,
				setSidebarExpanded,
				input,
				setInput,
				chatStarted,
				setChatStarted,
				result,
				setResult,
				loadingRes,
				setLoadingRes,
				messages,
				setMessages,
				messagesCount,
				setMessagesCount,
				chats,
				setChats,
				activeChatIndex,
				setActiveChatIndex,
				startNewChat,
				togglePinChat,
				pinnedChatsCount,
				setPinnedChatsCount,
				deleteChat,
			}}
		>
			<div className="flex w-screen dark:bg-slate-900">
				<Sidebar />
				<Page />
			</div>
		</ContextProvider>
	);
}
