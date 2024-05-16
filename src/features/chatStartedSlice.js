import {createSlice} from "@reduxjs/toolkit";

export const chatStartedSlice = createSlice({
	name: "chatStarted",
	initialState: {
		chatStarted:
			localStorage.getItem("chats") &&
			JSON.parse(localStorage.getItem("chats")).length &&
			JSON.parse(localStorage.getItem("chats"))[0].msgs.length ? true : false,
	},
	reducers: {
		setChatStarted: (state, action) => {
			state.chatStarted = action.payload;
		},
	},
});

export const {setChatStarted} = chatStartedSlice.actions;

export default chatStartedSlice.reducer;
