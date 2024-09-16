/**
 * Class representing a car.
 * Demonstrates encapsulation by keeping the brand and model properties private.
 */
class Car {
  // Private properties to store the brand and model of the car
  private brand: string;
  private model: string;

  /**
   * Create a car.
   * @param {string} brand - The brand of the car.
   * @param {string} model - The model of the car.
   */
  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  /**
   * Get the details of the car.
   * @returns {string} A string containing the brand and model of the car.
   */
  getDetails(): string {
    return `${this.brand} - ${this.model}`;
  }
}

// Create a new car instance with brand 'Toyota' and model 'Corolla'
const myCar = new Car('Toyota', 'Corolla');

// Log the details of the car to the console
console.log(myCar.getDetails()); // Output: Toyota - Corolla