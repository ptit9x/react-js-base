import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

export const FeeTypo = styled(Typography)`
  color: ${({ theme }) => theme.palette.red[200]};
  font-size: ${({ theme }) => theme.spacing(1.75)};
`;

export const ButtonDisable = styled(Button)`
  background-color: ${({ theme }) => theme.palette.gray[300]};
  color: ${({ theme }) => theme.palette.common.white} !important;
  padding: ${({ theme }) => `${theme.spacing(2.5)} ${theme.spacing(6.25)}`};
  margin: ${({ theme }) => theme.spacing(1.25)} auto;
  border-radius: 10px;
  text-transform: none;
  display: block;
`;

export const ButtonClear = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => `${theme.spacing(1.25)} ${theme.spacing(3.75)}`};
  margin: 0 auto;
  border-radius: 10px;
  text-transform: none;
  display: block;
`;

export const ButtonPopover = styled(Button)`
  background-color: ${({ theme }) => theme.palette.common.white};
  width: 100%;
  margin: ${({ theme }) => theme.spacing(2.5)} 0;
  border: 1px solid ${({ theme }) => theme.palette.blueGrey.A100};
  display: flex;
  justify-content: space-around;
  box-shadow: none;
  :hover {
    background-color: ${({ theme }) => theme.palette.common.white};
  }
`;
