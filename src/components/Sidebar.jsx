import {useState, useEffect} from "react";
import {
	menu_icon,
	plus_icon,
	question_icon,
	history_icon,
	setting_icon,
} from "../assets/assets";
import Recents from "./Recents";

const Sidebar = () => {
	return (
		<div className="relative">
			<img
				src={menu_icon}
				alt="menu"
				className="absolute z-10 h-6 cursor-pointer top-6 left-6"
				onClick={() => {
					document
						.getElementById("sidebar")
						.classList.toggle("-translate-x-[264px]");
					document.getElementById("sidebar").classList.toggle("hidden");
				}}
			/>
			<div
				id="sidebar"
				className="h-screen pl-6 bg-gemini-gray w-[264px] relative duration pt-20 duration-300 transition-all"
			>
				<button className="flex items-center gap-4 px-4 py-2 mb-8 font-semibold bg-gray-200 rounded-full">
					<img src={plus_icon} alt="+" className="h-6" />
					New Chat
				</button>

				<p className="mb-4 ml-2 font-semibold">Recents</p>
				<Recents />

				<div className="absolute bottom-16 flex flex-col gap-4 [&>div]:sidebar-options [&_p]:font-semibold [&_img]:h-6">
					<div>
						<input type="checkbox" id="toggleDark" className="hidden" />
						<label
							htmlFor="toggleDark"
							className="flex items-center gap-4 ml-1 cursor-pointer"
						>
							<i className="flex items-center text-xl fa-solid fa-moon"></i>
							<p>Dark Theme</p>
							<span className="relative inline-block w-10 h-6 transition-colors duration-300 bg-gray-300 rounded-full">
								<span className="absolute w-4 h-4 transition-transform duration-300 transform translate-x-0 bg-white rounded-full shadow-md top-1 left-1"></span>
							</span>
						</label>
					</div>
					<div>
						<img src={question_icon} alt="" />
						<p>Help</p>
					</div>
					<div>
						<img src={history_icon} alt="" />
						<p>Activity</p>
					</div>
					<div>
						<img src={setting_icon} alt="" />
						<p>Settings</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
