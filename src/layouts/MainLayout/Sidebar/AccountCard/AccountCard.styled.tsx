import styled from "@emotion/styled";
import { Box, Button, Typography, Tooltip, IconButton } from "@mui/material";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

interface CustomTooltipProps {
  maxwidth?: string;
  padding?: string;
}

export const Wrapper = styled(Box)<{ width?: string; height?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: ${({ theme, width }) => width ?? theme.spacing(32.5)};
  height: ${({ theme, height }) => height ?? theme.spacing(22.5)};
  background: url("https://mewcard.mewapi.io/?address=0xd9e49813b2d97c2e4b9bbb333c65961720b46cdc")
    no-repeat center center/cover;
  border-radius: 16px;
  padding: ${({ theme }) =>
    `${theme.spacing(2)} ${theme.spacing(2.5)} ${theme.spacing(
      2
    )} ${theme.spacing(4)}`};
`;

export const AccountBalance = styled(Typography)`
  font-size: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.palette.common.white};
  margin: ${({ theme }) =>
    `${theme.spacing(2.5)} 0 ${theme.spacing(2)} ${theme.spacing(-2.5)}`};
`;

export const AccountOptionsButton = styled(Button)`
  font-weight: 700;
  border-radius: 50px;
  position: relative;
  left: ${({ theme }) => theme.spacing(-1)};
  color: ${({ theme }) => theme.palette.common.white};
  font-size: ${({ theme }) => theme.spacing(1.5)};
  height: ${({ theme }) => theme.spacing(2.5)};
  padding: ${({ theme }) => `${theme.spacing(1)} `};

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.08);
  }
`;

export const UtilButton = styled(IconButton)`
  background-color: ${({ theme }) => theme.palette.common.white};
  margin-left: ${({ theme }) => theme.spacing(1)};
  height: ${({ theme }) => theme.spacing(4)};
  width: ${({ theme }) => theme.spacing(4)};
  opacity: 0.6;
  border-radius: 10px;
  transition: opacity 0.3s ease-in-out;

  &.MuiButtonBase-root.MuiIconButton-root:hover {
    background-color: ${({ theme }) => theme.palette.common.white};
    opacity: 1;
  }
`;

export const LightTooltip = styled(
  ({ className, ...props }: TooltipProps & CustomTooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)(({ theme, maxwidth, padding }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    maxWidth: maxwidth ?? "none",
    fontSize: theme.spacing(1.75),
    padding: padding ?? theme.spacing(1.75)
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white
  }
}));
