import {createSlice} from "@reduxjs/toolkit";

export const pinnedChatsCountSlice = createSlice({
	name: "pinnedChatsCount",
	initialState: {
		pinnedChatsCount:
			(localStorage.getItem("chats") &&
				JSON.parse(localStorage.getItem("chats")).filter((chat) => chat.pinned)
					.length) ||
			0,
	},
	reducers: {
		incPinnedChatsCount: (state) => {
			state.pinnedChatsCount++;
		},
		decPinnedChatsCount: (state) => {
			state.pinnedChatsCount--;
		},
	},
});

export const {incPinnedChatsCount, decPinnedChatsCount} =
	pinnedChatsCountSlice.actions;

export default pinnedChatsCountSlice.reducer;
