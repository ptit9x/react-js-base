import styled from "@emotion/styled";
import { Button, Paper } from "@mui/material";
interface ButtonProps {
  padd?: string;
  backgroundColor?: string;
  colorButton?: string;
}
interface ItemPaperProps {
  padd?: string;
  variant?: string;
}

export const ItemPaper = styled(Paper)<ItemPaperProps>`
  padding: ${({ padd }) => padd ?? "2rem 3rem"};
  border-radius: 0.7rem;
  //margin-bottom: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.text.primary};
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const ButtonCusTom = styled(Button)<ButtonProps>`
  border-radius: 0.7rem;
  color: ${({ colorButton = "#fff" }) => colorButton};
  padding: ${({ padd = "0.7rem" }) => padd};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.palette.primary.main};

  :hover {
    background-color: ${({ backgroundColor, theme }) =>
      backgroundColor ?? theme.palette.primary.main};
  }
  text-transform: none;
`;
