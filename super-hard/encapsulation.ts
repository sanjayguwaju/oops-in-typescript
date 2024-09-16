/**
 * Class representing a bank account.
 * Demonstrates encapsulation by keeping the balance private and providing methods to interact with it.
 */
class Account {
  // Private property to store the balance of the account
  private balance: number = 0;

  /**
   * Create an account.
   * @param {string} accountHolder - The name of the account holder.
   */
  constructor(private accountHolder: string) {}

  /**
   * Deposit an amount into the bank account.
   * Ensures the deposit amount is positive before adding it to the balance.
   * @param {number} amount - The amount to be deposited.
   * @throws Will throw an error if the deposit amount is not positive.
   */
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid deposit amount");
    this.balance += amount;
  }

  /**
   * Get the current balance of the bank account.
   * @returns {number} The current balance.
   */
  getBalance(): number {
    return this.balance;
  }

  /**
   * Get the name of the account holder.
   * @returns {string} The name of the account holder.
   */
  getAccountHolder(): string {
    return this.accountHolder;
  }
}

// Create a new account instance with account holder 'John Doe'
const acc = new Account('John Doe');

// Deposit 500 units into the account
acc.deposit(500);

// Log the current balance to the console
console.log(acc.getBalance()); // Output: 500