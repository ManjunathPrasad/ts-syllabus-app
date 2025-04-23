abstract class Animal {
    constructor(public name: string) {}
   
    abstract makeSound(): void; // abstract must be defined in sub class
  
    move(): void {
      console.log(`${this.name} moves`);
    }
  }
  
  class Dog extends Animal {
    makeSound(): void {
        console.log("Bark!");
      }
  }

  const dog = new Dog("Buddy");
  dog.makeSound(); // Output: Bark!
  dog.move();      // Output: Buddy moves
  