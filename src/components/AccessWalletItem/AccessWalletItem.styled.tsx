import { Button, styled, Box } from "@mui/material";

export const ButtonWalletItem = styled(Button)`
  text-transform: "none";
  /* width: "100%"; */
  /* margin: "16px"; */
  color: "#000";
  background-color: "#fff";
  padding: "40px 20px 40px 40px";
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* gap: 1.5rem 1rem; */
  grid-template-rows: auto;
  grid-template-areas:
    "image title title official"
    "image description description official";

  @media (max-width: 568px) {
    grid-template-areas:
      "image title title official"
      "description description description official";
  }
`;
