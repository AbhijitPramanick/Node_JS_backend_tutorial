//Global variables

const firstName = "Maximillian";
const age = 29;
const hasHobbies = "true";

//this is pure function declaration which does not depend on outer variables, has parameters.
function summarizeUser(userName, userAge, userHasHobbies) {
  console.log(
    `Name of the user is ${userName}, of age ${userAge} and has ${
      userHasHobbies ? "some" : "no"
    } hobbies.`
  );
  console.log(
    "Result of consoleing this key word in function declaration : " + this
  );
}

//Arrow functions
//Arrow functions has : lexical 'this'
const summarizeUserArrow = (userName, userAge, userHasHobbies) => {
  console.log(
    `Name of the user is ${userName}, of age ${userAge} and has ${
      userHasHobbies ? "some" : "no"
    } hobbies.`
  );
  console.log("Result of consoleing this key word in arrow function : " + this);
};

//Another arraw function exaple
const addArrow = (a, b) => a + b;
//function call has arguments
summarizeUser(firstName, age, hasHobbies);
summarizeUserArrow(firstName, age, hasHobbies);
console.log(addArrow(1, 2));

//Objects, properties and methods
const person = {
  firstName: "Abhijit",
  job: "Web developer",
  greetArrow: () => console.log(`Hey, I am ${this.firstName}`),
  greetDecl: function () {
    console.log(`Hey, I am ${firstName}`);
  },
};
console.log(`${person.firstName} is a ${person.job}`);
person.greetArrow();
person.greetDecl();
const copiedPerson = { person };
console.log(copiedPerson);
// {
//     person: {
//       firstName: 'Abhijit',
//       job: 'Web developer',
//       greetArrow: [Function: greetArrow],
//       greetDecl: [Function: greetDecl]
//     }
// }

//Array and array methods
const hobbies = ["Cooking", "Sports"];
for (let hobby of hobbies) {
  console.log(hobby);
}

//map
console.log(hobbies.map((hobby) => `${hobby}123`));
console.log(hobbies);

//02 important operators - spread and rest operators
const copied = [hobbies];
console.log(copied); //[ [ 'Cooking', 'Sports' ] ]

//Spread operators
const copied1 = [...hobbies];
console.log(copied1); //[ 'Cooking', 'Sports' ]

const copiedPerson1 = { ...person };
console.log(copiedPerson1);
// {
//     firstName: 'Abhijit',
//     job: 'Web developer',
//     greetArrow: [Function: greetArrow],
//     greetDecl: [Function: greetDecl]
// }

//Rest operator
function display1(arg1, arg2, arg3) {
  return [arg1, arg2, arg3];
}
console.log(display1(1, 2, 3, 4));
function display2(...args) {
  return [...args];
}
console.log(display2(1, 2, 3, 4));

// Spread and Rest operators looks the same, only it differs in the place of usage
// if we want to pull out elments out of array => Spread operator
// if we want to merge in elments of an array => rest operator

//Destructuring in array
const newHobbies = ["Cooking", "Reading"];
const [hobby1, hobby2] = newHobbies;
console.log(hobby1, hobby2);

const employee = {
  id: 1,
  position: "Developer",
};
const { id: empId, position: empPos } = employee;
console.log(empId, empPos);
