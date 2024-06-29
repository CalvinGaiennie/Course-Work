'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

console.log('hello')
*/


/*
function logger() {
    console.log('My name is Jonas')
}

logger();

logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);
console.log(fruitProcessor(1, 45));
console.log(fruitProcessor(7, 11));
*/


/*

function calcAge1(birthYear,) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1992);
console.log(age1, age2);
*/

//function expression
/* const calcAge2 = function (birthYeah) {
 return 2037 - birthYeah;
}
*/

/*
//arrow funciton
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3)

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
console.log(yearsUntilRetirement(1991, 'Jonas'));
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}



function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}
console.log(fruitProcessor(3, 9));
console.log(fruitProcessor(3, 3));
*/

/*
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;;

    }
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/



// return `${firstName} retires in ${retirement} years`;



// Challenge 5

/*

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49)
console.log(scoreDolphins, scoreKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {


    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win the trophy 🏆' ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win the trophy 🏆' ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

*/

// const freind1 = 'Michael';
// const freind2 = 'Steven';
// const freind3 = 'Peter';

/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years)

console.log(friends[0]);
console.log(friends[2]);
console.log(years[3]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = ['firstName', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

*/


// using an array in an array

/*

const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3)
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);
*/


// Basic Array Methods (array operations)


/*
const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
//Push adds something to your array Push is a function that returns something it returns the length of the new array
const newLength = friends.push('Jay');
//unshift adds something to the begginng of the array and also returns the new length
friends.unshift('John');
console.log(friends);
console.log(newLength);
*/



/*
//remove elements
//pop is the opposite of push it returns the removed element not the new length of the array
friends.pop();
const popped = friends.pop(); //you could call the function through another variable
//if you dont put a value then it will take out the last element
console.log(friends);
console.log(popped);

friends.shift(); //removes the first element this will return the element that was removed
console.log(friends);


//this indexOf function call will return the location of an element in the array
console.log(friends.indexOf('Michael'));

//this is a more modern version of indexOf it returns true if the element is in the array and false if it is not
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('23'));
//it tests strictly so if you have a number but you search a string it will not show up.

//heres an example of using this.

if (friends.includes('Peter')) {
    console.log('You have a friend called Steven');
}

*/



//Coding Challenge 6?


/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 :
        bill * .2;
}


//const CalcTip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

//object
//objects allow you to assign each part of them (property) a name. This allows you to call each property by name instead of placement/location. arrays are good for ordered data but objects are better for unstructured data.

/*
const jonas = {
    firstname; 'Jonas',
    age: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
*/






//how to retreive data from objects and dot vs bracket notation


/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas.age);
console.log(jonas['firstName']);

// you can put expressions in the brackets but not with dots
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//console.log(jonas.'first' + nameKey); This would not work
// use the dot notation when you dont need to compute becasuse its faster and cleaner

const interestedIn = prompt('What do you want to know about Jonas? choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! What do you want to know about Jonas? choose between firstName, lastName, age, job, and friends')
}


//how to add new properties to an object

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);




//chalenge
//write "jonas has 3 friends, and his best friend is called Michael" you will need multiple dots. get 3 and michael from the object

const message = 'Jonas has ${jonas.freinds} friends, and his best friend is called ${jonas.freinds[1]}';

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

*/






/*
//you can add functions to objects

//object
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.jon}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


//Challenge
//get summary challenge
//"Jonas is a 46-year old teacher and he has a drivers licence."
console.log(jonas.getSummary());

*/




/*
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI $(mark.BMI} is higher than ${john.fullName}'s BMI (${john.bmi}`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI $(john.BMI} is higher than ${mark.fullName}'s BMI ${mark.bmi}`)
};
*/



// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep = rep + 1) {
//     console.log(`lifting weights repition ${rep}`);
// }




/*

const jonas = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Micael', 'Peter', 'Steven'],
    true
];


for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // filling types array
    // types[i] = typeof jonas[i];

    types.push(typeof jonas[i]);
}


console.log(types);
*/




// const interestedIn = prompt('What do you want to know about Jonas? choose between firstName, lastName, age, job, and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! What do you want to know about Jonas? choose between firstName, lastName, age, job, and friends')
// }


let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
    console.log(prompt("Hello " + person + "! How are you today?"));
}

console.log('Patrick Gandy 3');
