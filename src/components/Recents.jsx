import {message_icon} from "../assets/assets";

const Recents = () => {
	return (
		<div className="-ml-3">
			<div className="rounded-full bg-[#d3e3fd] flex items-center px-4 py-2 w-[95%] justify-between cursor-pointer h-12">
				<div className="flex items-center gap-3">
					<img src={message_icon} alt="" className="h-6" />
					<p className="font-semibold">Chat</p>
				</div>
				<div className="relative hidden -mr-2">
					<div className="flex items-center justify-center w-8 h-8 p-2 rounded-full hover:bg-white">
						<i className="cursor-pointer fa-solid fa-ellipsis-vertical"></i>
					</div>
					<div className="absolute z-10 -top-1 left-12 p-2 rounded-lg flex flex-col gap-4 shadow-xl bg-white [&>div]:recent-chat-settings [&_i]:text-sm">
						<div>
							<i className="fa-solid fa-thumbtack"></i>
							<p>Pin</p>
						</div>
						<div>
							<i className="fa-solid fa-pen"></i>
							<p>Rename</p>
						</div>
						<div>
							<i className="fa-solid fa-trash"></i>
							<p>Delete</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recents;
