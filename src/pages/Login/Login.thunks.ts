import { createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin } from "../../apis/user.api";

export const doLogin = createAsyncThunk(
  "postLogin",
  async (payload: ReqLogin) => {
    const res = await postLogin(payload);
    return res.data;
  }
);
