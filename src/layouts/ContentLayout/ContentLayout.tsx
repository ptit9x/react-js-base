import { Box } from "@mui/material";
import { ReactNode } from "react";
import Network from "src/components/Network/Network";
import { ContentLayoutStyle } from "./ContentLayout.styled";
interface ContentLayoutProps {
  main?: ReactNode;
  sideRight?: ReactNode;
  disableSide?: boolean;
}

const ContentLayout = ({
  main,
  sideRight,
  disableSide
}: ContentLayoutProps) => {
  return (
    <ContentLayoutStyle>
      <Box sx={{ gridArea: "main" }}>{main}</Box>
      <Box sx={{ gridArea: "network" }}>
        <Network />
      </Box>
      {!disableSide && <Box sx={{ gridArea: "sidebar" }}>{sideRight}</Box>}
    </ContentLayoutStyle>
  );
};

export default ContentLayout;
