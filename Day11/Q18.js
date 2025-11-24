
// a) Output & Explanation — let / var / block scope

if (true) {
  let x = 10; // block-scoped — exists only inside {}
  var y = 20; // function/global-scoped — accessible outside block
}

console.log(y); // 20 — because var is NOT block-scoped
console.log(x); // ReferenceError — x is not defined outside the block

// Explanation:
// 'let' is block-scoped, so x only exists inside the if block.
// 'var' is function-scoped or globally scoped, so y is available outside the block.


// b) Optional Chaining — safe property access

const profile = {
  user: {
    details: {
      email: "test@mail.com",
    },
  },
};

console.log(profile.user.details.email);
console.log(profile.user.details.phone?.number); 

// c) Example where optional chaining prevents runtime error

const data = {
  product: {
    name: "Laptop",
  },
};

console.log(data.product.specs?.ram); 

