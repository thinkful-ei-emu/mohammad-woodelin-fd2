/* eslint-disable indent */
/* eslint-disable no-console */
'use strict';
function jediName(firstName, lastName){
  //console.log(lastName.slice(0,3));
  console.log(lastName.slice(0,3) + firstName.slice(0,2));
}
jediName('Beyonce', 'Knowles');

//`````````````````````````````````````````````````````````````````````````````````````````````````````````````
function beyond(num) {
  if(num === Infinity || num === -Infinity){
    console.log ('And beyond');
  }
  if(num > 0){
    console.log('To infinity');
  }
  if(num < 0){
    console.log('To negative Infinity');
  }
  if(num === 0){
    console.log('Staying home');
  }
}
beyond(Infinity);


//````````````````````````````````````````````````````````````````````````````````````````````````````````````
let code = []; 
function decode(word) {   
  if(word.charAt(0) === 'a'){
    console.log(word[1]);
    code.push[word[1]];
  }
  if(word.charAt(0) === 'b'){
    console.log(word[2]);
    code.push[word[2]];
  }
  if(word.charAt(0) === 'c'){
    console.log(word[3]);
    code.push[word[3]];
  }
  if(word.charAt(0) === 'd'){
    console.log(word[4]);
    code.push[word[4]];
  }
  else{
    console.log(' ');
    code.push[' '];
  }
}
let sentence='craft block argon meter bells brown croon droop';
let arrayOfWords=sentence.split(' ');
    console.log(arrayOfWords);
for(let i = 0; i < arrayOfWords.length; i++) {
  decode(arrayOfWords[i]);
}
// const decodedArray = code.map(word => decode(word));
// const decodedString = decodedArray.join('');
// return decodedString;
// const result = sentence.split.map.join('');
// return result;
for(let i = 0; i < code.length; i++){
  console.log('hello');
}

//````````````````````````````````````````````````````````````````````````````````````````````````````
//let arrayOfMonths = ['Januray', 'February', 'March', 'April', 'May', 'June','July','August', 'September', 'October', 'November', 'December'];
// function isValid (input){
//   let value = false;
//   for(let i = 0; i < arrayOfMonths.length; i++){
//     if(input === arrayOfMonths[i] ){
//       value = true;
//     }
//   }
//   return value;
// }
function noOfDays(month, leapYear){
  let temp = month.toLowerCase();
  //let result;
  //let days;
  switch(temp){    
    case 'february':
      if(leapYear % 4 === 0)
        return `${temp} has 29 days`;
      else{
        return `${temp} has 28 days`;
      }
      //break;
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      return `${temp} has 31 days`;
      //break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
      return `${temp} has 30 days`;
      //break;
    default: 
      return 'Enter valid month';  
  }
  //return result;
}
console.log (noOfDays('march', 2018));

//``````````````````````````````````````````````````````````````````````````````````

function roPapSci(num){
  if (num < 1 && num > 3 ){
    throw new Error('Pick a number from 1-3');
  }
  const randomNo = Math.floor(Math.random() * 3) + 1;
  //let array = ['rock', 'paper', 'scissors'];
  console.log( `conputer picked ${randomNo} and you picked ${num}`);
  if(randomNo === num) {
    return 'It is a tie!';
  } 
  else if( num === 1 && randomNo === 3) {
    return 'You win!';
  } 
  else if(num === 2 && randomNo === 1) {
    return 'You win!';
  } 
  else if(num === 3 && randomNo === 2) {
    return 'You win!';
  } 
  else return 'You lose!';
}

console.log(roPapSci(2));