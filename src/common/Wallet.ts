class Wallet {
  private walletAddress: string;
  private balance: string;
  constructor(walletAddress: string) {
    this.walletAddress = walletAddress;
    this.balance = "0";
  }

  setBalance(balance: string) {
    this.balance = balance;
  }

  getAddress() {
    return this.walletAddress;
  }

  getBalance() {
    return this.balance;
  }
}
export default Wallet;
