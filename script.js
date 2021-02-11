
// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

// const markBMI = weightMark / (heightMark**2)
// const johnBMI = weightJohn / (heightJohn**2)

// const markHigherBMI = markBMI>johnBMI
// console.log( markBMI, johnBMI, markHigherBMI)

// if (markBMI > johnBMI){
//     console.log (` Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
// } else{
//     console.log (` John BMI ${johnBMI} is higher than Mark's BMI ${markBMI} !`);
// }

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

// console.log(Number(13332))

// Coding challenge 3

// const dolphinAverageScore = (96+108+89)/3;
// const koalasAverageScore = (88+91+110)/3;
// console.log(dolphinAverageScore,koalasAverageScore);

// if (dolphinAverageScore > koalasAverageScore) {
//     console.log( `Dolphins are the winners of the competition`);
// }else if( dolphinAverageScore === koalasAverageScore){
//     console.log(`Its's a draw`);}
// else{
//     console.log(`koalas are the winners of the competition`);
// }

// const dolphinAverageScore = (97+112+101)/3;
// const koalasAverageScore = (109+95+123)/3;
// console.log(dolphinAverageScore,koalasAverageScore);

// if (dolphinAverageScore > koalasAverageScore && dolphinAverageScore >= 100){
//     console.log( `Dolphins are the winners of the competition`)
// }else if(koalasAverageScore > dolphinAverageScore && koalasAverageScore >= 100){
//     console.log( `Koalas are the winners of the competition`)
// }else if( dolphinAverageScore === koalasAverageScore && dolphinAverageScore >= 100){
//     console.log(`Its's a draw`)
// }else if( dolphinAverageScore === koalasAverageScore && koalasAverageScore >= 100){
//     console.log(`Its's a draw`)
// }else if( dolphinAverageScore === koalasAverageScore && koalasAverageScore >= 100 && dolphinAverageScore >= 100){
//     console.log(`Both win the trophy`)
// }
// else{
//     console.log(`no one wins`)
// }

// coding challenge 4
// using swith function
// const tip = 200;

// switch (tip){
//     case (tip>=50 && tip<=300):
//         console.log(`your tip is 15%`);
//         break;
//     default:
//         console.log(`your tip is 20%`)

// }
// switch statement
const day = 'monday';
switch (day){
    case 'monday':
        console.log("It is monday");
        break;
    case'tuesday':
    case 'wednesday':
        console.log("the two days");
        break;
    default:
        console.log("Not a week day")
}
// if statement equivalent

if (day === 'monday'){
    console.log('It is monday')
    }else if (day === 'tuesday' || day === 'wednesday'){
    console.log('the two days')    
    }else {
        console.log('Not a week day')
    }
// using conditinal operators
const bill = 275;
const tip = bill>=50 && bill<=300 ? bill * (15/100): bill = 20/100;
console.log(`The bill is ${bill}, tip is ${tip}, total value is ${bill + tip}`)
