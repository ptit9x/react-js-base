import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const Table = styled(Paper)`
  padding-top: 1rem;
  border-radius: 0.7rem;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.text.secondary};
`;
