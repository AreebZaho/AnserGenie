import { createSlice } from "@reduxjs/toolkit";

export const windowWidthSlice = createSlice({
	name: "windowWidth",
	initialState: {
		windowWidth: window.innerWidth,
	},
	reducers: {
		setWindowWidth: (state, action) => {
			state.windowWidth = action.payload;
		},
	},
});

export const { setWindowWidth } = windowWidthSlice.actions;

export default windowWidthSlice.reducer;
