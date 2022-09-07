import { useCallback, useMemo } from "react";
import Web3 from "web3/dist/web3.min.js";

const useWeb3 = () => {
  const isMetamaskInstalled = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.ethereum;
  }, []);

  const getBalance = useCallback(
    async (account: string) => {
      if (!isMetamaskInstalled || !account) {
        return "";
      }
      const web3 = new Web3(window.ethereum);
      const balance = await web3.eth.getBalance(account);
      return web3.utils.fromWei(balance);
    },
    [isMetamaskInstalled]
  );

  const listenNetworkChange = useCallback(
    (cb?: (chainID: any) => void) => {
      if (!isMetamaskInstalled) {
        return;
      }
      window.ethereum.on("chainChanged", cb);
    },
    [isMetamaskInstalled]
  );

  const getCurrentAddress = useCallback(async () => {
    if (!isMetamaskInstalled) {
      return;
    }
    const addresses = await window.ethereum.request({
      method: "eth_requestAccounts"
    });
    return addresses[0];
  }, [isMetamaskInstalled]);

  return {
    getBalance,
    listenNetworkChange,
    getCurrentAddress
  };
};

export default useWeb3;
