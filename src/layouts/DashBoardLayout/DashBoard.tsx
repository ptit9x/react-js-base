import { Box } from "@mui/material";
import { ReactNode } from "react";
import { DashBoardStyle } from "./DashBoard.styled";

interface Props {
  main?: ReactNode;
  sideRight?: ReactNode;
  disableFooter?: boolean;
  disableSide?: boolean;
}

const DashBoardLayout = (props: Props) => {
  const { main, sideRight, disableSide } = props;
  return (
    <DashBoardStyle>
      <Box sx={{ gridArea: "main" }}>{main}</Box>
      <Box sx={{ gridArea: "network", bgcolor: "secondary.main" }}>NetWork</Box>
      {!disableSide && <Box sx={{ gridArea: "sidebar" }}>{sideRight}</Box>}
    </DashBoardStyle>
  );
};

export default DashBoardLayout;
