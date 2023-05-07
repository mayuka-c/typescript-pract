"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// DOM
const img = document.querySelector('img'); // saying ts that it is HTMLImageElement if we use img.src
const myImg = document.getElementById('#img'); // saying ts that it is not null if we use img.src
