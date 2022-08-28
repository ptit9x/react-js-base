import styled from "@emotion/styled";
import { Button, Paper } from "@mui/material";

interface ButtonProps {
  padd?: number;
  variant?: string;
}

export const ItemPaper = styled(Paper)`
  padding: 2rem 3rem;
  border-radius: 0.7rem;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.text.secondary};
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const ButtonCusTom = styled(Button)`
  border-radius: 0.7rem;
  color: ${({ theme }) => theme.palette.common.white};
  padding: ${({ padd = 0.7 }: ButtonProps) => padd + "rem"};
  background-color: ${({ theme }) => theme.palette.primary.main};
  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
