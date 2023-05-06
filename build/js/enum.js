"use strict";
var Grade;
(function (Grade) {
    Grade[Grade["S"] = 1] = "S";
    Grade[Grade["A"] = 2] = "A";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["C"] = 4] = "C";
    Grade[Grade["D"] = 5] = "D";
})(Grade || (Grade = {}));
console.log(Grade.S); // 1
