import { Button, Chip, Grid, Typography } from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { useEffect } from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { useWindowSize } from "../../hooks/useWindowSize";

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

const ButtonActWallet = ({
  srcIcon,
  title,
  description,
  isOfficial,
  onClick
}: ButtonActWalletProps) => {
  const [changeLayout, setChangeLayout] = useState(false);
  const sizes = useWindowSize();

  function handleChangeInnerSize() {
    if (sizes[0] < BREAK_POINT_LAYOUT) {
      setChangeLayout(true);
    } else {
      setChangeLayout(false);
    }
  }
  useEffect(() => {
    handleChangeInnerSize();

    window.addEventListener("resize", handleChangeInnerSize);
    return () => window.removeEventListener("resize", handleChangeInnerSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizes[0]]);

  return (
    <Button
      variant="contained"
      sx={theme => ({
        textTransform: "none",
        width: "650px",
        color: theme.palette.common.black,
        mt: "20px",
        backgroundColor: theme.palette.common.white,
        boxSizing: "border-box",
        p: "40px 20px 40px 40px",
        borderRadius: "10px",
        "@media screen and (max-width: 650px)": {
          width: "100%",
          p: "24px 20px 24px 24px"
        }
      })}
      onClick={onClick}
    >
      <Grid container>
        {!changeLayout ? (
          <Grid item>
            <ImgStyled width="70" height="70" alt={title} src={srcIcon} />
          </Grid>
        ) : null}
        <Grid item container sm>
          <Grid item container alignItems="center">
            {changeLayout ? (
              <Grid item>
                <ImgStyled width="50" height="50" alt={title} src={srcIcon} />
              </Grid>
            ) : null}
            <Grid item>
              <Typography
                gutterBottom
                variant="h6"
                fontWeight={theme => theme.typography.fontWeightBold}
                fontSize="1.429rem"
              >
                {title}
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
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {isOfficial ? (
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
export default ButtonActWallet;
