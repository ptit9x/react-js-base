import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("auth-layout")}</p>
      {children}
    </div>
  );
};
export default AuthLayout;
