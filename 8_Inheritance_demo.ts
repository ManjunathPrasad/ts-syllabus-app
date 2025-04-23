class Employee {
    public name: string;
    private salary: number;
    protected department: string;
  
    constructor(name: string, salary: number, dept: string) {
      this.name = name;
      this.salary = salary;
      this.department = dept;
    }
  
    getDetails(): string {
      return `${this.name} works in ${this.department}`;
    }
  }

  class Manager extends Employee {
    constructor(name: string, salary: number, dept: string) {
      super(name, salary, dept);
    }
  
    manage(): void {
      console.log(`${this.name} is managing ${this.department}`);
    }
  }
  