/**
 * Class representing a person.
 */
class Person {
  name: string;
  age: number;

  /**
   * Create a person.
   * @param {string} name - The name of the person.
   * @param {number} age - The age of the person.
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /**
   * Introduce the person.
   * Logs a message to the console introducing the person.
   */
  introduce() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create a new person instance
const alice = new Person('Alice', 25);

// Call the introduce method to log the introduction message
alice.introduce(); // Output: Hi, my name is Alice and I'm 25 years old.

