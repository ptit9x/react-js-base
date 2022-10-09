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

  const sendTransaction = useCallback(
    async (tx: any) => {
      if (!isMetamaskInstalled) {
        return;
      }
      const web3 = new Web3(window.ethereum);
      return web3.eth.sendTransaction(tx);
    },
    [isMetamaskInstalled]
  );

  const getNonce = useCallback(
    (address: string) => {
      if (!isMetamaskInstalled) {
        return;
      }
      const web3 = new Web3(window.ethereum);
      return web3.eth.getTransactionCount(address);
    },
    [isMetamaskInstalled]
  );

  const getGasPrice = useCallback(() => {
    if (!isMetamaskInstalled) {
      return;
    }
    const web3 = new Web3(window.ethereum);
    return web3.eth.getGasPrice();
  }, [isMetamaskInstalled]);

  // const estimateGas(data, from, to, value) {
  //   if (this.address()) this.setFrom(this.address());
  //   this._setTo();
  //   this._setValue();
  //   this._setGasPrice();
  //   const web3 = getWeb3Instance()
  //   return web3().eth.estimateGas({
  //     data: data,
  //     from: from,
  //     to: to,
  //     value: value
  //   });
  // }

  return {
    getNonce,
    getBalance,
    getGasPrice,
    sendTransaction,
    getCurrentAddress,
    listenNetworkChange
  };
};

export default useWeb3;
