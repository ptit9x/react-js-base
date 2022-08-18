class Wallet {
  private walletAddress: string;
  constructor(walletAddress: string) {
    this.walletAddress = walletAddress;
  }
  getAddress() {
    return this.walletAddress;
  }
}
export default Wallet;
