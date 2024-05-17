import { configureStore } from "@reduxjs/toolkit";
import activeChatIndexReducer from "../features/activeChatIndexSlice";
import chatStartedReducer from "../features/chatStartedSlice";
import inputReducer from "../features/inputSlice";
import loadingResReducer from "../features/loadingResSlice";
import messagesCountReducer from "../features/messagesCountSlice";
import pinnedChatsCountReducer from "../features/pinnedChatsCountSlice";
import resultReducer from "../features/resultSlice";
import sidebarExpandedReducer from "../features/sidebarExpandedSlice";
import windowWidthReducer from "../features/windowWidthSlice";
import messagesReducer from "../features/messagesSlice";
import chatsReducer from "../features/chatsSlice";

export const store = configureStore({
	reducer: {
		activeChatIndex: activeChatIndexReducer,
		chatStarted: chatStartedReducer,
		input: inputReducer,
		loadingRes: loadingResReducer,
		messagesCount: messagesCountReducer,
		pinnedChatsCount: pinnedChatsCountReducer,
		result: resultReducer,
		sidebarExpanded: sidebarExpandedReducer,
		windowWidth: windowWidthReducer,
		messages: messagesReducer,
		chats: chatsReducer,
	},
});
