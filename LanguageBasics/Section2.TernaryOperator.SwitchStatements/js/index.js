/***************************************/
// Ternary Operators & Switch Statements

let firstName = 'Tait';
let age = 32;

/***************************************/
// Ternary Operators

age >= 21 ? console.log(firstName + ' drinks Jack Daniels Whiskey.') : console.log(firstName + ' drinks juice.');

let drink = age >= 21 ? 'Whiskey' : 'juice';
console.log(drink);

// if/else way to do the above
// if (age >=21) {
//     let drink = "Whiskey";
// } else {
//     let drink = "juice";
// }

/****************************************/
// Switch Statements

let job = 'sculptor';
switch (job) {
    case 'teacher':
    case 'sculptor':
    case 'instructor':
        console.log(firstName + ' teaches kids how to sculpt clay');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Houston');
        break;
    case 'designer':
        console.log(firstName + ' designs home interiors');
        break;
    default:
        console.log(firstName + ' does something?');
}


// reworked the Boolean Logic
switch (true) {
    case age < 13:
        console.log (firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log (firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log (firstName + ' is a young man.');
        break;
    default:
        console.log (firstName + ' is a man.');
}

