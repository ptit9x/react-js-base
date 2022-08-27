import styled from "@emotion/styled";
import { Button, Paper, TableCell, TableHead } from "@mui/material";

interface Props {
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
    margin-top: ${({ theme }) => theme.spacing(0)};
  }
`;

export const Table = styled(Paper)`
  padding-top: 1rem;
  border-radius: 0.7rem;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const TableHeadCus = styled(TableHead)`
  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const TableCellCus = styled(TableCell)`
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const ButtonCusTom = styled(Button)`
  border-radius: 0.7rem;
  color: ${({ theme }) => theme.palette.common.white};
  padding: ${({ padd }: Props) => padd + "rem"};
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
