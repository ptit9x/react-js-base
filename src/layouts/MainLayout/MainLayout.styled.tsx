import styled from "@emotion/styled";
// import { styleds } from "@mui/material/styles";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";

export const ItemBlock = styled(Paper)`
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
...theme.typography.body2,
padding: theme.spacing(3),
textAlign: "center",
color:${({ theme }) => theme.palette.text.secondary} `;

export const Container = styled(Box)`
  flex-grow: 1;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const Content = styled(Box)`
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff',
  max-width: 1185px;
  width: 100%;
  margin: auto;
  padding: ${({ theme }) => theme.spacing(3)};
  min-height: ${({ theme }) => theme.spacing(37.5)};
  flex-grow: 1;
`;
