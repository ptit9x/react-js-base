import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  flex-grow: 1;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  margin: 0 ${({ theme }) => theme.spacing(1.5)};
  background-color: ${({ theme }) => theme.palette.background.paper};

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 50px;
    background-color: ${({ theme }) => theme.palette.background.paper};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.white[200]};
    border-radius: 50px;
  }
`;

export const Content = styled(Box)`
  max-width: 1185px;
  margin: auto;
  width: 100%;
  min-height: ${({ theme }) => theme.spacing(37.5)};
  flex-grow: 1;
`;
