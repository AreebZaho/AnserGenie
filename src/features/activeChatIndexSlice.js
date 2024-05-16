import {createSlice} from "@reduxjs/toolkit";

export const activeChatIndexSlice = createSlice({
	name: "activeChatIndex",
	initialState: {
		activeChatIndex: 0,
	},
	reducers: {
		setActiveChatIndex: (state, action) => {
			state.activeChatIndex = action.payload;
		},
	},
});

export const {setActiveChatIndex} = activeChatIndexSlice.actions;

export default activeChatIndexSlice.reducer;
