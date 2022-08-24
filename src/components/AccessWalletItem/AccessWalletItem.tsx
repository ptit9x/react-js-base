import { Button, Chip, Grid, Typography } from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { useEffect } from "react";
import { useState } from "react";
import styled from "@emotion/styled";

const BREAK_POINT_LAYOUT = 960;
export interface AccessWalletItemProps {
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
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        maxWidth: "100%",
        m: "16px",
        color: "#000",
        backgroundColor: "#fff",
        p: "40px 20px 40px 40px"
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
              <Typography gutterBottom variant="h6" fontWeight={700}>
                {props.title}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography align="left" variant="body2" gutterBottom>
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
    </Button>
  );
};
export default AccessWalletItem;
