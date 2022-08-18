import { createSlice } from "@reduxjs/toolkit";

interface AccessWalletInterface {
  isAccessSuccess: boolean;
}

const initialState: AccessWalletInterface = {
  isAccessSuccess: false
};

export const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    changeInput(state) {
      state.isAccessSuccess = true;
    }
  }
});

export const { changeInput } = loginSlice.actions;

export default loginSlice.reducer;
