import request from "../utils/request";

export const getList = () => {
  return request({
    url: "/staffs?page=1&limit=10",
    method: "get"
  });
};

export const getProfile = () => {
  return request({
    url: "/staffs/profile",
    method: "get"
  });
};

export const putProfile = (dataProfile: ReqProfile) => {
  return request({
    url: "/staffs/profile",
    method: "put",
    data: dataProfile
  });
};

export const putResetPassword = (newPassword: string) => {
  return request({
    url: "/staffs/reset-password",
    method: "put",
    data: {
      newPassword
    }
  });
};
