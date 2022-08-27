import styled from "@emotion/styled";
import { IconButton, Box } from "@mui/material";

interface ActionButtonsStyledProps {
  isActive?: boolean;
}

export const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.blue[100]};
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2.5)}`};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const ActionButton = styled(({ isActive, ...props }) => (
  <IconButton {...props} />
))<ActionButtonsStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0;
  position: relative;
  width: ${({ theme }) => theme.spacing(8)};
  height: ${({ theme }) => theme.spacing(8.75)};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
  background-color: ${({ isActive }) =>
    isActive ? "hsla(0, 0%, 100%, 0.1)" : "inherit"};
  transition: none;

  &:hover {
    opacity: 1;
    background-color: hsla(0, 0%, 100%, 0.2);
  }
`;

export const VerticalDivider = styled.div`
  background-color: hsla(0, 0%, 100%, 0.22);
  position: absolute;
  z-index: 1;
  top: 0;
  right: ${({ theme }) => theme.spacing(-2.125)};
  height: ${({ theme }) => theme.spacing(8.75)};
  width: 1px;
`;
