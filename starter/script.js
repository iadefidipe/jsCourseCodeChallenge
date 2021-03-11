'use strict';

/**  console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Correct Number!'

document.querySelector('.number').textContent = 13

document.querySelector('.score').textContent = 4;

document.querySelector('.guess').value = 46; **/

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('.check').addEventListener('click', function (){
    const guess= Number(document.querySelector('.guess').value);
    if (randomInteger(0,20) === guess){
        console.log( document.querySelector('.message').textContent = 'Correct guess' )
    }else if(!guess){
        console.log( document.querySelector('.message').textContent = 'You have not inputed a guess')
    }else{
        console.log( document.querySelector('.message').textContent = 'Keep guessing')
    }
})


