import styled from "@emotion/styled";
import { Button, ButtonProps, Paper, PaperProps } from "@mui/material";
import { BREAKPOINT } from "src/constants/styles";
interface ButtonCusTomProps {
  padd?: string;
  backgroundColor?: string;
  colorButton?: string;
}
interface ItemPaperProps {
  padd?: string;
  hasNarrowPaddOnSM?: boolean;
}

export const ItemPaper = styled(
  ({ hasNarrowPaddOnSM, padd, ...props }: PaperProps & ItemPaperProps) => (
    <Paper {...props} />
  )
)`
  padding: ${({ padd }) => padd ?? "2rem 3rem"};
  border-radius: 0.7rem;
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.text.primary};

  @media (max-width: ${BREAKPOINT.SM}px) {
    padding: ${({ hasNarrowPaddOnSM, theme }) =>
      hasNarrowPaddOnSM && theme.spacing(2)};
  }
`;

export const ButtonCusTom = styled(
  ({
    padd,
    colorButton,
    backgroundColor,
    ...props
  }: ButtonProps & ButtonCusTomProps) => <Button {...props} />
)`
  border-radius: 0.7rem;
  text-transform: none;
  color: ${({ colorButton = "#fff" }) => colorButton} !important;
  padding: ${({ padd = "0.7rem" }) => padd};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.palette.primary.main};

  :hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;
