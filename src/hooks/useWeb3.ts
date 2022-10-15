import { erc20abi } from "src/constants/erc20abi";
import { useCallback, useMemo } from "react";
import Web3 from "web3";

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
      const web3 = new Web3(Web3.givenProvider);
      const balance = await web3.eth.getBalance(account);
      return web3.utils.fromWei(balance);
    },
    [isMetamaskInstalled]
  );

  const listenNetworkChange = useCallback(
    (cb: (chainID: any) => void) => {
      if (isMetamaskInstalled) {
        window.ethereum?.on("chainChanged", cb);
      }
    },
    [isMetamaskInstalled]
  );

  const getCurrentAddress = useCallback(async () => {
    if (isMetamaskInstalled) {
      const addresses = await window.ethereum?.request({
        method: "eth_requestAccounts"
      });
      return addresses ? addresses[0] : null;
    }
  }, [isMetamaskInstalled]);

  const sendTransaction = useCallback(
    async (tx: any) => {
      if (!isMetamaskInstalled) {
        return;
      }
      const web3 = new Web3(Web3.givenProvider);
      return web3.eth.sendTransaction(tx);
    },
    [isMetamaskInstalled]
  );

  const getNonce = useCallback(
    (address: string) => {
      if (!isMetamaskInstalled) {
        return;
      }
      const web3 = new Web3(Web3.givenProvider);
      return web3.eth.getTransactionCount(address);
    },
    [isMetamaskInstalled]
  );

  const getGasPrice = useCallback(() => {
    if (!isMetamaskInstalled) {
      return;
    }
    const web3 = new Web3(Web3.givenProvider);
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

  const swapTokens = async (
    tokenAddress: string,
    walletAddress: string,
    swapQuote: any,
    maxApproval: string
  ) => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      const ERC20TokenContract = new web3.eth.Contract(erc20abi, tokenAddress);

      await ERC20TokenContract.methods
        .approve(swapQuote.allowanceTarget, maxApproval)
        .send({ from: walletAddress });

      await web3.eth.sendTransaction(swapQuote);
    } catch (e: any) {
      throw e;
    }
  };

  return {
    getNonce,
    getBalance,
    getGasPrice,
    sendTransaction,
    getCurrentAddress,
    listenNetworkChange,
    swapTokens
  };
};

export default useWeb3;
