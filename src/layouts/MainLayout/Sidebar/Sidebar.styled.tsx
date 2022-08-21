import styled from "@emotion/styled";
import { Drawer as MuiDrawer, List as MuiList } from "@mui/material";

export const Drawer = styled(MuiDrawer)`
  color: ${({ theme }) => theme.palette.common.white};
  width: ${({ theme }) => theme.spacing(37.5)};
  white-space: nowrap;
`;

export const List = styled(MuiList)`
  background-color: ${({ theme }) => theme.palette.blue[100]};
  width: ${({ theme }) => theme.spacing(37.5)};
  height: 100vh;
`;
