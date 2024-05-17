import { createSlice } from "@reduxjs/toolkit";

export const messagesCountSlice = createSlice({
	name: "messagesCount",
	initialState: {
		messagesCount:
			localStorage.getItem("chats") &&
			JSON.parse(localStorage.getItem("chats")).length
				? JSON.parse(localStorage.getItem("chats"))[0].msgs.length
				: 0,
	},
	reducers: {
		setMessagesCount: (state, action) => {
			state.messagesCount = action.payload;
		},
		incMessagesCount: (state) => {
			state.messagesCount++;
		},
	},
});

export const { setMessagesCount, incMessagesCount } =
	messagesCountSlice.actions;

export default messagesCountSlice.reducer;
