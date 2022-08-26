import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(0)};
`;
