import {
	plus_icon,
	question_icon,
	history_icon,
	setting_icon,
} from "../assets/assets";
import Recents from "./Recents";
import {useContxt} from "../contexts/context";

const Sidebar = () => {
	const {sidebarExpanded} = useContxt();
	return (
		<div className="absolute lg:relative">
			<div
				id="sidebar"
				className={
					"h-screen bg-gemini-gray relative duration pt-20 duration-300 transition-all max-lg:bg-transparent max-lg:backdrop-blur-lg max-lg:z-10 " +
					(sidebarExpanded
						? "w-[calc(75vw)] xsm:w-[calc(60vw)] lg:w-[264px] pl-6"
						: "pl-1.5 " + (window.innerWidth > 1024 ? "w-[68px]" : "w-0"))
				}
			>
				<button
					className={
						"flex items-center gap-4 px-4 py-2 mb-8 font-semibold bg-gray-200 rounded-full " +
						(sidebarExpanded
							? ""
							: "ml-[3.5px] " + (window.innerWidth > 1024 ? "" : "hidden"))
					}
				>
					<img src={plus_icon} alt="+" className="h-6" />
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
						"absolute bottom-16 flex flex-col gap-4 [&>div]:sidebar-options [&_p]:font-semibold [&_img]:h-6 " +
						(!sidebarExpanded && window.innerWidth <= 1024 ? "hidden" : "")
					}
				>
					<div>
						<input type="checkbox" id="toggleDark" className="hidden" />
						<label
							htmlFor="toggleDark"
							className="flex items-center gap-4 ml-1 cursor-pointer"
							onClick={() => {
								document.querySelector("html").classList.toggle("dark");
							}}
						>
							<i className="flex items-center text-xl fa-solid fa-moon"></i>
							<p className={"text-nowrap " + (sidebarExpanded ? "" : "hidden")}>
								Dark Theme
							</p>
							<span
								className={
									"relative inline-block w-10 h-6 transition-colors duration-300 bg-gray-300 rounded-full " +
									(sidebarExpanded ? "" : "hidden")
								}
							>
								<span className="absolute w-4 h-4 transition-transform duration-300 transform translate-x-0 bg-white rounded-full shadow-md top-1 left-1"></span>
							</span>
						</label>
					</div>
					<div>
						<img src={question_icon} alt="" />
						<p className={sidebarExpanded ? "" : "hidden"}>Help</p>
					</div>
					<div>
						<img src={history_icon} alt="" />
						<p className={sidebarExpanded ? "" : "hidden"}>Activity</p>
					</div>
					<div>
						<img src={setting_icon} alt="" />
						<p className={sidebarExpanded ? "" : "hidden"}>Settings</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
