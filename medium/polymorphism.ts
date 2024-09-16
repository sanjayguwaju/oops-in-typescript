/**
 * Class representing a generic animal.
 * This class serves as a base class for specific types of animals.
 */
class Animal {
  /**
   * Method to make a sound.
   * This method can be overridden by subclasses to provide specific animal sounds.
   */
  makeSound() {
    console.log("Some generic animal sound.");
  }
}

/**
 * Class representing a cat.
 * Extends the Animal class and overrides the makeSound method to provide a specific sound.
 */
class Cat extends Animal {
  /**
   * Method to make a sound.
   * Overrides the makeSound method in the Animal class to provide a cat-specific sound.
   */
  makeSound() {
    console.log("Meow");
  }
}

/**
   * Function to make an animal sound.
   * Demonstrates polymorphism by calling the makeSound method on an Animal object,
   * which can be an instance of any subclass of Animal.
   * @param {Animal} animal - An instance of the Animal class or its subclasses.
   */
function makeAnimalSound(animal: Animal) {
  animal.makeSound();
}

// Create an instance of the Cat class
const cat = new Cat();

// Call the makeAnimalSound function with the cat instance
// This will use the overridden method in the Cat class
makeAnimalSound(cat); // Output: Meow