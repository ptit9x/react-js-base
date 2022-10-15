import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doGetTokenMarkets } from "./App.thunks";
import Wallet from "../common/Wallet";

interface AppInterface {
  wallet: Wallet;
  tokens: Token[];
}

const initialState: AppInterface = {
  wallet: new Wallet(""),
  tokens: []
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setWallet: (state, action: PayloadAction<Wallet>) => {
      state.wallet = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(doGetTokenMarkets.fulfilled, (state, action) => {
      //@ts-ignore
      state.tokens = action.payload.data;
    });
  }
});

export const appReducer = appSlice.reducer;
export default appSlice.reducer;
