import { Grid, Typography, Link } from "@mui/material";
import AccessWalletItem from "../AccessWalletItem/AccessWalletItem";
import { AccessWalletItemProps } from "../AccessWalletItem/AccessWalletItem";
// import Web3 from "web3";
import { store } from "../../store";
import { appSlice } from "../../App/App.reducer";
import Wallet from "../../common/Wallet";
import { PATH } from "../../constants/paths";
const CreateWallet = () => {
  async function openWeb3Wallet() {
    console.log("click");
    // if (window.ethereum) {
    //   // const web3 = new Web3(window.ethereum);
    //   try {
    //     await window.ethereum.enable();
    //     const acc = await web3.eth.getAccounts();
    //     store.dispatch(appSlice.actions.setWallet(new Wallet(acc[0])));
    //     // const wallet = new Web3Wallet(acc[0]);
    //     // this.setWallet([wallet, window.ethereum]);
    //     // this.trackAccessWallet(WALLET_TYPES.WEB3_WALLET);
    //     // if (this.path !== "") {
    //     //   this.$router.push({ path: this.path });
    //     // } else {
    //     //   this.$router.push({ name: ROUTES_WALLET.WALLETS.NAME });
    //     // }
    //   } catch (e) {
    //     // Toast(e, {}, WARNING);
    //   }
    // } else {
    //   // Toast("No web3 wallet found!", {}, WARNING);
    // }
  }
  const buttons: AccessWalletItemProps[] = [
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
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        align-items="center"
      >
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom align="center" fontWeight={600}>
            Create a new wallet
          </Typography>
          <Typography variant="body1" align="center">
            Please select a method to create a new wallet
          </Typography>
          <Typography variant="body1" gutterBottom align="center">
            Already have a wallet?{" "}
            <Link
              style={{ color: "#fff" }}
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
    </div>
  );
};
export default CreateWallet;
