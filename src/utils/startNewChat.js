import {
	setChatStarted,
	setActiveChatIndex,
	setMessages,
	addChat,
} from "../features";

export const startNewChat = (dispatch) => {
	dispatch(setChatStarted(false));
	dispatch(setActiveChatIndex(0));
	dispatch(setMessages([]));
	dispatch(addChat());
	window.innerWidth > 1024 && document.querySelector(".search").focus();
};
