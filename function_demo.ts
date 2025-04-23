// Named function
function greets(name: string): string {
    return `Hello, ${name}!`;
}
// Anonymous function
function add(x: number, y: number): number {
    return x + y;
}
// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Function with optional and Default Parameters
function log(message: string, user?: string): void {
    console.log(user ? `[${user}] ${message}` : message);
  }
  
  function greetUser(name: string = "Guest"): string {
    return `Hello, ${name}`;
  }
  


greets("TypeScript"); // Output: Hello, TypeScript!
add(5, 10); // Output: 15
multiply(5, 10); // Output: 50
log("Server started"); // Output: Server started
log("Server started", "Admin"); // Output: [Admin] Server started
greetUser(); // Output: Hello, Guest