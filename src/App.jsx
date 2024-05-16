import {useEffect} from "react";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import {useSelector, useDispatch} from "react-redux";
import {setMessagesCount} from "./features/messagesCountSlice";
import {setWindowWidth} from "./features/windowWidthSlice";
import {setSidebarExpanded} from "./features/sidebarExpandedSlice";
import {setMessagesAtActiveChatIndex} from "./features/chatsSlice";
//startnewchat shared by sidebar and delete func
export default function App() {
	useEffect(() => {
		if (localStorage.getItem("darkActive") !== "true") {
			document.querySelector("html").classList.remove("dark");
			localStorage.setItem("darkActive", "false");
		} else {
			document.querySelector("html").classList.add("dark");
			localStorage.setItem("darkActive", "true");
			document
				.getElementById("toggleDarkSlider")
				.classList.add("translate-x-6");
		}
	}, []);

	const dispatch = useDispatch();
	const messages = useSelector((state) => state.messages.messages);
	const activeChatIndex = useSelector(
		(state) => state.activeChatIndex.activeChatIndex
	);
	const chats = useSelector((state) => state.chats.chats);

	window.addEventListener("resize", () => {
		dispatch(setWindowWidth(window.innerWidth));
	});

	document.addEventListener("click", (e) => {
		window.innerWidth <= 1024 &&
			!document.getElementById("sidebar").contains(e.target) &&
			document.getElementById("hamburger") !== e.target &&
			dispatch(setSidebarExpanded(false));
	});

	useEffect(() => {
		// console.log("messages changed");
		// console.log(...messages);
		dispatch(setMessagesCount(messages.length));
		dispatch(setMessagesAtActiveChatIndex({activeChatIndex, messages}));
	}, [messages]);

	useEffect(() => {
		// console.log("chats updated in local storage");
		// console.log(...chats);
		localStorage.setItem("chats", JSON.stringify(chats));
	}, [chats]);

	// const pinnedChatsCount = useSelector(
	// 	(state) => state.pinnedChatsCount.pinnedChatsCount
	// );
	// useEffect(() => {
	// 	console.log("pin chats count updated: ", pinnedChatsCount);
	// }, [pinnedChatsCount]);

	return (
		<div className="flex w-screen dark:bg-slate-900">
			<Sidebar />
			<Page />
		</div>
	);
}
