class Person {
    constructor(public name: string) {}
  
    greet() {
      console.log(`Hello, ${this.name}!`);
    }
  }

  const person = new Person("TypeScript");
  person.greet();