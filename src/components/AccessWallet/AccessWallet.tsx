import { Grid } from "@mui/material";
import AccessWalletItem from "../AccessWalletItem/AccessWalletItem";
import { AccessWalletItemProps } from "../AccessWalletItem/AccessWalletItem";
import Web3 from "web3";

const AccessWallet = () => {
  async function openWeb3Wallet() {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        const acc = await web3.eth.getAccounts();
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
    <Grid container spacing={2} direction="column">
      {buttons.map(btnContext => {
        return (
          <Grid item xs={8}>
            <AccessWalletItem
              srcIcon={btnContext.srcIcon}
              title={btnContext.title}
              description={btnContext.description}
              isOfficial={btnContext.isOfficial}
              onClick={btnContext.onClick}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default AccessWallet;
