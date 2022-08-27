import React from "react";
import { BottomNavigation } from "@mui/material";
const Footer = () => {
  return (
    <div
      style={{
        justifySelf: "flex-end",
        alignSelf: "end",
        width: "100%",
        backgroundColor: "#fff",
        minHeight: "68px"
      }}
    >
      Footer
      <BottomNavigation />
    </div>
  );
};

export default Footer;
