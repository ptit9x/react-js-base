import React from "react";
import LoginComponent from "../../components/Login/Login";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <LoginComponent />
    </AuthLayout>
  );
};
export default Login;
