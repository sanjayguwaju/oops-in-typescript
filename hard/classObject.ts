/**
 * Class representing a bank account.
 * Demonstrates encapsulation by keeping the balance private and providing methods to interact with it.
 */
class BankAccount {
  // Private property to store the balance of the account
  private balance: number;

  /**
   * Create a bank account.
   * @param {number} initialBalance - The initial balance of the account.
   */
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  /**
   * Deposit an amount into the bank account.
   * Ensures the deposit amount is positive before adding it to the balance.
   * @param {number} amount - The amount to be deposited.
   * @throws Will throw an error if the deposit amount is not positive.
   */
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposit amount must be positive.");
    this.balance += amount;
  }

  /**
   * Get the current balance of the bank account.
   * @returns {number} The current balance.
   */
  getBalance(): number {
    return this.balance;
  }
}

// Create a new bank account instance with an initial balance of 500
const account = new BankAccount(500);

// Deposit 200 units into the account
account.deposit(200);

// Log the current balance to the console
console.log(account.getBalance()); // Output: 700