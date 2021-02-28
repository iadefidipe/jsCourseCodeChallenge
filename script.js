'use strict'; // to activate strict mode in js
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
// // switch statement
// const day = 'monday';
// switch (day){
//     case 'monday':
//         console.log("It is monday");
//         break;
//     case'tuesday':
//     case 'wednesday':
//         console.log("the two days");
//         break;
//     default:
//         console.log("Not a week day")
// }
// // if statement equivalent

// if (day === 'monday'){
//     console.log('It is monday')
//     }else if (day === 'tuesday' || day === 'wednesday'){
//     console.log('the two days')    
//     }else {
//         console.log('Not a week day')
//     }
// // using conditinal operators
// const bill = 275;
// const tip = bill>=50 && bill<=300 ? bill * (15/100): bill = 20/100;
// console.log(`The bill is ${bill}, tip is ${tip}, total value is ${bill + tip}`)


// // Funtions
// function logger() {
//     console.log( 'My name is Israel'); //function body
// }

// console.log (typeof (logger())) //invoking or calling the function

// function fruitProcessor (apples,oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice; //this wil always be the result whe this funtion is called
// }

// const appleJuice = fruitProcessor(6,7);
// console.log(appleJuice)

// function calAge1(birthYear) {
//     return 2020 - birthYear;
// }
// console.log ( calAge1(1996));

// // Function expression
// const age2 =function (birthYear){
//     return 2020 - birthYear;
// }
// console.log (age2(1997));

// // Arrow funtion
// const age3 = birthYear => 2020 - birthYear;
// console.log(age3(2000))

// const yearsUntilRetirement = birthYear =>{
//     const age = 2020 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log ( yearsUntilRetirement(1996));

// arrow functionsctions with two variables
// const yearsUntilRetirement = (birthYear, firstName) =>{
//     const age = 2020 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`; 
// }

// console.log(yearsUntilRetirement(1995, 'Folarin'));

// funtions calling other funtions
/*const cutPieces = function (fruit) {
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges){
    const applesPieces = cutPieces(apples);
    const orangesPieces = cutPieces(oranges)
    const juice = `Juice with ${applesPieces} apples and ${orangesPieces} oranges`;
    return juice;

}

console.log( fruitProcessor(3,7)); */

// Section coding challenge 1
// const calAverage = (score1, score2, score3) => {
//     const average = (score1 + score2 + score3)/3;
//     return average
// }

// function checkWinner (dolphinsAverage, koalasAverage){
//     dolphinsAverage = calAverage(44,23,71);
//     koalasAverage= calAverage(65,54,49);

//     if (dolphinsAverage >= 2 * koalasAverage){
//         console.log(` The winner is team Dolphin with ${dolphinsAverage} points`);
//     }else if (koalasAverage >= 2 * dolphinsAverage){
//         console.log(` The winner is team koalas with ${koalasAverage} points`);
//     }
//     else{
//         console.log(`No winner`);
//     }

// }
// console.log(dolphinsAverage, koalasAverage);
// console.log( checkWinner());

// Arrow function
// const calAge=birthYear => 2020 - birthYear;
// const age= calAge(1996);
// console.log(age);

// Arrow function with two parameters
// const yearsUntilRetirement = (birthYear, firstName) =>{
//     const age = 2030 - birthYear;
//     const retirement = 65 - age;
//     return ` ${firstName} retires in ${retirement} years`;
// }

// console.log( yearsUntilRetirement(1996,'Israel'));

// Arrays
// const calcAge =function (birthYear){
//     return 2020 - birthYear;
// }
// const years = [1991, 2000, 2002, 2005, 2007];
// console.log(calcAge(years[2]))

// // let year;
// // coming back to this
// // for (year in years){
// //     age=calcAge(years[year])
// // }
// // console.log(age)
//     // array methods

//     // add elements
//     length = years.push(1994); // push method: adds elemnts to d end
//     console.log(years);
//     console.log(length);
    
//     years.unshift(2013); // unshift method: adds elements to the begining of the array
//     console.log(years);
//     //the  above two methods, both returns the total no of elements after new elemet=nts has been added


//     years.pop(); //pop method: removes the last element of the array and returns the element removed
//     console.log(years.pop());
//     console.log(years);

//     years.shift(); // shift method: removes thhe first element of tthe array
//     console.log(years.shift());
//     console.log(years);

    // friends.indexOf('Steven')
    // friends.includes('Steven') // used to check if an element is in the array

    
    

    function calcTip (bill){
        const tip= bill>= 50 && bill <= 300 ? bill * (15/100) : bill *(20/100);
        return tip;
        
    }

    const bills= [125, 555, 44];

    const tips =[];
    let i;

    for (i in bills){
        const bill = bills[i];
        console.log(bill)
        const top= calcTip(bill);
        tips.push(top);
    }

    console.log(tips)

    let totalTips = [];
    for (i in bills && i in tips){
        total = bills[i] + tips[i];
        totalTips.push(total);
    }

    console.log(bills, tips, totalTips)






    











