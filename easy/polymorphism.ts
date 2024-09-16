/**
 * Class representing a generic bird.
 * This class serves as a base class for specific types of birds.
 */
class Bird {
  /**
   * Method to simulate the bird flying.
   * This method can be overridden by subclasses to provide specific flying behaviors.
   */
  fly() {
    console.log("Flying");
  }
}

/**
 * Class representing a duck.
 * Extends the Bird class and overrides the fly method to provide specific behavior.
 */
class Duck extends Bird {
  /**
   * Method to simulate the duck flying.
   * Overrides the fly method in the Bird class to provide duck-specific flying behavior.
   */
  fly() {
    console.log("Duck is flying low.");
  }
}

// Create an instance of the Duck class
const duck = new Duck();

// Call the fly method on the duck instance
// This will use the overridden method in the Duck class
duck.fly(); // Output: Duck is flying low