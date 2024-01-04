"use strict";
let myName;
let myAge;
let address;
let myBirthdate;
myName = "Jean de Dieu";
myAge = 21;
address = {
    email: "jado.milton@gmail.com",
    phone: 787308777,
    country_code: "+250",
    street: "KK 83st",
};
myBirthdate = new Date("02-22-2000");
console.log(myBirthdate.toLocaleDateString());
// functions
const sum = (a, b) => a + b;
let postId;
let guitar = ["Strat", "Les Paul"];
let person = [
    {
        name: "some name",
        // callName: function () {
        //   return this.name;
        // },
    },
    {
        name: "say something son",
    },
    ["this"],
];
// tuples
let myTuple = ["Jean", 23, true];
let evh = {
    name: "Eddie",
    active: true,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: false,
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jp));
// enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
// literal types
let someName;
let username;
// functions
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage("Hello");
logMessage(add(43, 56));
// logMessage('Hello')
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = (a, b) => a * b;
// logMessage(multiply(43, 21));
// optional parameter
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
// fs
// const fs = require('fs')
// Rest paramaters
const total = (a, ...nums) => {
    return a + nums.reduce((a, b) => a + b, 0);
};
logMessage(total(1, 2, 3, 4, 5, 8));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// the use of the never type
const numberOrString = (val) => {
    if (typeof val === "string")
        return "string";
    if (typeof val === "number")
        return "number";
    return createError("this should not Happen");
};
// custom type guard
const isNumber = (val) => {
    return typeof val === "number" ? true : false;
};
// converting to more or less specific
let a = "hello";
let b = a;
let c = a;
let d = " world";
// console.log(d);
let e = "world";
const addOrconcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrconcat(2, 3, "concat");
let nextVal = addOrconcat(2, 4, "add");
// DOM
const img = document.querySelector("img"); // Not null Assertion
const myImage = document.getElementById("myImage");
const nextImg = document.querySelector("img");
img.src;
myImage.src;
