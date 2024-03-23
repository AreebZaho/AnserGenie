import {useId} from "react";

const Recents = () => {
	const chatSettingsId = useId();

	function toggleChatSettings() {
		document.getElementById(chatSettingsId).classList.toggle("hidden");
	}

	return (
		<div className="-ml-3">
			<div className="rounded-full bg-[#d3e3fd] flex items-center px-4 w-[95%] justify-between cursor-pointer h-10 dark:bg-gray-600">
				<div className="flex items-center gap-3">
					<i className="flex items-center h-6 text-xl fa-regular fa-message"></i>
					<p className="font-semibold">Chat</p>
				</div>

				<div className="relative -mr-2">
					<div
						className="flex items-center justify-center w-8 h-8 p-2 rounded-full hover:bg-white dark:hover:bg-slate-800"
						onClick={toggleChatSettings}
					>
						<i className="cursor-pointer fa-solid fa-ellipsis-vertical"></i>
					</div>

					<div
						id={chatSettingsId}
						className="absolute z-10 -top-1 left-12 p-2 rounded-lg hidden flex-col gap-6 shadow-xl bg-white [&>div]:recent-chat-settings-option [&_i]:text-sm dark:bg-slate-700"
					>
						<div
							className="hover:bg-blue-200"
							onClick={() => {
								toggleChatSettings();
							}}
						>
							<i
								className="fa-solid fa-thumbtack"
								style={{color: "rgb(59, 130, 246"}}
							></i>
							<p>Pin</p>
						</div>
						<div
							className="hover:bg-amber-100"
							onClick={() => {
								toggleChatSettings();
							}}
						>
							<i
								className="-mr-1 fa-solid fa-pen"
								style={{color: "rgb(202, 138, 4"}}
							></i>
							<p>Rename</p>
						</div>
						<div
							className="hover:bg-red-200"
							onClick={() => {
								toggleChatSettings();
							}}
						>
							<i
								className="-mr-0.5 fa-solid fa-trash"
								style={{color: "rgb(220, 38, 38"}}
							></i>
							<p>Delete</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recents;
