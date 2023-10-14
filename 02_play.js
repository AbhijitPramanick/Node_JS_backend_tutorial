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
