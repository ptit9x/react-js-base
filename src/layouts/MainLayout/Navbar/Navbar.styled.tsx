import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

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

export const BuyCryptoContainer = styled(Grid2)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 644px) {
    margin-right: ${({ theme }) => theme.spacing(2.5)};
  }
`;

export const NotiButton = styled(Grid2)`
  display: flex;
  align-self: center;
  justify-content: flex-end;

  @media screen and (max-width: 660px) {
    position: absolute;
  }
`;
