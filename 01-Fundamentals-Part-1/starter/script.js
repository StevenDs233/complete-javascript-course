// let js = 'amazing';
// // console.log(40 + 8 + 23 - 10);

// console.log("James");
// console.log("23");

// let firstname = "Jonas";
// console.log(firstname);
// console.log(firstname);
// console.log(firstname);

// //
// let jonas_matilda = "JM";
// let sfunction = 27;

// let person = 'jones';
// let PI = 3.1415;

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// let job1 = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob);


// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jones');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;//var
// age = 31;

//(Uncaught TypeError: Assignment to constant variable.)
// const birthYear = 1991; //create the variable that we not reassign, the variable could not be muteted type error,
// birthYear = 1991;

//Missing initializer in const declaration
// const job; //when we use const, we need basically an initial value
//clean code: use const by default and let only sure that the variable need to changes

// var job = "programming";
// job = 'teacher';

// lastName = "Schemedmean";
// console.log(lastName);

//Basic Operator(arithmetic operations)
// const now = 2037;
// const ageJones = now - 1991;
// const ageSarach = now - 2020;
// console.log(ageJones, ageSarach);

// console.log(ageJones * 2, ageJones / 10, 2 ** 3);
// // 2**3 means 2 the power of 3 = 2 * 2 * 2

// const firstName = 'Jones';
// const lastName = 'Schmedtmann';
// console.log(firstName + " " + lastName);

// //assignment operator
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// //Comparison operators
// console.log(ageJones > ageSarach); // ageJones 46, age Sarach 19 >, <, >=, <=
// console.log(ageSarach >= 18);

// const isFullAge = ageSarach >= 18;

// console.log(now - 1991 > now - 2018);


//Operator Precedece
// const now = 2037;
// const ageJones = now - 1991;
// const ageSarach = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; //x = y = 10, First, x = 10
// console.log(x, y);

// const averageAge = (ageJones + ageSarach) / 2;
// console.log(ageJones, ageSarach, averageAge);

//Coding Challenge

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀

// const markWeight = 78;
// const markHeight = 1.69;
// const JohnWeight = 92;
// const JohnHeight = 1.95;

// const markWeight = 95;
// const markHeight = 1.88;
// const JohnWeight = 85;
// const JohnHeight = 1.76;


// const markBMI = markWeight / markHeight ** 2;
// const JohnBMI = JohnWeight / (JohnHeight * JohnHeight);
// const markHigherBM = markBMI > JohnBMI;
// console.log(markBMI, JohnBMI, markHigherBM);
*/

/*String and Template Literals
// const firstName = "Jones";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + " , a " + (year - birthYear) + " years old " + job + 'i';
// console.log(jonas);


// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// mutiple
// lines`);
*/

/*if else statement
// const age = 15;

// if (age >= 18) {
//     console.log("Sarah can start driving license🚗")
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young, Wait another ${yearsLeft} years:)`)
// }

// const birthYear = 1998;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);
*/


// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/