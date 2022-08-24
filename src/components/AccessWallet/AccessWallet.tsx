import { Grid, Typography, Link } from "@mui/material";
import AccessWalletItem from "../AccessWalletItem/AccessWalletItem";
import { AccessWalletItemProps } from "../AccessWalletItem/AccessWalletItem";
// import Web3 from "web3";
import { store } from "../../store";
import { appSlice } from "../../App/App.reducer";
import Wallet from "../../common/Wallet";
const AccessWallet = () => {
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
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        align-items="center"
      >
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom align="center" fontWeight={600}>
            Access My Wallet
          </Typography>
          <Typography variant="body1" align="center">
            Please select a method to access your wallet.
          </Typography>
          <Typography variant="body1" gutterBottom align="center">
            Don't have a wallet?{" "}
            {/* <Link href="#">
              Create Wallet
            </Link> */}
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
export default AccessWallet;
