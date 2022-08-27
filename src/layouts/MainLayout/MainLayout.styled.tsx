import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  flex-grow: 1;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const Content = styled(Box)`
  max-width: 1185px;
  width: 100%;
  min-height: ${({ theme }) => theme.spacing(37.5)};
  flex-grow: 1;
`;
