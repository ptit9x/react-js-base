import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

interface NavbarStyledProps {
  BREAKPOINT: number;
}

export const OpenSidebarButton = styled(({ BREAKPOINT, ...props }) => (
  <IconButton {...props} />
))<NavbarStyledProps>`
  ${({ BREAKPOINT }) =>
    `@media (min-width: ${BREAKPOINT}px) {
    display: none;
  }`}
  width: ${({ theme }) => theme.spacing(6.5)};
  height: ${({ theme }) => theme.spacing(6.5)};
  padding: 0;
`;
