// primitive types

let number: number = 1;
let str: string = "hello";
let bool: boolean = true;
let n: null = null;

// objects

// array
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["1", "2"];

// object

// anonymous
// let person: { name: string; id: number } = {
//   name: "yeeun",
//   id: 1,
// };

// type alias
// type TPerson = {
//   name: string;
//   id: number;
// };

// let person2: IPerson = {
//   name: "yeeun",
//   id: 2,
// };

// interface IPerson {
//   name: string;
//   id: number;
// }

// function
function add(x: number, y: number): number {
  return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

const add3: typeof add = (x, y) => {
  return x + y;
};

type AddFn = (x: number, y: number) => number;

interface IAddFn {
  (x: number, y: number): number;
}

// union
let age: number | string;
age = 1;
age = "1";

// literal type with union
type Direction = "north" | "south" | "east" | "west";
let direction: Direction = "east";

// extend from another type
type TPerson = {
  name: string;
};

type TStudent = TPerson & {
  studnetId?: number;
};

let student: TStudent = { name: "yeeun" };

interface IPerson {
  name: string;
}

interface IStudent extends IPerson {
  studentId: number;
}

// generic type
function toNumberArr(x: number, y: number): number[] {
  return [x, y];
}

function toStringArr(x: string, y: string): string[] {
  return [x, y];
}
