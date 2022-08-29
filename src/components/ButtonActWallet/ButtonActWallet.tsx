import { Button, Chip, Grid, Typography } from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { useEffect } from "react";
import { useState } from "react";
import styled from "@emotion/styled";

const BREAK_POINT_LAYOUT = 960;
export interface ButtonActWalletProps {
  srcIcon: string;
  title: string;
  description: string;
  isOfficial: boolean;
  onClick: () => void;
}

const ImgStyled = styled.img`
  margin-right: 24px;
  color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  alt: ${props => props.alt};
  src: ${props => props.src};
`;

const ButtonStyled = styled(Button)`
  text-transform: "none";
  max-width: "600px";
  margin: "16px";
  color: "#000";
  background-color: "#fff";
  padding: "40px 20px 40px 40px";
`;

const ButtonActWallet = (props: ButtonActWalletProps) => {
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
    <ButtonStyled
      variant="contained"
      sx={{
        textTransform: "none",
        width: "650px",
        color: "#000",
        mb: "20px",
        backgroundColor: "#fff",
        boxSizing: "border-box",
        p: "40px 20px 40px 40px",
        borderRadius: "10px",
        "@media screen and (max-width: 650px)": {
          width: "100%"
        }
      }}
      onClick={props.onClick}
    >
      <Grid container>
        {!changeLayout ? (
          <Grid item>
            <ImgStyled
              width="70"
              height="70"
              alt={props.title}
              src={props.srcIcon}
            />
          </Grid>
        ) : null}
        <Grid item container sm>
          <Grid item container alignItems="center">
            {changeLayout ? (
              <Grid item>
                <ImgStyled
                  width="50"
                  height="50"
                  alt={props.title}
                  src={props.srcIcon}
                />
              </Grid>
            ) : null}
            <Grid item>
              <Typography
                gutterBottom
                variant="h6"
                fontWeight={theme => theme.typography.fontWeightBold}
                fontSize="1.429rem"
              >
                {props.title}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography
              align="left"
              variant="body2"
              fontSize="1.143rem"
              gutterBottom
            >
              {props.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {props.isOfficial ? (
        <Grid item>
          <Chip
            size="small"
            icon={<GppGoodIcon />}
            label="Official"
            color="success"
          />
        </Grid>
      ) : null}
    </ButtonStyled>
  );
};
export default ButtonActWallet;
