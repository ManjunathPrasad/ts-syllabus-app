class MathUtil {
    static PI = 3.14159;
  
    static square(n: number): number {
      return n * n;
    }
}


console.log(MathUtil.PI);// No need of object to access class static members
console.log(MathUtil.square(3));