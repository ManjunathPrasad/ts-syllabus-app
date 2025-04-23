interface Student {
    name: string;
    gender: string;
    pay: number;
}

class StudentClass implements Student {
    public name: string;
    public gender: string;
    private usn: string;
    public pay: number;

    constructor(name: string, gender: string, usn: string, pay:number){
        this.name = name;
        this.gender = gender;
        this.usn = usn;
        this.pay = pay
    }

    display(){
        this.pay = (this.pay + 10) *.10;
        console.log(this.name, this.gender, this.usn, this.pay)
    }
}

const student = new StudentClass("Alex", "Male", "1XX", 19.99);
student.display()