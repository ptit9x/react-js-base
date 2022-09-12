import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import QRCode from "react-qr-code";
import AVATAR from "src/assets/images/avatar.png";
import theme from "src/theme";

import { walletAddress } from "src/constants";
import { Wrapper as QRCodeWrapper } from "./AccountCard.styled";

const QRModalContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        fontWeight={700}
        fontSize={theme.spacing(2.5)}
      >
        {t("my-public-add")}
      </Typography>

      <Typography sx={{ mt: 2, mb: 3 }} fontSize={theme.spacing(1.75)}>
        {t("to-receive-eth")}
      </Typography>

      <Box display="flex" alignItems="center" mb={2}>
        <Avatar src={AVATAR} alt="my-acc" sx={{ width: 22, height: 22 }} />
        <Typography
          fontSize={theme.spacing(1.75)}
          fontWeight={700}
          sx={{ ml: 1 }}
        >
          {t("my-main-acc")}
        </Typography>
      </Box>

      <QRCodeWrapper
        position="relative"
        width="100%"
        height={theme.spacing(27.25)}
      >
        <Box
          display="flex"
          alignItems="center"
          top="50%"
          left="50%"
          position="absolute"
          sx={{ transform: "translate(-50%, -50%)" }}
        >
          <Box
            bgcolor="background.default"
            borderRadius="7px"
            width={theme.spacing(19)}
            height={theme.spacing(19)}
            padding={theme.spacing(1.5)}
          >
            <QRCode value={walletAddress} size={128} />
          </Box>

          <Box
            width={theme.spacing(19)}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            paddingLeft={theme.spacing(1.5)}
          >
            <Typography
              sx={{
                wordBreak: "break-all",
                color: theme.palette.common.white,
                width: theme.spacing(16),
                fontSize: theme.spacing(1.5),
                letterSpacing: "1px"
              }}
            >
              {walletAddress}
            </Typography>
            <Button
              size="small"
              startIcon={<ContentCopyIcon />}
              sx={{
                marginTop: theme.spacing(2),
                color: theme.palette.common.white,
                textTransform: "none"
              }}
            >
              {t("copy")}
            </Button>
          </Box>
        </Box>
      </QRCodeWrapper>
    </>
  );
};

export default QRModalContent;
