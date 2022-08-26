import { Box, styled } from "@mui/material";

export const DashBoardStyle = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  row-gap: 1.5rem;
  grid-template-rows: auto;
  grid-template-areas:
    "main main network" "main main sidebar" "main main sidebar"
    "main main sidebar";
  @media (max-width: 768px) {
    grid-template-areas:
      "network network network" "main main main" "main main main"
      "sidebar sidebar sidebar";
  }
`;
