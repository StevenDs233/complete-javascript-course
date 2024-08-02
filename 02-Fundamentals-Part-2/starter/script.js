// 'use strict'

// let hasDriversLicense = false;
// let passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriversLicense) console.log('I can Drive:D');

// //Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:9:7)Understand this error
// // const interface = 'Audio' 
// // const private = 534;

// /*Function*/
// function logger(){
//     console.log("My name is Jonas")
// }

// // calling/running.invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, organges){
//     console.log(apples, organges);
//     const juice = `Juice with ${apples} and ${organges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrgangeJuice  = fruitProcessor(2,4);
// console.log(appleOrgangeJuice)

/*Function declaration and Function expression
//Function declaration
function calcAge(birthYear){
   return age = 2037 - birthYear;
}

const age1 = calcAge(1991);


//Function expression
const calcAge2 = function (birthYeah){//just the value
    return 2037 - birthYeah;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

//Function expression
// const calcAge2 = function (birthYear){
//    return 2037 - birthYear;
// }

/*Arrow function
// const calcAhge3 = birthYear  => 2037 - birthYear;
// const age3 = calcAhge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstName) => { 
//    const age = 2037 - birthyear;
//    const retirement = 65 - age;
//    // return retirement
//    return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Bob'));
// console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*Functions Calling Other Function*/
// function cutFruitPieces(fruit){
//    return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//    const applePieces = cutFruitPieces(apples);
//    const orangePieces = cutFruitPieces(oranges);

//    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of oranges`;
//    return juice;
// }

// console.log(fruitProcessor(2,3));

/* Reviewing functions*/

const calcAge = function(birthYear){
   return 2037 - birthYear;
}
const yearsUntilRetirement = (birthyear, firstName) => { 
   const age = calcAge(birthyear);
   const retirement = 65 - age;
   
   if(retirement > 0){
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
   }else{
      console.log(`{firstName} has already retired`);
      return -1;
   }
   

   // return `${firstName} retires in ${retirement} years🍔`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));