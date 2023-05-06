"use strict";
let myName = "May";
let age;
let isMad = true;
let album = 32; // Union operator can be either string or number
let id; // can have value of any datatype
console.log(myName); // May
console.log(isMad); // true
myName = "aBc";
console.log(myName); // aBc
age = 42;
console.log(age); // 42
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 6)); // 9
let re = /\w+/g; // RegExp type
