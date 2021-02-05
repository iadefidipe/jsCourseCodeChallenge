
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

const markBMI = weightMark / (heightMark**2)
const johnBMI = weightJohn / (heightJohn**2)

const markHigherBMI = markBMI>johnBMI
console.log( markBMI, johnBMI, markHigherBMI)

if (markBMI > johnBMI){
    console.log (` Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else{
    console.log (` John BMI ${johnBMI} is higher than Mark's BMI ${markBMI} !`);
}

// const age = 19;
// const isOldEnough = age >= 18;

// if (age >=18){
//     console.log(`Sarah is elegible`)
// }
// else{
//     const yearsLeft = 18 - age;
//     console.log(` Sarah isn't eligible, wait till ${yearsLeft} years`)
// }

// const birthYear = 2020;
// let century;
// if (birthYear <= 2000) {
//     let century = 20;
//     console.log (century)
// } else{
//     let century = 21;
//     console.log (century)
// }

console.log(Number(13332))