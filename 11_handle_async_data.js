//In the following example we can see the disadvantage of asnyc operation.

// const a = 10;
// let b = 0;

// setTimeout(() => {
//   b = 20;
//   console.log(`Now b = ${b}`);
// }, 2000);

// console.log(`Sum of a and b is ${a + b}`);

//The changed value of b is not refected in the sum of a and b.

//----------------------------------------------
// Handling async data
const a = 10;
let b = 0;
const waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

waitingData.then((data) => {
  b = data;
  console.log(`Sum of a and b is ${a + b}`);
});
