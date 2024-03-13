import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import {SidebarProvider} from "./contexts/sidebar";
import {useState} from "react";

function App() {
	const [expanded, setExpanded] = useState(
		window.innerWidth > 1024 ? true : false
	);

	return (
		<SidebarProvider value={{expanded, setExpanded}}>
			<div className="flex w-screen">
				<Sidebar />
				<Page />
			</div>
		</SidebarProvider>
	);
}

export default App;
