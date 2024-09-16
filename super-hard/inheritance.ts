/**
 * Class representing a generic developer.
 * This class provides a method to describe the coding activity of a developer.
 */
class Developer {
  /**
   * Describe the coding activity of the developer.
   * This method can be overridden by subclasses to provide specific coding activities.
   * @returns {string} A string describing the coding activity.
   */
  code(): string {
    return "Coding";
  }
}

/**
 * Class representing a frontend developer.
 * Extends the Developer class and overrides the code method to describe frontend-specific coding activities.
 */
class FrontendDeveloper extends Developer {
  /**
   * Describe the coding activity of the frontend developer.
   * Overrides the code method in the Developer class to provide frontend-specific coding activities.
   * @returns {string} A string describing the frontend coding activity.
   */
  code(): string {
    return "Writing HTML, CSS, and JavaScript";
  }
}

/**
 * Class representing a backend developer.
 * Extends the Developer class and overrides the code method to describe backend-specific coding activities.
 */
class BackendDeveloper extends Developer {
  /**
   * Describe the coding activity of the backend developer.
   * Overrides the code method in the Developer class to provide backend-specific coding activities.
   * @returns {string} A string describing the backend coding activity.
   */
  code(): string {
    return "Writing server-side code";
  }
}

// Create an array of Developer objects, including both FrontendDeveloper and BackendDeveloper instances
const devs: Developer[] = [new FrontendDeveloper(), new BackendDeveloper()];

// Iterate over the array and call the code method on each developer
// Demonstrates polymorphism as the code method behaves differently depending on the developer type
devs.forEach((dev) => console.log(dev.code()));

// Output:
// Writing HTML, CSS, and JavaScript
// Writing server-side code