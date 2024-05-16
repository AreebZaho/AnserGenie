import {createSlice} from "@reduxjs/toolkit";

export const loadingResSlice = createSlice({
	name: "loadingRes",
	initialState: {
		loadingRes: false,
	},
	reducers: {
		setLoadingRes: (state, action) => {
			state.loadingRes = action.payload;
		},
	},
});

export const {setLoadingRes} = loadingResSlice.actions;

export default loadingResSlice.reducer;
