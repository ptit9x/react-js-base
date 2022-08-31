import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

export const PrimaryTypo = styled(Typography)`
  color: #05c0a5;
`;

export const FeeTypo = styled(Typography)`
  color: #f8687a;
  font-size: 16px;
`;

export const ButtonDisable = styled(Button)`
  background-color: #e0e0e0;
  color: #fff;
  padding: 20px 50px;
  margin: 10px auto;
  border-radius: 10px;
  text-transform: none;
  display: block;
`;

export const ButtonClear = styled(Button)`
  background-color: transparent;
  color: #f8687a;
  padding: 10px 30px;
  margin: 0 auto;
  border-radius: 10px;
  text-transform: none;
  display: block;
`;

export const ButtonPopover = styled(Button)`
  background-color: #fff;
  width: 100%;
  margin: 20px 0;
  border: 1px solid #5e6b8d;
  display: flex;
  justify-content: space-around;
  box-shadow: none;
  :hover {
    background-color: #fff;
  }
`;
