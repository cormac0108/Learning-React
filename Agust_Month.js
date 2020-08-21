
//Javascript. Concepts. 
//ECMA script is a specification. Javascript iks a programming language that confirms this specification.
// Browser - javascript engine. Front-end.   then Node.js for javascript the back-end.
//ECMA v1 =1997  to present. 
// inspect tab. console  tab. 
// development enviroment. text editors. VS code. 
// download node.js - because it is useful. 
// js-basics.  html boiler plate.  learn html.    live-server extension. install it. 
// open with live-server. ! + tab for html boilerplate. 
// script element at the bottom of the body section. 
// load speed. talking to elements. js code at the end of  the body section. 
// a statement is an action.  a string.  // for a commment. 
//  explain whys and hows. alt + ctrl + i   on the keyboard to bring up the dev tools in 
// your chrome browser. Seperation of concerns. external files. html from js. js to implement behaviour.
// script tag in html  with a src="" link to your js file. 
// node index.js  on the terminal.  node is a runtime enviroment for executing js code. 
// head to the folder you created earlier.  then run node index.js
// node is a runtime enviroment for js code.   integrated terminal in your text editor. node is a separate 
//topic...   //variables to store data temporarily in a computers memory. a variable is like a box. 

// we use the let keyword - it is more common to use single quotes when declaring strings in javascript.

let name; // declaring a variable - witth an undefined value.
let name2 = 'Cormac';
console.log('Cormac');
// 2 rules when naming variables.  1. Cannot be a reserved keytword. 2. should be meaningful.
// cannot start wit a number (1name).  Use camelcase (firstName).   Are case-sensitive
// best practice is to declare each variable on a separate line
let firstName = 'Cormac';
let lastName = 'Donohoe';
// instead of   let firstName = 'mac', lastName = 'don'



console.log("Hello World")
console.log("I love coding - future web developer in the house!")

// lets look at constants.  you cant reassign constants
const interestRate = 0.3;
interestRate = 1;  //this wont work  - so if you need to reassign a variable use let. 
console.log(interestRate);

// primitive types. and reference types. 
let name3 = 'Cormac' // String literal
let age = 30; // Number literal
let isApproved = false; // Boolean literal
let banana = undefined; 
let selectedColor = null;   // to clear the value of a variable. 
// in ES6 we also have symbol. 


// we use null when we want to explicityl set the variables value to none, e.g if a user was selecting a 
//color


// dynamic typing. the type of a variable can change at run time. the values of variables will be determined
//at run time.  dynamic vs static.
typeof name
name = 1; 
typeof name
// in js we dont have floating point numbers. all numbers are the type numbers. 
// undefined is a type but it is also a value. 
typeof banana;

// objects -  reference types = objects, arrays and functions. 
// an object like a person. they have properties. makes cleaner code.
let name = 'cormac';
let age= '16';
// we can create an object instead.   a literal object. key value pairs.  key: value. 
// the {} synthax - object literal. 
let person = {
    name: 'cormac',
    age: 15
}
console.log(person)

// dot notation 
person.name = 'john';
console.log(person.name);
// Bracket notation - better for changing at runtime dynamically. for now stick to dot notation
let selection = 'name';
person['name'] = 'Cormac'
person[selection] = 'Cormac'

console.log(person.name)


// arrays.  store lists.
let selectedColors = ['red' , 'blue'];  // array literal. square brackets 
console.log(selectedColors);
// array elements have index numbers. starting from 0
console.log(selectedColors[0]);
// js is dynamic so we can add more elements to the array during run time 
selectedColors[2] = 'green';
//the length is dynamic. we can store different types in an array. an array is an object
selectedColors[3] = 2;
typeof selectedColors;
// learn about prototypes. array properties. an array is a data structure. 
console.log(selectedColors.length); 

//functions - in the body you can use logic. 
//name is a parameter of the greet function. 
function greet(name) {
    console.log('hello' + name);
}

//we refer to the john in this case as an argument
greet('John'); 

// we can add multiple parameters. 
function greet2(firstNameBoy, lastNameBoy) {
    console.log('hello' + firstNameBoy + ' ' + lastNameBoy);
}

greet('johnny', 'James');

//types of functions. 
// performing a task 
function greet3(name) {
    console.log('hello' + name);
}

// Calculating a value.
function square(number) {
    return number * number;
}
console.log(square(2));

//console.log()  is also a function call
//a function is a set of statements. 

//file extensions 

document.write('hello world');

// comments are used to describe what is happening in the code.  concat using the + sign
let num1 = 5;
let num2 = 3;
let total = num1 + num2;
console.log(total);


