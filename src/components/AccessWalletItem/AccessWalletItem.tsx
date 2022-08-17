import { Button, Chip, Grid, Typography } from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const BREAK_POINT_LAYOUT = 960;
const Img = styled.img`
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%"
`;
interface Props {
  srcIcon: string;
  title: string;
  description: string;
  isOfficial: boolean;
}

const AccessWalletItem = (props: Props) => {
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
      style={{
        textTransform: "none",
        maxWidth: 500,
        color: "#000",
        backgroundColor: "#fff"
      }}
    >
      <Grid container spacing={4}>
        {!changeLayout ? (
          <Grid item>
            <img width="70" height="70" alt={props.title} src={props.srcIcon} />
          </Grid>
        ) : null}
        <Grid item container sm>
          <Grid item container alignItems="center" spacing={2}>
            {changeLayout ? (
              <Grid item>
                <Img
                  width="50"
                  height="50"
                  alt={props.title}
                  src={props.srcIcon}
                />
              </Grid>
            ) : null}
            <Grid item>
              <Typography gutterBottom variant="h6" fontWeight={600}>
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
