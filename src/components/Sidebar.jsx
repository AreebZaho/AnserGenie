import ChatList from "./ChatList";
import { useSelector, useDispatch } from "react-redux";
import { startNewChat } from "../utils/startNewChat";

export default function Sidebar() {
	const dispatch = useDispatch();
	const windowWidth = useSelector((state) => state.windowWidth.windowWidth);
	const chatStarted = useSelector((state) => state.chatStarted.chatStarted);
	const loadingRes = useSelector((state) => state.loadingRes.loadingRes);
	const pinnedChatsCount = useSelector(
		(state) => state.pinnedChatsCount.pinnedChatsCount
	);
	const sidebarExpanded = useSelector(
		(state) => state.sidebarExpanded.sidebarExpanded
	);
	const chats = useSelector((state) => state.chats.chats);

	return (
		<div
			id="sidebar"
			className={
				"absolute z-10 flex flex-col items-center gap-5 h-screen lg:relative duration pt-16 duration-300 transition-all max-lg:z-10 dark:text-white lg:dark:bg-slate-700 lg:bg-[#f0f4f9] max-lg:rounded-r-2xl backdrop-blur-lg shadow-xl " +
				(sidebarExpanded
					? "w-full xxs:w-[calc(80vw)] xs:w-[calc(65vw)] sm:w-[calc(45vw)] md:w-[calc(40vw)] lg:w-[264px]"
					: windowWidth > 1024
					? "w-[68px]"
					: "w-0")
			}>
			<div
				className={
					"px-4 py-2 w-fit rounded-full cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600 z-20 " +
					(!sidebarExpanded && windowWidth <= 1024 ? "hidden" : "")
				}
				onClick={(e) => {
					if (e.target.nodeName !== "INPUT") {
						if (document.querySelector("html").classList.contains("dark")) {
							document.querySelector("html").classList.remove("dark");
							localStorage.setItem("darkActive", "false");
						} else {
							document.querySelector("html").classList.add("dark");
							localStorage.setItem("darkActive", "true");
						}
						document
							.getElementById("toggleDarkSlider")
							.classList.toggle("translate-x-6");
					}
				}}>
				<div className="flex items-center gap-4 cursor-pointer">
					<i className="flex items-center text-xl fa-solid fa-moon"></i>
					<p
						className={
							"text-nowrap font-semibold " + (sidebarExpanded ? "" : "hidden")
						}>
						Dark Theme
					</p>
					<span
						className={
							"relative inline-block w-12 h-6 transition-colors duration-300 rounded-full bg-gray-600 dark:bg-slate-300 " +
							(sidebarExpanded ? "" : "hidden")
						}>
						<span
							id="toggleDarkSlider"
							className={
								"absolute w-4 h-4 transition-transform duration-300 transform rounded-full shadow-md top-1 left-1 bg-white dark:bg-black"
							}></span>
					</span>
				</div>
			</div>
			<button
				className={
					"flex items-center gap-4 px-4 py-2 font-semibold transition-all duration-150 bg-gray-200 rounded-full dark:bg-gray-600 hover:bg-gray-300 hover:scale-105 active:scale-95 border-2 border-black " +
					(!sidebarExpanded && windowWidth <= 1024 ? "hidden " : "") +
					(!chatStarted || loadingRes ? "cursor-not-allowed" : "")
				}
				onClick={() => {
					if (!loadingRes && chatStarted) startNewChat(dispatch);
				}}>
				<i className="fa-solid fa-plus"></i>
				<p className={"text-nowrap " + (sidebarExpanded ? "" : "hidden")}>
					New Chat
				</p>
			</button>
			{chats.length - pinnedChatsCount ? <ChatList title={"Recents"} /> : null}
			{pinnedChatsCount ? <ChatList title={"Pinned"} /> : null}
		</div>
	);
}
