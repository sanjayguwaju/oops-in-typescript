/**
 * Interface representing a generic shape.
 * Defines a contract for calculating the area of a shape.
 */
interface Shape {
  /**
   * Calculate the area of the shape.
   * @returns {number} The area of the shape.
   */
  area(): number;
}

/**
 * Class representing a circle.
 * Implements the Shape interface to provide a specific implementation for calculating the area of a circle.
 */
class Circle implements Shape {
  /**
   * Create a circle.
   * @param {number} radius - The radius of the circle.
   */
  constructor(private radius: number) {}

  /**
   * Calculate the area of the circle.
   * Implements the area method from the Shape interface.
   * @returns {number} The area of the circle.
   */
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

/**
 * Class representing a rectangle.
 * Implements the Shape interface to provide a specific implementation for calculating the area of a rectangle.
 */
class Rectangle implements Shape {
  /**
   * Create a rectangle.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   */
  constructor(private width: number, private height: number) {}

  /**
   * Calculate the area of the rectangle.
   * Implements the area method from the Shape interface.
   * @returns {number} The area of the rectangle.
   */
  area(): number {
    return this.width * this.height;
  }
}

// Create an array of Shape objects, including both Circle and Rectangle instances
const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

// Iterate over the array and call the area method on each shape
// Demonstrates polymorphism as the area method behaves differently depending on the shape type
shapes.forEach((shape) => console.log(shape.area()));

// Output:
// 78.53981633974483
// 24