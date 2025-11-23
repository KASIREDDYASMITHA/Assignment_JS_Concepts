//A.Template Literals
const username ="Asmitha";
const course ="Javascript";
console.log(`Hello ${username}, welcome to the ${course} course!`);

//B.Object Shorthand

const name = "Sam";
const age = 21;
const student = {
   name,
   age,
  greet () {
    console.log("Hello");
  }
};
student.greet();


const getFullName=(first,last)=>`${first} ,${last}`;
console.log(getFullName("Kasireddy" ,"Asmitha"));