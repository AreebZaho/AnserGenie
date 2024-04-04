import ChatList from "./ChatList";
import {useContxt} from "../contexts/context";

export default function Sidebar() {
	const {
		darkTheme,
		setDarkTheme,
		windowWidth,
		sidebarExpanded,
		chatStarted,
		loadingRes,
		chats,
		startNewChat,
		pinnedChatsCount,
	} = useContxt();

	return (
		<div
			className={
				"absolute z-10 flex flex-col items-center gap-5 h-screen lg:relative duration pt-16 duration-300 transition-all max-lg:z-10 dark:text-white dark:bg-slate-700 bg-[#e1e5eb] lg:bg-[#f0f4f9] max-lg:rounded-r-2xl " +
				(sidebarExpanded
					? "w-full xxs:w-[calc(80vw)] xs:w-[calc(65vw)] sm:w-[calc(45vw)] md:w-[calc(40vw)] lg:w-[264px]"
					: windowWidth > 1024
					? "w-[68px]"
					: "w-0")
			}
		>
			<div
				className={
					"px-4 py-2 w-fit rounded-full cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600 " +
					(!sidebarExpanded && windowWidth <= 1024 ? "hidden" : "")
				}
				onClick={() => setDarkTheme((prev) => !prev)}
			>
				<input
					type="checkbox"
					id="toggleDark"
					className="hidden"
					onClick={() => setDarkTheme((prev) => !prev)}
				/>
				<label
					htmlFor="toggleDark"
					className="flex items-center gap-4 cursor-pointer"
				>
					<i className="flex items-center text-xl fa-solid fa-moon"></i>
					<p
						className={
							"text-nowrap font-semibold " + (sidebarExpanded ? "" : "hidden")
						}
					>
						Dark Theme
					</p>
					<span
						id="toggleDarkSlider"
						className={
							"relative inline-block w-12 h-6 transition-colors duration-300 rounded-full " +
							(sidebarExpanded ? "" : "hidden ") +
							(darkTheme ? "bg-slate-300" : "bg-gray-600")
						}
					>
						<span
							className={
								"absolute w-4 h-4 transition-transform duration-300 transform rounded-full shadow-md top-1 left-1 " +
								(darkTheme ? "translate-x-6 bg-black" : "bg-white")
							}
						></span>
					</span>
				</label>
			</div>
			<button
				className={
					"flex items-center gap-4 px-4 py-2 font-semibold transition-all duration-150 bg-gray-200 rounded-full dark:bg-gray-600 hover:bg-gray-300 hover:scale-105 active:scale-95 border-2 border-black " +
					(!sidebarExpanded && windowWidth <= 1024 ? "hidden " : "") +
					(!chatStarted || loadingRes ? "cursor-not-allowed" : "")
				}
				onClick={() => {
					if (!loadingRes && chatStarted) startNewChat();
				}}
			>
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
