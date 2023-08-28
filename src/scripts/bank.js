class BankAccount {
  constructor(ownerName, initialBalance = 0) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
    this.transactionHistory = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactionHistory.push({ type: 'deposit', amount });
      return `Deposited ${amount} units`;
    } else {
      return 'Invalid deposit amount';
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactionHistory.push({ type: 'withdrawal', amount });
      return `Withdrew ${amount} units`;
    } else {
      return 'Insufficient funds';
    }
  }

  getBalance() {
    return this.balance;
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }
}
