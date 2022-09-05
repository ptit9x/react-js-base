import { Grid, Typography, Link, Box, useTheme } from "@mui/material";
import AccessWalletItem from "../../components/ButtonActWallet/ButtonActWallet";
import { ButtonActWalletProps } from "../../components/ButtonActWallet/ButtonActWallet";
import { PATH } from "../../constants/paths";
const CreateWallet = () => {
  const theme = useTheme();

  async function openWeb3Wallet() {
    // eslint-disable-next-line no-console
    console.log("click");
  }
  const buttons: ButtonActWalletProps[] = [
    {
      srcIcon:
        "https://www.myetherwallet.com/img/icon-enkrypt-block.cb05ee30.svg",
      title: "Install Enkrypt browser extension",
      description:
        "MEW’s official browser extension. Connect to web3 on Ethereum and Polkadot, manage your NFTs, buy, send and swap",
      isOfficial: true,
      onClick: openWeb3Wallet
    },
    {
      srcIcon: "https://www.myetherwallet.com/img/icon-extensions.fbf7b80e.png",
      title: "Download MEW wallet app",
      description:
        "Our official mobile app to create your wallet, and connect to MEW Web using your mobile phone",
      isOfficial: true,
      onClick: openWeb3Wallet
    }
  ];

  return (
    <Box sx={{ p: "16px" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        align-items="center"
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            fontWeight={theme.typography.fontWeightBold}
          >
            Create a new wallet
          </Typography>
          <Typography variant="body1" align="center">
            Please select a method to create a new wallet
          </Typography>
          <Typography variant="body1" gutterBottom align="center">
            Already have a wallet?
            <Link
              style={{ color: theme.palette.common.white }}
              href={PATH.ACCESS_WALLET}
              underline="always"
            >
              Access Wallet
            </Link>
          </Typography>
        </Grid>
        {buttons.map((btnContext, index) => (
          <Grid item xs={10} key={index}>
            <AccessWalletItem
              srcIcon={btnContext.srcIcon}
              title={btnContext.title}
              description={btnContext.description}
              isOfficial={btnContext.isOfficial}
              onClick={btnContext.onClick}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default CreateWallet;
