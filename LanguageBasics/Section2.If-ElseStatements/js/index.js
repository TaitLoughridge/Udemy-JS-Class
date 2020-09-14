/************************************/
// If / Else Statements

let firstName = 'Tait';
let civilStatus = 'married';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully be married soon!')
}

let isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully be married soon!');
}



// code from CodingChallenge1
let heightTait, heightMark, massTait, massMark, bmiTait, bmiMark
heightTait = 1.753 // meters
massTait = 81 // kg
heightMark = 1.88
massMark = 83

bmiTait = massTait / (heightTait * heightTait);
bmiMark = massMark / (heightMark * heightMark);
// if/else code
if (bmiMark > bmiTait) {
    console.log('Mark\'s BMI is higher than Tait\'s.')
} else {
    console.log('Tait\'s BMI is higher than Mark\'s.')
}

// old code from CodingChallenge1

// console.log('Tait\'s BMI:', bmiTait,'Mark\'s BMI:', bmiMark)
// console.log('Tait has higher BMI than Mark?', bmiTait > bmiMark)
