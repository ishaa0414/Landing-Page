import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userId: "",
	user: null,
	token: "",
};

const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
		saveUserData: (state, { payload }) => {
            state.user = JSON.parse(payload);
			state.userId = state.user._id;
		},

		saveTokenData: (state, { payload }) => {
			state.token = payload;
		},
	},
});

export const { saveUserData, saveTokenData } = authSlice.actions;
export default authSlice.reducer;
