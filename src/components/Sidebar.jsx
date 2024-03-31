import Recents from "./Recents";
import {useContxt} from "../contexts/context";

const Sidebar = () => {
	const {darkTheme, setDarkTheme, windowWidth, sidebarExpanded} = useContxt();
	return (
		<div
			id="sidebar"
			className={
				"h-screen absolute lg:relative duration pt-20 duration-300 transition-all max-lg:z-10 dark:text-white lg:dark:bg-slate-700 bg-transparent backdrop-blur-lg lg:bg-[#f0f4f9] " +
				(sidebarExpanded
					? "w-[calc(85vw)] xs:w-[calc(60vw)] lg:w-[264px] pl-6"
					: windowWidth > 1024
					? "w-[68px] pl-2"
					: "w-0")
			}
		>
			<button
				className={
					"flex items-center gap-4 px-4 py-2 mb-8 font-semibold bg-gray-200 rounded-full dark:bg-gray-600 " +
					(sidebarExpanded
						? ""
						: "ml-[3.5px] " + (windowWidth > 1024 ? "" : "hidden"))
				}
			>
				<i className="fa-solid fa-plus"></i>
				<p className={"text-nowrap " + (sidebarExpanded ? "" : "hidden")}>
					New Chat
				</p>
			</button>

			<div className={sidebarExpanded ? "" : "hidden"}>
				<p className="mb-4 ml-2 font-semibold">Recents</p>
				<Recents />
			</div>

			<div
				className={
					"absolute bottom-[calc(2vh)] flex flex-col [&>div]:sidebar-option [&_p]:font-semibold [&_img]:h-6 " +
					(!sidebarExpanded && windowWidth <= 1024 ? "hidden" : "")
				}
			>
				<div onClick={() => setDarkTheme((prev) => !prev)}>
					<input
						type="checkbox"
						id="toggleDark"
						className="hidden"
						onClick={() => setDarkTheme((prev) => !prev)}
					/>
					<label
						htmlFor="toggleDark"
						className="flex items-center gap-4 ml-0.5 cursor-pointer"
					>
						<i className="flex items-center text-xl fa-solid fa-moon"></i>
						<p className={"text-nowrap " + (sidebarExpanded ? "" : "hidden")}>
							Dark Theme
						</p>
						<span
							id="toggleDarkSlider"
							className={
								"relative inline-block w-10 h-6 transition-colors duration-300 bg-gray-300 rounded-full " +
								(sidebarExpanded ? "" : "hidden ") +
								(darkTheme ? "bg-slate-900" : "")
							}
						>
							<span
								className={
									"absolute w-4 h-4 transition-transform duration-300 transform bg-white rounded-full shadow-md top-1 left-1 " +
									(darkTheme ? "translate-x-4" : "")
								}
							></span>
						</span>
					</label>
				</div>
				<div>
					<i className="text-xl fa-regular fa-circle-question"></i>
					<p className={sidebarExpanded ? "" : "hidden"}>Help</p>
				</div>
				<div>
					<i className="text-xl fa-solid fa-clock-rotate-left"></i>
					<p className={sidebarExpanded ? "" : "hidden"}>Activity</p>
				</div>
				<div>
					<i className="text-xl fa-solid fa-gear"></i>
					<p className={sidebarExpanded ? "" : "hidden"}>Settings</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
