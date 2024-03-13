import Card from "./Card";
import {
	menu_icon,
	compass_icon,
	bulb_icon,
	gallery_icon2,
	code_icon,
	user_icon,
} from "../assets/assets";
import Search from "./Search";
import {useSidebar} from "../contexts/sidebar";

const Page = () => {
	const {expanded, setExpanded} = useSidebar();
	return (
		<>
			<img
				src={menu_icon}
				alt="menu"
				className="absolute z-10 h-6 cursor-pointer top-5 left-5"
				onClick={() => {
					setExpanded(!expanded);
				}}
			/>
			<div className="relative flex-1 h-screen">
				<header className="flex justify-between w-full p-4 mb-8">
					<div className="flex items-center gap-2 text-lg">
						<p
							className={
								"ml-1 text-slate-600 " +
								(window.innerWidth <= 1024 && !expanded ? "ml-12" : "")
							}
						>
							Gemeni
						</p>
						<i className="fa-solid fa-caret-down"></i>
					</div>
					<img src={user_icon} alt="" className="h-8 rounded-full" />
				</header>

				<div className="absolute flex flex-col items-center w-full gap-12 m-auto xl:gap-20">
					<p className="font-sans text-4xl md:text-5xl font-semibold leading-tight text-[#c4c7c5]">
						<span className="welcome-heading">Hello there </span>👋
						<br />
						How can I help you today?
					</p>
					<div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
						<Card
							title="Suggest the best parks to visit in a city with descriptions..."
							logo={compass_icon}
						/>
						<Card
							title="Help me compare these college majors..."
							logo={bulb_icon}
						/>
						<Card
							title="Generate the code for a button with HTML and CSS..."
							logo={code_icon}
						/>
						<Card
							title="Write a birthday message for a 12 year old..."
							logo={gallery_icon2}
						/>
					</div>
				</div>

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
