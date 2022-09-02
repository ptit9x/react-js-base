import { createSlice } from "@reduxjs/toolkit";

interface MainLayoutState {
  isOpenSidebar: boolean;
}

const initialState: MainLayoutState = {
  isOpenSidebar: false
};

export const mainLayoutSlice = createSlice({
  name: "mainLayout",
  initialState: initialState,
  reducers: {
    onOpenSidebar: (state: MainLayoutState) => {
      state.isOpenSidebar = true;
    },
    onCloseSidebar: (state: MainLayoutState) => {
      state.isOpenSidebar = false;
    }
  }
});

export const { onOpenSidebar, onCloseSidebar } = mainLayoutSlice.actions;
export default mainLayoutSlice.reducer;
