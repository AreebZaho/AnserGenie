import {useId} from "react";
import {message_icon} from "../assets/assets";

const Recents = () => {
	const chatSettingsId = useId();

	function toggleChatSettings() {
		document.getElementById(chatSettingsId).classList.toggle("hidden");
	}

	return (
		<div className="-ml-3">
			<div className="rounded-full bg-[#d3e3fd] flex items-center px-4 py-2 w-[95%] justify-between cursor-pointer h-12">
				<div className="flex items-center gap-3">
					<img src={message_icon} alt="" className="h-6" />
					<p className="font-semibold">Chat</p>
				</div>

				<div className="relative -mr-2">
					<div
						className="flex items-center justify-center w-8 h-8 p-2 rounded-full hover:bg-white"
						onClick={toggleChatSettings}
					>
						<i className="cursor-pointer fa-solid fa-ellipsis-vertical"></i>
					</div>

					<div
						id={chatSettingsId}
						className="absolute z-10 -top-1 left-12 p-2 rounded-lg hidden flex-col gap-4 shadow-xl bg-white [&>div]:recent-chat-settings [&_i]:text-sm"
					>
						<div
							onClick={() => {
								toggleChatSettings();
							}}
						>
							<i className="fa-solid fa-thumbtack"></i>
							<p>Pin</p>
						</div>
						<div
							onClick={() => {
								toggleChatSettings();
							}}
						>
							<i className="-mr-0.5 fa-solid fa-trash"></i>
							<p>Delete</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recents;
