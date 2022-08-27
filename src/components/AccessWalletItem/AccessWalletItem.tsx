import { Box, Button, Chip, Grid, Typography,  } from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { useEffect } from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { ButtonWalletItem } from "./AccessWalletItem.styled";
const BREAK_POINT_LAYOUT = 960;
export interface AccessWalletItemProps {
  srcIcon: string;
  title: string;
  description: string;
  isOfficial: boolean;
  onClick: () => void;
}

const ImgStyled = styled.img`
  /* margin-right: 24px; */
  color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  alt: ${props => props.alt};
  src: ${props => props.src};
  grid-area: "image";
`;

const AccessWalletItem = (props: AccessWalletItemProps) => {
  const [changeLayout, setChangeLayout] = useState(false);
  function handleChangeInnerSize() {
    if (window.innerWidth < BREAK_POINT_LAYOUT) {
      setChangeLayout(true);
    } else {
      setChangeLayout(false);
    }
  }
  useEffect(() => {
    handleChangeInnerSize();

    window.addEventListener("resize", handleChangeInnerSize);
    return () => window.removeEventListener("resize", handleChangeInnerSize);
  }, []);

  return (
    <ButtonWalletItem variant="contained" onClick={props.onClick}>
      <ImgStyled width="70" height="70" alt={props.title} src={props.srcIcon} />
      {/* <ImgStyled width="50" height="50" alt={props.title} src={props.srcIcon} /> */}
      <Typography
        sx={{ gridArea: "title" }}
        gutterBottom
        variant="h6"
        fontWeight={700}
      >
        {props.title}
      </Typography>
      <Typography
        sx={{ gridArea: "description" }}
        align="left"
        variant="body2"
        gutterBottom
      >
        {props.description}
      </Typography>
      {props.isOfficial ? (
        <Chip
          sx={{ gridArea: "official" }}
          size="small"
          icon={<GppGoodIcon />}
          label="Official"
          color="success"
        />
      ) : null}
    </ButtonWalletItem>
  );
};
export default AccessWalletItem;
