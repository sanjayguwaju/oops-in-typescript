/**
 * Class representing a generic printer.
 * This class provides a method to print a document.
 */
class Printer {
  /**
   * Print a document.
   * This method can be overridden by subclasses to provide specific printing behaviors.
   * @param {string} document - The document to be printed.
   */
  print(document: string) {
    console.log(`Printing document: ${document}`);
  }
}

/**
 * Class representing a color printer.
 * Extends the Printer class and overrides the print method to provide color printing.
 */
class ColorPrinter extends Printer {
  /**
   * Print a document in color.
   * Overrides the print method in the Printer class to provide color-specific printing behavior.
   * @param {string} document - The document to be printed.
   */
  print(document: string) {
    console.log(`Printing document in color: ${document}`);
  }
}

// Create an array of Printer objects, including both Printer and ColorPrinter instances
const printers: Printer[] = [new Printer(), new ColorPrinter()];

// Iterate over the array and call the print method on each printer
// Demonstrates polymorphism as the print method behaves differently depending on the printer type
printers.forEach((printer) => printer.print("MyDoc"));

// Output:
// Printing document: MyDoc
// Printing document in color: MyDoc