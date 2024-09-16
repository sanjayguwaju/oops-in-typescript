/**
 * Class representing a bank account.
 * Demonstrates the concept of encapsulation by keeping the balance private.
 */
class MyBankAccount {
  // Private property to store the balance of the account
  private balance: number = 0;

  /**
   * Deposit an amount into the bank account.
   * @param {number} amount - The amount to be deposited.
   */
  deposit(amount: number) {
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

// Create a new bank account instance
const myAccount = new MyBankAccount();

// Deposit 100 units into the account
myAccount.deposit(100);

// Log the current balance to the console
console.log(myAccount.getBalance()); // Output: 100