/**
 * Class representing a product.
 * Demonstrates encapsulation by keeping the price private and providing methods to interact with it.
 */
class Product {
  // Private property to store the price of the product
  private price: number;

  /**
   * Create a product.
   * @param {number} price - The initial price of the product.
   * @throws Will throw an error if the initial price is not positive.
   */
  constructor(price: number) {
    if (price <= 0) {
      throw new Error("Price must be positive.");
    }
    this.price = price;
  }

  /**
   * Get the current price of the product.
   * @returns {number} The current price.
   */
  getPrice(): number {
    return this.price;
  }

  /**
   * Set a new price for the product.
   * Ensures the new price is positive before updating the price.
   * @param {number} newPrice - The new price to be set.
   * @throws Will throw an error if the new price is not positive.
   */
  setPrice(newPrice: number): void {
    if (newPrice <= 0) {
      throw new Error("New price must be positive.");
    }
    this.price = newPrice;
  }
}

// Create a new product instance with an initial price of 100
const product = new Product(100);

// Set a new price of 150 for the product
product.setPrice(150);

// Log the current price of the product to the console
console.log(product.getPrice()); // Output: 150