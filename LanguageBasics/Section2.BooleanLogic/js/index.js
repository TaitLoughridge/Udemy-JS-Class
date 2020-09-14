/*********************************/
// Boolean Logic

// AND (&&) => true if ALL are true
// IF (||) => true if ONE is true
// Not (!) => inverts true/false value

let firstName = 'Tait';
let age = 32;

if (age < 13) {
    console.log (firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20 === age >= 13 AND age < 20
    console.log (firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log (firstName + ' is a young man.');
} else {
    console.log (firstName + ' is a man.');
}

