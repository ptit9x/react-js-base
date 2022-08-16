import React from "react";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const handleLanguage = e => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <h3>{t("navigation")}</h3>
      <select onChange={handleLanguage}>
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};
export default Navigation;
