"use strict";
const mult = (a, b) => {
    return (a * b);
};
console.log(mult(3, 5)); // 15
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!'); // "Hello!"
logMsg(mult(5, 4)); // 20
let sub = function (c, d) {
    return (c - d);
};
logMsg(sub(5, 4)); // 1
// interface mathFunction {
//     (a: number, b: number): number
// }
let div = function (c, d) {
    return (c / d);
};
logMsg(div(5, 4)); // 1.25
// Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2)); // 7
logMsg(addAll(2, 3)); // 5
logMsg(sumAll(2, 3)); // 7
logMsg(sumAll(2, 3, 2)); // 7
logMsg(sumAll(undefined, 3)); // 15
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5, 6, 7)); // 28
// createErr is of `never` type 
const createErr = (errMsg) => {
    throw new Error(errMsg);
};
// infinite is of `never` type if break was not there
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 10)
            break;
    }
};
