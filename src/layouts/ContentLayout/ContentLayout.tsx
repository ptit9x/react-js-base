import { Box } from "@mui/material";
import { ReactNode } from "react";
import { ContentLayoutStyle } from "./ContentLayout.styled";
interface ContentLayoutProps {
  main?: ReactNode;
  sideRight?: ReactNode;
  disableSide?: boolean;
}

const ContentLayout = ({
  main,
  sideRight,
  disableSide,
}: ContentLayoutProps) => {
  return (
    <ContentLayoutStyle>
      <Box sx={{ gridArea: "main" }}>{main}</Box>
      <Box sx={{ gridArea: "network", bgcolor: "secondary.main" }}>NetWork</Box>
      {!disableSide && <Box sx={{ gridArea: "sidebar" }}>{sideRight}</Box>}
    </ContentLayoutStyle>
  );
};

export default ContentLayout;