//js ha ndles the string conversion.   binary operators take two params.  unary operators take one param
// ++  // is a unary param 
let total3 = ++num1;  // increment before evaluation 
let total2 = num1++; // increment after the evaluation
// also you can do -- for subtraction. 
// properties and methods..   methods take input  e.g .substring()
var alpha = 'ABCDEFG';
var result = alpha.length;
var result2 = alpha.substring(3, 5);  //for positions.
document.write(result);

//ways to create an array 
var a = new Array(2);
a[0] = 'cat';
a[1] = 'dog';

document.write(a[1]);

// this way is more efficient. separate your values with commmas
var a2 = new Array('banana', 'dog', 'fox', 53)
document.write(a2[1]);

//this way is even faster using []
var a3 = ['dog', 4 , 'mouse', 'hamster'];
document.write(a3[1]);

// functions 
function sayHello(who) {
    document.write("hello, " + who);
}
sayHello('John');
document.write('<br>');
sayHello('Mary');

// flow control statements.  the if statements. 
// if statement
let a = 10 
if (a >= 10 ) {
    console.log('banana');
} else {
    console.log(' its less mate')
}

// for loop
for (i=0; i<5;i++) {
    document.write("This is iteration" + i + "<br>");
}
//continue
//solid founcdation work from here. 

// practice javascript - no shortcuts ... you got to code to get better. Use the MDN web docs.
// javascript is all about dom manilpulation and events. use MDN as a reference.
// have an external js file so you can debug. debugging tools. debug in the console. sources tab. 
// blink points. build stuff create elements. 

const jamie = ['tony', 'michael', 'Amanda']

const name = () => {
    for (i of jamie) {
        return console.log("Bananas");
    }
    
} 

//const for when we dont want a value readssigned. 
//let + const
const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (eperience >= 100) {
    console.log(player)
    let wizardLevel = true;
}

const aMil = function () {
    console.log('a');
}

// symbol  - create this completely unique type. identifier
//  for object properties
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// arrow functions - with arrow functions if you have a single value -
// to return we can just put it on one line
function add (a, b) {
    return a + b ;
}
const add = (a , b) => a + b;
//its on one line. write better cleaner code.
// ternary operatoor . control flow. 
// condition? expr1 : expr2;

function isUserValid (bool) {
    return bool;
}

let answer = isUserValid(true) ? "you may enter" : "Access denied"
function condition () { 
    if (isUserValid(true)) {
        return "you are allowed"

    } else {
        return " you are not allowed. "
    }
}
const answer2 = condition();
//ternary operator is nicer. 

//switch statement. good for multiple if else cases and then an else. 
function moveCommand (direction ) {
    let whatHappens;
    switch(direction) {
        case 'forward':
            whatHappens = 'you encounter a monster';
            break;
        case 'right':
            whatHappens = 'you encounter a monster';
            break;
        case 'back':
             whatHappens = 'you encounter a monster';
            break;
        default: 
        whatHappens = "lease enter a valid direction";
    }
    return whatHappens;
}

// advanced functions 
//separate scope - local variables.  Closure 
//children always have access to their parent scope but not vice versa. 
const first = () => {
    const greet = 'HI';
    const second = () => {
        const name = 'bob' ;
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Currying - a function inside of a function. input. params. one at a time. 
// more extensible.
const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5);  //should return 25
curriedMultiply(5)(10);

//compose - put two functions together to form another function. 
const compose = (f , g) => (a) => f(g(a));


//Es8? 2017.... 
//string padding.
'hello'.padStart(10);
'hello'.padEnd(10);
// commas at the end

const fun = (
    a,
    b,
    c,
) => {
    console.log(a);
}
fun(1,2,3,4)

// object methods.

Object.values
Object.keys
Object.entries 

let obj = {
    username0: 'santa',
    username1: 'bob',
    username2: 'michael',
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    return value[1] + value[0].replace('username' , ' ');
})

//Looping in js. 
// for of 
// for in
// // iterating over an array. -arrays, strings. 
for ( item of basket) {
    console.log(item);
}

for ( item of 'basket') {
    console.log(item);
}


// modules.  - bundlers. webpack + es6. a module system.  different ways. 
// well be using this alot in react - really clean. 
//js2 
// es6 + webpack. 

export const add = (a, b) => a + b;
//or 
export default function (a , b) {
    return a + b;
}

//js2 
import {add} from './add' ;
//or 
import add from  './add'; 

// very useful tool. bundle.js --- file. 


// npm packages? the npm registry. yarn = same idea.  different types of packages
// 3 types of packages. scripts that other people have written. 

//async js? 
// communicating with servers - use json. stringify. 
// json format is beter. "" with json. transfer data. 
JSON.parse()
JSON.stringify()


const user = {
    firstName: "John",
    lastName: "tombo",
}
JSON.stringify(user);
//then the server will
JSON.parse(user); 
//and understand what you want. 
//How things are working. 


//AJAx? 