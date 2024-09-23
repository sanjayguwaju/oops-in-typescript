# OOP in TypeScript

This project explains Object-Oriented Programming (OOP) concepts in TypeScript through examples categorized as easy, medium, hard, and super hard.

## OOP Concepts

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as properties or attributes), and code in the form of procedures (often known as methods).

### Key OOP Concepts

1. **Encapsulation**: Encapsulation is the mechanism of restricting access to some of the object's components. This means that the internal representation of an object is hidden from the outside. Only the necessary information is exposed through public methods.

2. **Abstraction**: Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object. It helps in reducing programming complexity and effort.

3. **Inheritance**: Inheritance is a mechanism where a new class inherits the properties and behavior of another class. The class that is inherited from is called the parent or base class, and the class that inherits is called the child or derived class.

4. **Polymorphism**: Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance. The most common use of polymorphism is when a parent class reference is used to refer to a child class object.

## Project Structure

The project is divided into four categories based on the complexity of the examples:

- **Easy**: Basic examples to introduce OOP concepts.
- **Medium**: Intermediate examples that build on the basic concepts.
- **Hard**: Advanced examples that demonstrate more complex use cases.
- **Super Hard**: Expert-level examples that showcase intricate OOP implementations.

## Examples

### Easy

- **Encapsulation**: Demonstrates how to keep the balance of a bank account private and provide methods to interact with it.
- **Abstraction**: Shows how to create an abstract class for a shape and implement it in different shape classes.
- **Inheritance**: Illustrates how a base class for animals can be extended by specific animal classes.
- **Polymorphism**: Demonstrates how different classes can implement the same interface and be used interchangeably.

### Medium

- **Encapsulation**: More complex example of encapsulation with additional properties and methods.
- **Abstraction**: Abstract class for employees with different types of employees implementing it.
- **Inheritance**: Inheritance example with additional properties and methods in the derived class.
- **Polymorphism**: Polymorphism example with a collection of different shapes and calculating their areas.

### Hard

- **Encapsulation**: Advanced encapsulation example with validation and error handling.
- **Abstraction**: Abstract class for payment methods with different payment types implementing it.
- **Inheritance**: Inheritance example with method overriding and additional properties.
- **Polymorphism**: Polymorphism example with a collection of different developers and their coding activities.

### Super Hard

- **Encapsulation**: Expert-level encapsulation example with complex interactions between properties and methods.
- **Abstraction**: Abstract class for vehicles with different vehicle types implementing it.
- **Inheritance**: Inheritance example with multiple levels of inheritance and method overriding.
- **Polymorphism**: Polymorphism example with a collection of different printers and their printing behaviors.

## Running the Code

To run the TypeScript code, follow these steps:

1. **Install dependencies**:

    ```sh
    npm install
    ```

2. **Run the TypeScript file using `ts-node`**:

    ```sh
    npm run tsc-node folder/filename.ts
    ```

For example, to run the `abstraction.ts` file located in the `easy` folder:

```sh
npm run tsc-node easy/abstraction.ts
