import {useState, useEffect} from "react";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import {ContextProvider} from "./contexts/context";

function App() {
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
		windowWidth > 1024 ? true : false
	);
	const [input, setInput] = useState("");
	const [chatStarted, setChatStarted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState("");

	const [chat, setChat] = useState([]);
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
				loading,
				setLoading,
				result,
				setResult,
				chat,
				setChat,
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

export default App;
