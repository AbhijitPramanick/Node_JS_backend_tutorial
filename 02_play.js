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

//Array and array methods
const hobbies = ["Cooking", "Sports"];
for (let hobby of hobbies) {
  console.log(hobby);
}

//map
console.log(hobbies.map((hobby) => `${hobby}123`));
console.log(hobbies);
