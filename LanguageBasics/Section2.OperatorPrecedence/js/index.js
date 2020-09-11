/***************************************/
// Operator Precedence

let year, yearTait, fullAge;
year = 2020;
yearTait = 1988;
fullAge = 21;

// Multiple Operators
let isFullAge = year - yearTait >= fullAge; // True

console.log(isFullAge)

// Grouping
let ageTait = year - yearTait;
let ageMark = 35;
let average = (ageTait + ageMark) / 2;

console.log(average)

// Multiple assignments
let x, y;
    // Assignments are right-to-left: math calculated then assigned to y then to x
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y) // x=26 y=26

// More operators
// x = x * 2; // same as below
x *=2; 
console.log(x)
x += 10 // added 10 to the result from one above
console.log(x)
    //next 3 do the same thing
    // x = x + 1;
    // x += 1;
    // x++



