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
// img.src;
// myImage.src;
// classes
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return ` Hello, I am ${this.age} years old!`;
    }
}
const jean = new Coder("Jean", "Rock", 21);
console.log(jean.getAge());
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const elie = new webDev("DELL", "Elie", "Lofi", 20);
console.log(elie.getLang());
class Guitarst {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarst("Jimmy", "guitar");
console.log(Page.play("strums"));
// //////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
const Brave = new Peeps("Brave");
console.log(John);
console.log(Peeps.count);
///////////////////////////////////// getters and setters
class Bands {
    constructor() {
        this.datastate = [];
    }
    get data() {
        return this.datastate;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.datastate = value;
            return;
        }
        else {
            throw new Error("Params is not an array of strings");
        }
    }
}
const MyBands = new Bands();
MyBands.data = ["Jean", "Loppez"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Peter", "Kamali"];
console.log(MyBands.data);
