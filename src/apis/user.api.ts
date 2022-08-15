import request from "../utils/request";
import { getRefreshToken } from "../utils/auth";

export const postLogin = ({ email, password }: ReqLogin) => {
  return request({
    url: "/authentication/login",
    method: "post",
    data: { email, password }
  });
};

export const postLogout = () => {
  return request({
    url: "/authentication/logout",
    method: "post",
    data: {
      refreshToken: getRefreshToken()
    }
  });
};
