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

// img.src;

// myImage.src;
// classes

class Coder {
  secondLang!: string; // a property that does not need to be instantiated
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return ` Hello, I am ${this.age} years old!`;
  }
}

const jean = new Coder("Jean", "Rock", 21);
console.log(jean.getAge());

class webDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const elie = new webDev("DELL", "Elie", "Lofi", 20);
console.log(elie.getLang());
// console.log(elie);
///////////////////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarst implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}
const Page = new Guitarst("Jimmy", "guitar");

console.log(Page.play("strums"));

// //////////////////////////

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
const Brave = new Peeps("Brave");
console.log(John);
console.log(Peeps.count);

///////////////////////////////////// getters and setters

class Bands {
  private datastate: string[];
  constructor() {
    this.datastate = [];
  }
  public get data(): string[] {
    return this.datastate;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.datastate = value;
      return;
    } else {
      throw new Error("Params is not an array of strings");
    }
  }
}

const MyBands = new Bands();
MyBands.data = ["Jean", "Loppez"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Peter", "Kamali"];
console.log(MyBands.data);
