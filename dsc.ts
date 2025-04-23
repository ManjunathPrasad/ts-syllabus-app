let arrayValue: number[] = [1, 2, 3, 4, 5]; // Array of numbers
let tupleValue: [string, number] = ["Alice", 30]; // Tuple with a string and a number
let objectValue: { name: string; age: number } = { name: "Bob", age: 25 }; // Object with specific properties
let functionValue: (x: number, y: number) => number = (x, y) => x + y; // Function type
let literalValue: "hello" = "hello"; // String literal type
let templateLiteralValue: `Hello, ${string}` = `Hello, Alice`; // Template literal type
let intersectionType: { name: string } & { age: number } = { name: "Charlie", age: 35 }; // Intersection type
let unionType: string | number = "Hello"; // Union type (string or number)
let typeAssertionValue: any = "This is a string"; // Using 'any' type
let assertedStringValue: string = typeAssertionValue as string; // Type assertion to string
let assertedNumberValue: number = typeAssertionValue as unknown as number; // Type assertion to number
let optionalValue: string | undefined = undefined; // Optional value (can be string or undefined)
let defaultValue: string = "Default value"; // Default value
