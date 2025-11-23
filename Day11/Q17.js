//a) Use spread operator to merge:

arr1 = [1, 2, 3];
arr2 = [4, 5];
console.log(...arr1,...arr2);


//b) Create a function sum(...nums) using rest operator that returns the sum of all numbers.
const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20));        

//c Multilevel Destructuring
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
