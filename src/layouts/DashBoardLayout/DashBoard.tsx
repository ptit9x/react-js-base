import { Box } from "@mui/material";
import { ReactNode } from "react";
import { DashBoardStyle } from "./DashBoard.styled";
interface DashBoardLayoutProps {
  main?: ReactNode;
  sideRight?: ReactNode;
  disableSide?: boolean;
}

const DashBoardLayout = ({
  main,
  sideRight,
  disableSide
}: DashBoardLayoutProps) => {
  return (
    <DashBoardStyle>
      <Box sx={{ gridArea: "main" }}>{main}</Box>
      <Box sx={{ gridArea: "network", bgcolor: "secondary.main" }}>NetWork</Box>
      {!disableSide && <Box sx={{ gridArea: "sidebar" }}>{sideRight}</Box>}
    </DashBoardStyle>
  );
};

export default DashBoardLayout;
