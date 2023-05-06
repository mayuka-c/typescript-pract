"use strict";
let myObj;
myObj = []; // Array is also an object
console.log(typeof myObj);
myObj = {};
const exampleObj = {
    prop1: "Apple",
    prop2: 20
};
console.log(exampleObj); // {prop1: 'Apple', prop2: 20}
// All three fields are required below
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
};
console.log(evh); // {name: 'Eddie', active: false, albums: Array(3)}
// price field is optional
let fruit1 = {
    name: "Apple"
};
console.log(fruit1); // {name: 'Apple'}
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(evh)); // Hello Eddie
