/**
 * Abstract class representing a generic payment method.
 * This class cannot be instantiated directly and must be extended by other classes.
 */
abstract class Payment {
  /**
   * Abstract method to process a payment.
   * Must be implemented by subclasses.
   * @param {number} amount - The amount to be paid.
   */
  abstract makePayment(amount: number): void;
}

/**
 * Class representing a credit card payment method.
 * Extends the abstract Payment class and provides a specific implementation for the makePayment method.
 */
class CreditCardPayment extends Payment {
  /**
   * Process a credit card payment.
   * Overrides the makePayment method in the Payment class to provide credit card-specific payment processing.
   * @param {number} amount - The amount to be paid.
   */
  makePayment(amount: number) {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

/**
 * Class representing a PayPal payment method.
 * Extends the abstract Payment class and provides a specific implementation for the makePayment method.
 */
class PayPalPayment extends Payment {
  /**
   * Process a PayPal payment.
   * Overrides the makePayment method in the Payment class to provide PayPal-specific payment processing.
   * @param {number} amount - The amount to be paid.
   */
  makePayment(amount: number) {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

// Create an instance of CreditCardPayment
const payment = new CreditCardPayment();

// Process a payment of $100 using the credit card payment method
payment.makePayment(100); // Output: Processing credit card payment of $100