import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		// as toh mtlb ess reducers-object meh reducer-functions hotehh hai, and apn jantehhh hai ki reducer-functions store ko mtlb store ki state ko manipulate krne k liyeh use hotehh hai.
		loginStart: (state) => {
			state.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		loginFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		logout: (state) => {
			state.currentUser = null;
			state.isFetching = false;
			state.error = false;
			console.log("okay logged out");
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logout } =
	userSlice.actions;
export default userSlice.reducer;
