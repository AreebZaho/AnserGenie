import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
	name: "messages",
	initialState: {
		messages:
			localStorage.getItem("chats") &&
			JSON.parse(localStorage.getItem("chats")).length
				? JSON.parse(localStorage.getItem("chats"))[0].msgs
				: [],
	},
	reducers: {
		setMessages: (state, action) => {
			state.messages = action.payload;
		},
		addMessage: (state, action) => {
			state.messages.push(action.payload);
		},
		updateLastMessage: (state, action) => {
			const { key, val } = action.payload;
			state.messages[state.messages.length - 1][key] = val;
		},
	},
});

export const { setMessages, addMessage, updateLastMessage } =
	messagesSlice.actions;

export default messagesSlice.reducer;
