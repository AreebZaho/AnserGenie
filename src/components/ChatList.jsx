import PropTypes from "prop-types";
import {useContxt} from "../contexts/context";
import ChatListItem from "./ChatListItem";

export default function ChatList({title}) {
	const {sidebarExpanded, chats} = useContxt();

	const pinned = title === "Pinned";

	return (
		<>
			<p className={"font-semibold " + (sidebarExpanded ? "" : "hidden")}>
				{title}
			</p>
			<div
				id="chatList"
				className={
					"flex flex-col gap-2 -mt-4 py-1 h-[288px] overflow-y-auto w-full " +
					(sidebarExpanded ? "" : "hidden")
				}
			>
				{chats.map((chat, index) => {
					if ((pinned && chat.pinned) || (!pinned && !chat.pinned))
						return <ChatListItem key={index} index={index} />;
				})}
			</div>
		</>
	);
}

ChatList.propTypes = {
	title: PropTypes.string,
};
