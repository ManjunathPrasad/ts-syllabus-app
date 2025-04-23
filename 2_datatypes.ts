let num = 123;

let greet_message = "Hello, world!";
let isActive = true;
let hasChildren = false;
let anyValue = "This can be anything";
let unknownValue = "This can be anything but is unknown";
let nullValue = null;
let undefinedValue = undefined;
let bigIntValue = BigInt(1234567890123456789012345678901234567890);
let symbolValue: symbol = Symbol("uniqueSymbol");
let voidValue: void = undefined; // or just leave it empty
let neverValue: never; // This type represents values that never occur
let enumValue: "red" | "green" | "blue" = "red"; // Union type for specific string values  
console.log(num, greet_message, isActive, hasChildren, anyValue, unknownValue, nullValue, undefinedValue, bigIntValue, symbolValue, voidValue, enumValue); // number type