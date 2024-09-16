/**
 * Abstract class representing a generic shape.
 * This class cannot be instantiated directly and must be extended by other classes.
 */
abstract class Shape {
  /**
   * Abstract method to calculate the area of the shape.
   * Must be implemented by subclasses.
   * @returns {number} The area of the shape.
   */
  abstract area(): number;
}

/**
 * Class representing a square.
 * Extends the abstract Shape class.
 */
class Square extends Shape {
  /**
   * Create a square.
   * @param {number} side - The length of the side of the square.
   */
  constructor(private side: number) {
    super();
  }

  /**
   * Calculate the area of the square.
   * @returns {number} The area of the square.
   */
  area(): number {
    return this.side * this.side;
  }
}

// Create a new square instance with a side length of 4
const square = new Square(4);

// Log the area of the square to the console
console.log(square.area()); // Output: 16