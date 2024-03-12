import Card from "./Card";
import {
	compass_icon,
	bulb_icon,
	gallery_icon2,
	code_icon,
	user_icon,
} from "../assets/assets";
import Search from "./Search";

const Page = () => {
	return (
		<div className="relative flex-1">
			<header className="flex justify-between w-full p-4 mb-8">
				<div className="flex items-center gap-2 -mt-2 text-lg">
					<p className="ml-1 text-slate-600">Gemeni</p>
					<i className="fa-solid fa-caret-down"></i>
				</div>
				<img src={user_icon} alt="" className="h-8 rounded-full" />
			</header>
			<div className="absolute flex flex-col items-center w-full m-auto">
				<p className="mb-20 font-sans text-5xl font-semibold leading-tight text-[#c4c7c5]">
					<span className="welcome-heading">Hello there </span>👋
					<br />
					How can I help you today?
				</p>
				<div className="flex gap-2">
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
			<div className="absolute inset-x-0 flex flex-col items-center gap-2 m-auto w-fit bottom-2">
				<Search />
				<p className="text-xs">
					Gemini may display inaccurate info, including about people, so
					double-check its responses.{" "}
					<span className="underline">Your privacy & Gemini Apps</span>
				</p>
			</div>
		</div>
	);
};

export default Page;
