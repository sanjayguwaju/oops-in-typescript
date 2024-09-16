/**
 * Interface representing a logger.
 * Defines a contract for logging messages.
 */
interface Logger {
  /**
   * Log a message.
   * @param {string} message - The message to be logged.
   */
  log(message: string): void;
}

/**
 * Class representing a console logger.
 * Implements the Logger interface to log messages to the console.
 */
class ConsoleLogger implements Logger {
  /**
   * Log a message to the console.
   * @param {string} message - The message to be logged.
   */
  log(message: string) {
    console.log(message);
  }
}

/**
 * Class representing an application.
 * Uses a logger to log messages.
 */
class Application {
  /**
   * Create an application.
   * @param {Logger} logger - The logger to be used by the application.
   */
  constructor(private logger: Logger) {}

  /**
   * Run the application.
   * Logs a message indicating that the application is running.
   */
  run() {
    this.logger.log("Application is running");
  }
}

// Create an instance of the Application class with a ConsoleLogger
const app = new Application(new ConsoleLogger());

// Run the application
// This will log the message "Application is running" to the console
app.run(); // Output: Application is running