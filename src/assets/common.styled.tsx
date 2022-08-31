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

export const ItemPaper = styled(Paper)`
  padding: 2rem 3rem;
  border-radius: 0.7rem;
  //margin-bottom: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.text.primary};
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const ButtonCusTom = styled(Button)`
  border-radius: 0.7rem;

  color: ${({ colorButton = "#fff" }: ButtonProps) => colorButton};
  padding: ${({ padd = "0.7rem" }: ButtonProps) => padd};
  background-color: ${({ backgroundColor = "#05c0a5" }: ButtonProps) =>
    backgroundColor};

  :hover {
    background-color: ${({ backgroundColor = "#05c0a5" }: ButtonProps) =>
      backgroundColor};
  }
  text-transform: none;
`;
