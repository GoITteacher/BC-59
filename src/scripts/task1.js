class BankAccount {
  static #bankName = 'monobank';
  #accoutNumber;
  #balance;
  #ownerName;

  constructor(accoutNumber, ownerName) {
    this.#balance = 0;
    this.#accoutNumber = accoutNumber;
    this.#ownerName = ownerName;
  }
  static setBankName(bankName) {
    this.#bankName = bankName;
  }

  get balance() {
    return this.#balance;
  }
  get ownerName() {
    return this.#ownerName;
  }
  set balance(newBalance) {
    this.#balance = newBalance;
  }
  set ownerName(newOwnerName) {
    this.#ownerName = newOwnerName;
  }

  deposit(amount) {
    if (amount > 0) this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance >= amount && amount > 0) this.balance -= amount;
  }
}

const account1 = new BankAccount('rghjwadjha', 'Mukuta');

BankAccount.setBankName();
