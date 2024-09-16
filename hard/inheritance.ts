/**
 * Class representing a generic employee.
 * This class serves as a base class for specific types of employees.
 */
class Employee {
  /**
   * Create an employee.
   * @param {string} name - The name of the employee.
   * @param {string} position - The position of the employee.
   */
  constructor(protected name: string, protected position: string) {}

  /**
   * Get the details of the employee.
   * @returns {string} A string containing the name and position of the employee.
   */
  getDetails(): string {
    return `${this.name} is a ${this.position}`;
  }
}

/**
 * Class representing a manager.
 * Extends the Employee class and adds additional properties and methods specific to managers.
 */
class Manager extends Employee {
  /**
   * Create a manager.
   * @param {string} name - The name of the manager.
   * @param {string} position - The position of the manager.
   * @param {number} employees - The number of employees managed by the manager.
   */
  constructor(name: string, position: string, private employees: number) {
    super(name, position);
  }

  /**
   * Get the details of the manager.
   * Overrides the getDetails method in the Employee class to include the number of employees managed.
   * @returns {string} A string containing the name, position, and number of employees managed by the manager.
   */
  getDetails(): string {
    return `${super.getDetails()} managing ${this.employees} employees.`;
  }
}

// Create an instance of the Manager class
const manager = new Manager("Sarah", "Manager", 10);

// Log the details of the manager to the console
console.log(manager.getDetails()); // Output: Sarah is a Manager managing 10 employees.