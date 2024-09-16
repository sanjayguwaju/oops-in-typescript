/**
 * Class representing a generic animal.
 * This class serves as a base class for specific types of animals.
 */
class GenericAnimal {
  /**
   * Method to get the sound made by the animal.
   * This method can be overridden by subclasses to provide specific sounds.
   * @returns {string} The sound made by the animal.
   */
  sound(): string {
    return "Some sound";
  }
}

/**
 * Class representing a dog.
 * Extends the Animal class and overrides the sound method.
 */
class Dog extends GenericAnimal {
  /**
   * Method to get the sound made by the dog.
   * Overrides the sound method in the Animal class.
   * @returns {string} The sound made by the dog.
   */
  sound(): string {
    return "Bark";
  }
}

// Create an instance of the Dog class
const dog = new Dog();

// Log the sound made by the dog to the console
console.log(dog.sound()); // Output: Bark