import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import {ContextProvider} from "./contexts/context";
import {useState} from "react";

function App() {
	const [sidebarExpanded, setSidebarExpanded] = useState(
		window.innerWidth > 1024 ? true : false
	);
	const [input, setInput] = useState("");
	const [chatStarted, setChatStarted] = useState(false);
	const [result, setResult] = useState("");

	return (
		<ContextProvider
			value={{sidebarExpanded, setSidebarExpanded, input, setInput, chatStarted, setChatStarted, result, setResult}}
		>
			<div className="flex w-screen">
				<Sidebar />
				<Page />
			</div>
		</ContextProvider>
	);
}

export default App;
