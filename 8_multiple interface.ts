interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Duck implements Flyable, Swimmable {
    fly(): void {
        console.log(`Flies`)
    }

    swim(): void {
        console.log(`swim`)
    }
}