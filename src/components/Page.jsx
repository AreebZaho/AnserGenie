import logo from "../assets/logo.png";
import Search from "./Search";
import {useContxt} from "../contexts/context";
import ActiveChat from "./ActiveChat";

export default function Page() {
	const {chatStarted, windowWidth, sidebarExpanded, setSidebarExpanded} =
		useContxt();

	return (
		<div className="flex flex-1">
			<i
				id="hamburger"
				className={
					"absolute z-10 h-6 text-xl cursor-pointer fa-solid top-4 left-6 " +
					(sidebarExpanded ? "fa-close" : "fa-bars")
				}
				onClick={() => {
					setSidebarExpanded(!sidebarExpanded);
				}}
			></i>

			<div className="relative flex-1 h-screen">
				<header
					className={
						"flex justify-between w-full px-4 py-3 dark:bg-slate-800 shadow-md " +
						(chatStarted ? "" : "mb-6")
					}
				>
					<div
						className={
							"flex items-center gap-2 text-lg " +
							(windowWidth <= 1024 ? "ml-10 xs:ml-14" : "")
						}
					>
						<a href="/" className="flex items-center gap-2">
							<img src={logo} alt="" className="h-6" />
							<p
								className="font-semibold xs:mr-8 text-slate-600"
								style={{
									background:
										"-webkit-linear-gradient(16deg, #4b90ff, #ff5546)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}
							>
								AnserGenie
							</p>
						</a>
					</div>
					<div className="flex items-center gap-4 xs:gap-6">
						<div className="flex gap-4 [&_a]:flex [&_a]:items-center [&_a]:justify-center [&>a]:h-5 [&>a]:aspect-square justify-center">
							<a
								href="https://www.linkedin.com/in/areebzahoori/"
								target="_blank"
							>
								<i className="fa-brands fa-linkedin"></i>
							</a>
							<a href="https://github.com/AreebZaho/AnserGenie" target="_blank">
								<i className="fa-brands fa-github"></i>
							</a>
						</div>
						<i className="h-8 text-2xl rounded-full fa-solid fa-user"></i>
					</div>
				</header>
				<ActiveChat />
				<Search />
			</div>
		</div>
	);
}
