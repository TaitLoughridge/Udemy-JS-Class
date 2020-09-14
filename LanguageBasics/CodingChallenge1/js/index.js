/***************************************/
// Coding Challenge 1

let heightTait, heightMark, massTait, massMark, bmiTait, bmiMark
heightTait = 1.753 // meters
massTait = 81 // kg
heightMark = 1.88
massMark = 83
bmiTait = massTait / (heightTait * heightTait);
bmiMark = massMark / (heightMark * heightMark);
console.log('Tait\'s BMI:', bmiTait,'Mark\'s BMI:', bmiMark)
console.log('Tait has higher BMI than Mark?', bmiTait > bmiMark)



