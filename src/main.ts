let myName: string;
let myAge: number;
let address: any;
let myBirthdate: Date;

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

const sum = (a: number, b: number) => a + b;
let postId: number | string;
let guitar: string[] = ["Strat", "Les Paul"];
let person: object[] = [
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

let myTuple: [string, number, boolean] = ["Jean", 23, true];

// interfaces and types

interface Guitarist {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}
let evh: Guitarist = {
  name: "Eddie",
  active: true,
  albums: [1984, 5150, "OU812"],
};
let jp: Guitarist = {
  name: "Jimmy",
  active: false,
  albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jp));
// enums

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
// console.log(Grade);

// type Aliases

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarists = {
  name: string;
  active?: boolean;
  albums: stringOrNumberArray;
};
type userId = stringOrNumber;

// literal types

let someName: "John";
let username: "Dave" | "John" | "Amy";
// functions
const add = (a: number, b: number): number => {
  return a + b;
};
const logMessage = (message: any): void => {
  console.log(message);
};
logMessage("Hello");
logMessage(add(43, 56));
// logMessage('Hello')
let subtract = function (c: number, d: number): number {
  return c - d;
};
type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = (a: number, b: number) => a * b;

// logMessage(multiply(43, 21));
// optional parameter

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }

  return a + b;
};
// default value
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

// fs
// const fs = require('fs')
// Rest paramaters

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((a, b) => a + b, 0);
};
logMessage(total(1, 2, 3, 4, 5, 8));
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};
// the use of the never type
const numberOrString = (val: number | string): string => {
  if (typeof val === "string") return "string";
  if (typeof val === "number") return "number";
  return createError("this should not Happen");
};
// custom type guard
const isNumber = (val: number): boolean => {
  return typeof val === "number" ? true : false;
};

// Type casting /// type assertions

type one = string;
type two = string | number;
type three = "hello";
// converting to more or less specific
let a: one = "hello";
let b = a as two;
let c = a as three;

let d = <one>" world";
// console.log(d);
let e = <string | number>"world";

const addOrconcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};
let myVal: string = addOrconcat(2, 3, "concat") as string;
let nextVal: number = addOrconcat(2, 4, "add") as number;
// DOM

const img = document.querySelector("img")!; // Not null Assertion
const myImage = document.getElementById("myImage") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.querySelector("img");

img.src;

myImage.src;
