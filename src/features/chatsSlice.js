import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const chatsSlice = createSlice({
	name: "chats",
	initialState: {
		chats: localStorage.getItem("chats")
			? JSON.parse(localStorage.getItem("chats"))
			: [{ title: "", msgs: [], pinned: false, id: v4() }],
	},
	reducers: {
		setChats: (state, action) => {
			state.chats = action.payload;
		},
		setMessagesAtActiveChatIndex: (state, action) => {
			const { activeChatIndex, messages } = action.payload;
			state.chats[activeChatIndex].msgs = messages;
		},
		updateChatTitle: (state, action) => {
			const { index, title } = action.payload;
			state.chats[index].title = title;
		},
		togglePinChat: (state, action) => {
			const index = action.payload;
			state.chats[index].pinned = !state.chats[index].pinned;
		},
		addChat: (state) => {
			state.chats.unshift({ title: "", msgs: [], pinned: false, id: v4() });
		},
		deleteChat: (state, action) => {
			state.chats = state.chats.filter((_, index) => index !== action.payload);
		},
	},
});

export const {
	setChats,
	setMessagesAtActiveChatIndex,
	updateChatTitle,
	togglePinChat,
	addChat,
	deleteChat,
} = chatsSlice.actions;

export default chatsSlice.reducer;
