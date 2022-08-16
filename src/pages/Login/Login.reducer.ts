import { createSlice } from "@reduxjs/toolkit";
import { doLogin } from "./Login.thunks";
import { setToken, setRefreshToken } from "../../utils/auth";

interface LoginInterface {
  loading: boolean;
  error: string;
  isLoginSuccess: boolean;
}

const initialState: LoginInterface = {
  loading: false,
  error: "",
  isLoginSuccess: false
};

export const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    changeInput(state) {
      state.error = "";
    }
  },
  extraReducers: builder => {
    builder
      .addCase(doLogin.pending, state => {
        state.loading = true;
        state.isLoginSuccess = false;
      })
      .addCase(doLogin.fulfilled, (state, action) => {
        setToken(action.payload.accessToken);
        setRefreshToken(
          action.payload.refreshToken,
          action.payload.refreshExpiresIn
        );
        state.loading = false;
        state.isLoginSuccess = true;
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  }
});

export const { changeInput } = loginSlice.actions;

export default loginSlice.reducer;
