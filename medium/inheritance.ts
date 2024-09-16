/**
 * Class representing a generic vehicle.
 * This class serves as a base class for specific types of vehicles.
 */
class BaseVehicle {
  /**
   * Method to start the engine of the vehicle.
   * This method can be overridden by subclasses to provide specific engine starting behaviors.
   */
  startEngine() {
    console.log("Engine started.");
  }
}

/**
 * Class representing a motorcycle.
 * Extends the Vehicle class and overrides the startEngine method to provide specific behavior.
 */
class Motorcycle extends BaseVehicle {
  /**
   * Method to start the engine of the motorcycle.
   * Overrides the startEngine method in the Vehicle class to provide motorcycle-specific engine starting behavior.
   */
  startEngine() {
    console.log("Motorcycle engine revving up.");
  }
}

// Create an instance of the Motorcycle class
const bike = new Motorcycle();

// Call the startEngine method on the motorcycle instance
// This will use the overridden method in the Motorcycle class
bike.startEngine(); // Output: Motorcycle engine revving up.