//Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference(Non primitive)
// Object, Array, Functions, Dates

//Datatype in JS is dynamic
// We don't need to specify datatype while declaring variable

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false as Symbol is unique

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // bigint


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Nupur",
    age: 21,
    isLoggedIn: false
}

function myFunction(){
    console.log("This is my function");
}
