//Basic Interface
interface Person{
    name: string;
    age: number;
}

//optional properties
interface Car{
    brand: string;
    model?: string; // optional 
}

// Readonly properties 
interface Point{
    readonly x: number;
    readonly y: number;
}

// Function Types
interface Greetings{
    (name: string): string;
}

const greetUser1: Greetings = () => 'Hello ${name}';

//Index signatures 
interface Dictionary{
    [key: string]: string;
}

// Interface extensions
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}