import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, putProfile } from "../apis/staff.api";
import { postLogout } from "../apis/user.api";

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
