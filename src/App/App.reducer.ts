import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Wallet from "../common/Wallet";
interface AppInterface {
  wallet: Wallet;
}

const initialState: AppInterface = {
  wallet: new Wallet("")
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setWallet: (state, action: PayloadAction<Wallet>) => {
      state.wallet = action.payload;
    }
  },
  extraReducers: {}
});

export default appSlice.reducer;
