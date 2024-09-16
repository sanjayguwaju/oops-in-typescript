/**
 * Abstract class representing a generic employee.
 * This class cannot be instantiated directly and must be extended by other classes.
 */
abstract class AbstractEmployee {
  /**
   * Abstract method to get the salary of the employee.
   * Must be implemented by subclasses.
   * @returns {number} The salary of the employee.
   */
  abstract getSalary(): number;
}

/**
 * Class representing a full-time employee.
 * Extends the abstract Employee class and provides a specific implementation for the getSalary method.
 */
class FullTimeEmployee extends AbstractEmployee {
  /**
   * Get the salary of the full-time employee.
   * @returns {number} The salary of the full-time employee.
   */
  getSalary(): number {
    return 50000;
  }
}

/**
 * Class representing a part-time employee.
 * Extends the abstract Employee class and provides a specific implementation for the getSalary method.
 */
class PartTimeEmployee extends AbstractEmployee {
  /**
   * Get the salary of the part-time employee.
   * @returns {number} The salary of the part-time employee.
   */
  getSalary(): number {
    return 20000;
  }
}

// Create an instance of FullTimeEmployee
const fullTime = new FullTimeEmployee();

// Log the salary of the full-time employee to the console
console.log(fullTime.getSalary()); // Output: 50000