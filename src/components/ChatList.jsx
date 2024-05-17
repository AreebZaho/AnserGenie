import PropTypes from "prop-types";
import ChatListItem from "./ChatListItem";
import { useSelector } from "react-redux";

export default function ChatList({ title }) {
	const sidebarExpanded = useSelector(
		(state) => state.sidebarExpanded.sidebarExpanded
	);
	const chats = useSelector((state) => state.chats.chats);

	const pinnedStatus = title === "Pinned";

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
				}>
				{chats.map((chat, index) => {
					if ((pinnedStatus && chat.pinned) || (!pinnedStatus && !chat.pinned))
						return <ChatListItem key={chat.id} index={index} />;
				})}
			</div>
		</>
	);
}

ChatList.propTypes = {
	title: PropTypes.string,
};
