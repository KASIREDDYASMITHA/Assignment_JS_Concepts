//a) Write an arrow function isEven(n) that returns true if even, else false.
const Even= n=>n%2===0?true:false;
console.log(Even(2));
console.log(Even(3));


//b) Rewrite the following using a ternary operator:

const Result=marks=>marks>=35?"pass":"fail";
console.log(Result(32));
console.log(Result(91));



//c) Write an arrow function greet(name) that prints: "Hello, " If no name is passed, print "Guest" using the ternary operator.
 const greet=name=>console.log(`Hello ${name?name:"Guest"}`);
 greet("Asmitha")
 greet()