/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda"

console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
//console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
//console.log(typeof 'Jonas');
javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1991
console.log(typeof year);
*/
/*
let age = 30;
// console.log(age);
age = 31;
// console.log(age);

const birthYear = 1991;
// birthYear = 1990
// const job;
var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
/*console.log(ageJonas, ageSarah);

//Math Operators
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2*2*2
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment operators
/*
let x = 10 + 5; //15
x += 10; // x = x +10 =25
x *= 4 //x = x * 4 =100
x--; // x = x + 1
console.log(x);

//Comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFUllAge = ageSarah >= 18;

console.log(now - 1991 > 2018)
*/
/*
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037

const jonas = "I'm " + firstName + ', a' + (year - birthYear) + 'year old' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`)

console.log(`String with
Multiple
lines`);
*/


/*
const age = 18;

let century;
if (age >= 18) {
    console.log('Sarah can start driving lessons😀');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2012;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark >= BMIJohn) {
    console.log("Mark's BMI is higher than John's");
} else { console.log("John's BMI is higher than Mark's!"); }

if (BMIMark >= BMIJohn) {
    console.log(`"Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}"`);
}
else { console.log(`"John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!"`); }
*/

/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + 'years old')
console.log('I am ' + '23' + 'years old')
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1; //'11'
n = n - 1;
console.log(n);
*/
// 5 falsy values: 0, '', undefined, null, NaN
// everything else is a truthy value

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) { //in any iff statement java will try to convert it to a boolean value so 0 becomes false and all other numbers become true
    console.log("Don't spend it all ;)");
}
else {
    console.log('You should get a job!')
}
let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED')
}
*/

/*
const age = 18;
if (age === 18) console.log('You just became an adult');
if (age == 18) console.log('You just became an adult');
*/

/*
const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!')
}
else if (favorite === 7) { console.log('7 is also a cool number') }
else if (favorite === 9) { console.log('9 is also a cool number') }
else { console.log('Number is not 23, 9, or 7') }
;
if (favorite !== 23) console.log('why not 23?')
    */

/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision

// if (shouldDrive) { console.log('Sarah is able to drive') } else { console.log('Someone else should drive...'); }

const isTired = false //C

console.log(hasDriversLicense && hasGoodVision && !isTired);
if (hasDriversLicense && hasGoodVision && !isTired) { console.log('Sarah is able to drive') } else { console.log('Someone else should drive...'); }
*/

/*
const day = 'monday';
switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code example');
        break;
    case 'friday':
        console.log('record videos');
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend')
        break;
    default:
        console.log('Not a valid Day!')

}
*/
/*
const age = 23
const drink = age >= 18 ? 'wine ' : 'water';
console.log(drink)

let drink2;
if (age >= 18) { 'wine'; } else { drink2 = 'water'; }
console.log(drink2)

console.log(`I like to drink" ${age >= 18 ? 'wine' : 'water'}`);
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);
*/