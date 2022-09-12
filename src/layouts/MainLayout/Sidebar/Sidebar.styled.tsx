import styled from "@emotion/styled";
import {
  ListItemButtonProps as MuiListItemButtonProps,
  ListItemButton as MuiListItemButton,
  Drawer as MuiDrawer,
  List as MuiList,
  Box
} from "@mui/material";

interface ListItemButtonProps {
  isActive?: boolean;
}

export const Drawer = styled(MuiDrawer)`
  color: ${({ theme }) => theme.palette.common.white};
  width: ${({ theme }) => theme.spacing(37.5)};
  white-space: nowrap;

  & .MuiPaper-root.MuiDrawer-paper {
    border-right: none;
  }
`;

export const List = styled(MuiList)`
  background-color: ${({ theme }) => theme.palette.blue[100]};
  width: ${({ theme }) => theme.spacing(37.5)};
  height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing(0.625)};
    height: ${({ theme }) => theme.spacing(0.625)};
    border-radius: 50px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 50px;
    background: ${({ theme }) => theme.palette.white[400]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.blueGrey[500]};
    border-radius: 50px;

    &:hover {
      background: ${({ theme }) => theme.palette.blueGrey[700]};
    }
  }
`;

export const AccountInfo = styled(Box)`
  width: 100%;
  height: ${({ theme }) => theme.spacing(34.5)};
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.blue[100]};
`;

export const LogoWrapper = styled(Box)`
  width: 100%;
  height: ${({ theme }) => theme.spacing(5)};
  margin: ${({ theme }) => `${theme.spacing(1)} 0 ${theme.spacing(2)}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListItemButton = styled(
  ({ isActive, ...props }: ListItemButtonProps & MuiListItemButtonProps) => (
    <MuiListItemButton {...props} />
  )
)`
  transition: none;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
  background-color: ${({ isActive }) =>
    isActive ? "hsla(0, 0%, 100%, 0.1)" : "inherit"};

  &:hover {
    opacity: 1;
    background-color: hsla(0, 0%, 100%, 0.2);
  }
`;

export const Divider = styled.div`
  width: 85%;
  margin: ${({ theme }) => theme.spacing(1.75)} auto;
  height: 1px;
  background-color: hsla(0, 0%, 100%, 0.22);
`;
