import {menu_icon, user_icon} from "../assets/assets";
import Search from "./Search";
import {useContxt} from "../contexts/context";
import Chat from "./Chat";

const Page = () => {
	const {sidebarExpanded, setSidebarExpanded} = useContxt();

	return (
		<>
			<img
				src={menu_icon}
				alt="menu"
				className="absolute z-10 h-6 cursor-pointer top-5 left-5"
				onClick={() => {
					setSidebarExpanded(!sidebarExpanded);
				}}
			/>

			<div className="relative flex-1 h-screen">
				<header className="flex justify-between w-full p-4 mb-8">
					<div className="flex items-center gap-2 text-lg">
						<p
							className={
								"ml-1 text-slate-600 " +
								(window.innerWidth <= 1024 && !sidebarExpanded ? "ml-12" : "")
							}
						>
							Gemeni
						</p>
						<i className="mr-8 fa-solid fa-caret-down"></i>
						<a href="https://www.linkedin.com/in/areebzahoori/" target="_blank">
							<i className="mr-4 fa-brands fa-linkedin"></i>
						</a>
						<a href="https://github.com/AreebZaho" target="_blank">
							<i className="fa-brands fa-github"></i>
						</a>
					</div>
					<img src={user_icon} alt="" className="h-8 rounded-full" />
				</header>

				<Chat />

				<div className="absolute flex flex-col items-center w-full gap-2 px-4 bottom-2">
					<Search />
					<p className="text-xs text-center">
						Gemini may display inaccurate info, including about people, so
						double-check its responses.{" "}
						<span className="underline">Your privacy & Gemini Apps</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default Page;
