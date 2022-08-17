import { Grid } from "@mui/material";
import AccessWalletItem from "../AccessWalletItem/AccessWalletItem";

const AccessWallet = () => {
  const buttons = [
    {
      srcIcon:
        "https://www.myetherwallet.com/img/icon-enkrypt-block.cb05ee30.svg",
      title: "Enkrypt",
      description: "Connect with Enkrypt browser extension",
      isOfficial: true
    },
    {
      srcIcon: "https://www.myetherwallet.com/img/icon-extensions.fbf7b80e.png",
      title: "Browser extension",
      description: "Use your Web3 wallet with MEW",
      isOfficial: true
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
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default AccessWallet;
