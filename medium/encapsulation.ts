/**
 * Class representing a user.
 * Demonstrates encapsulation by keeping the password private.
 */
class User {
  // Private property to store the user's password
  private password: string;

  /**
   * Create a user.
   * @param {string} username - The username of the user.
   * @param {string} password - The password of the user.
   */
  constructor(private username: string, password: string) {
    this.password = password;
  }

  /**
   * Validate the entered password against the user's password.
   * @param {string} enteredPassword - The password entered by the user.
   * @returns {boolean} True if the entered password matches the user's password, false otherwise.
   */
  validatePassword(enteredPassword: string): boolean {
    return this.password === enteredPassword;
  }
}

// Create a new user instance with username 'john_doe' and password 'securePassword'
const user = new User('john_doe', 'securePassword');

// Validate the password 'wrongPassword' against the user's password
// Log the result to the console
console.log(user.validatePassword('wrongPassword')); // Output: false