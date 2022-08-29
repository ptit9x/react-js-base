import { Grid, Typography, Link, Box } from "@mui/material";
import { ButtonActWalletProps } from "../../components/ButtonActWallet/ButtonActWallet";
import ButtonActWallet from "../../components/ButtonActWallet/ButtonActWallet";
import Web3 from "web3/dist/web3.min.js";
import { store } from "../../store";
import { appSlice } from "../../App/App.reducer";
import Wallet from "../../common/Wallet";
import { PATH } from "../../constants/paths";
const AccessWallet = () => {
  async function openWeb3Wallet() {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        const acc = await web3.eth.getAccounts();
        store.dispatch(appSlice.actions.setWallet(new Wallet(acc[0])));
        // const wallet = new Web3Wallet(acc[0]);
        // this.setWallet([wallet, window.ethereum]);
        // this.trackAccessWallet(WALLET_TYPES.WEB3_WALLET);
        // if (this.path !== "") {
        //   this.$router.push({ path: this.path });
        // } else {
        //   this.$router.push({ name: ROUTES_WALLET.WALLETS.NAME });
        // }
      } catch (e) {
        // Toast(e, {}, WARNING);
      }
    } else {
      // Toast("No web3 wallet found!", {}, WARNING);
    }
  }
  const buttons: ButtonActWalletProps[] = [
    {
      srcIcon:
        "https://www.myetherwallet.com/img/icon-enkrypt-block.cb05ee30.svg",
      title: "Enkrypt",
      description: "Connect with Enkrypt browser extension",
      isOfficial: true,
      onClick: openWeb3Wallet
    },
    {
      srcIcon: "https://www.myetherwallet.com/img/icon-extensions.fbf7b80e.png",
      title: "Browser extension",
      description: "Use your Web3 wallet with MEW",
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
            fontWeight={600}
            fontSize="2.285rem"
          >
            Access My Wallet
          </Typography>
          <Typography variant="body1" align="center" fontSize={"1.143rem"}>
            Please select a method to access your wallet.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            fontSize={"1.143rem"}
          >
            Don't have a wallet?{" "}
            <Link
              style={{ color: "#fff" }}
              href={PATH.CREATE_WALLET}
              underline="always"
            >
              Create Wallet
            </Link>
          </Typography>
        </Grid>
        {buttons.map((btnContext, index) => (
          <Grid item xs={10} key={index}>
            <ButtonActWallet
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
export default AccessWallet;
