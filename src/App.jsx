import {useState, useEffect} from "react";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import {ContextProvider} from "./contexts/context";

export default function App() {
	const [darkTheme, setDarkTheme] = useState(false);
	useEffect(() => {
		const darkActive = localStorage.getItem("darkActive");
		if (darkActive && darkActive === "true") {
			setDarkTheme(true);
		}
	}, []);
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
	window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

	const [sidebarExpanded, setSidebarExpanded] = useState(
		windowWidth > 1280 ? true : false
	);
	const [input, setInput] = useState("");
	const [chatStarted, setChatStarted] = useState(false);

	const [answer, setAnswer] = useState("");
	const [loadingAns, setLoadingAns] = useState(false);

	const [messages, setMessages] = useState([]);
	const [messagesCount, setMessagesCount] = useState(0);
	const [chats, setChats] = useState([]);

	return (
		<ContextProvider
			value={{
				darkTheme,
				setDarkTheme,
				windowWidth,
				setWindowWidth,
				sidebarExpanded,
				setSidebarExpanded,
				input,
				setInput,
				chatStarted,
				setChatStarted,
				answer,
				setAnswer,
				loadingAns,
				setLoadingAns,
				messages,
				setMessages,
				messagesCount,
				setMessagesCount,
				chats,
				setChats,
			}}
		>
			<div className="flex w-screen dark:bg-slate-900">
				<Sidebar />
				<Page />
			</div>
		</ContextProvider>
	);
}
