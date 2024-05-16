import {setActiveChatIndex} from "./activeChatIndexSlice";
import {setMessages, addMessage, updateLastMessage} from "./messagesSlice";
import {setChatStarted} from "./chatStartedSlice";
import {
	setChats,
	setMessagesAtActiveChatIndex,
	addChat,
	updateChatTitle,
	togglePinChat,
	deleteChat,
} from "./chatsSlice";
import {
	incPinnedChatsCount,
	decPinnedChatsCount,
} from "./pinnedChatsCountSlice";
import {setInput} from "./inputSlice";
import {setLoadingRes} from "./loadingResSlice";
import {setMessagesCount, incMessagesCount} from "./messagesCountSlice";
import {setResult} from "./resultSlice";
import {setSidebarExpanded} from "./sidebarExpandedSlice";
import {setWindowWidth} from "./windowWidthSlice";

export {
	setActiveChatIndex,
	setMessages,
	addMessage,
	updateLastMessage,
	setChatStarted,
	setChats,
	setMessagesAtActiveChatIndex,
	addChat,
	updateChatTitle,
	togglePinChat,
	deleteChat,
	incPinnedChatsCount,
	decPinnedChatsCount,
	setInput,
	setLoadingRes,
	setMessagesCount,
	incMessagesCount,
	setResult,
	setSidebarExpanded,
	setWindowWidth,
};
