import { createSlice } from "@reduxjs/toolkit";

export const sidebarExpandedSlice = createSlice({
	name: "sidebarExpanded",
	initialState: {
		sidebarExpanded: window.innerWidth > 1280,
	},
	reducers: {
		setSidebarExpanded: (state, action) => {
			state.sidebarExpanded = action.payload;
		},
	},
});

export const { setSidebarExpanded } = sidebarExpandedSlice.actions;

export default sidebarExpandedSlice.reducer;
