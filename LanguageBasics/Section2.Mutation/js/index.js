/******************************************/
// Variable Mutation and Type Coercion
const firstName = 'Tait';
let age = 32;

// Type Coercion
console.log(firstName + ' ' + age);

let job, isMarried;
job = 'teacher';
isMarried = true;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); 

// Variable Mutation
age = 'thirty two';
job = 'programer'

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); 

let lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
