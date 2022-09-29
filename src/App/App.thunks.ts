import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { COIN_MARKETS_URL } from "src/constants";
import { postLogout } from "src/apis/user.api";
import { getProfile, putProfile } from "src/apis/staff.api";

export const doGetProfile = createAsyncThunk("getProfile", async () => {
  const res = await getProfile();
  return res.data;
});

export const doPutProfile = createAsyncThunk(
  "putProfile",
  async (payload: ReqProfile) => {
    await putProfile(payload);
    return payload;
  }
);

export const doLogout = createAsyncThunk("postLogout", async () => {
  await postLogout();
  return;
});

export const doGetTokenMarkets = createAsyncThunk(
  "getTokenMarkets",
  async () => {
    return await axios.get(COIN_MARKETS_URL);
  }
);
