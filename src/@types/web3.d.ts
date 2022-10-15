import { MetaMaskInpageProvider } from "@metamask/providers";
declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }

  interface Token {
    group?: string;
    symbol: string;
    image: string;
    name?: string;
    id?: string;
    address?: string;
    decimals: number;
    current_price?: number;
  }
}
