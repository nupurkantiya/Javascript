// Arithmetic Operators perform mathematical calculations like addition, subtraction, multiplication, etc.

const sum = 5 + 3; // Addition
const diff = 10 - 2; // Subtraction
const p = 4 * 2; // Multiplication
const q = 8 / 2; // Division
console.log(sum, diff, p, q);


// Assignment operators are used to assign values to variables. They can also perform operations like addition or multiplication while assigning the value.

let n = 10;
n += 5;
n *= 2;
console.log(n);

// Comparison operators compare two values and return a boolean (true or false). They are useful for making decisions in conditional statements.
console.log(10 > 5);
console.log(10 === "10");

// Logical operators are mainly used to perform the logical operations that determine the equality or difference between the values.
const a = true, b = false;
console.log(a && b); // Logical AND
console.log(a || b); // Logical OR
// && returns true if both operands are true.
// || returns true if at least one operand is true.
// ! negates the boolean value.

// Bitwise operators perform operations on binary representations of numbers.
const res = 5 & 1; // Bitwise AND
console.log(res);
const res1 = 5 | 1; // Bitwise OR
console.log(res1);
const res2 = ~5; // Bitwise NOT
console.log(res2);
const res3 = 5 ^ 1; // Bitwise XOR
console.log(res3);      
// The bitwise AND operator (&) compares each bit of two numbers and returns a new number where each bit is set to 1 only if both bits are 1.
// The bitwise OR operator (|) compares each bit of two numbers and returns a new number where each bit is set to 1 if at least one of the bits is 1.
// The bitwise NOT operator (~) inverts all the bits of a number, changing 1s to 0s and 0s to 1s.
// The bitwise XOR operator (^) compares each bit of two numbers and returns a new number where each bit is set to 1 only if the bits are different.

// The ternary operator is a shorthand for conditional statements. It takes three operands.
const age = 18;
const canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote);

// Comma Operator (,) mainly evaluates its operands from left to right sequentially and returns the value of the rightmost operand. 
let n1, n2;
const re = (n1 = 1, n2 = 2, n1 + n2);
console.log(re);

// Unary operators operate on a single operand (e.g., increment, decrement).
let x = 5;
console.log(++x); // Pre-increment
console.log(x--); // Post-decrement (Output: 6, then x becomes 5)

// JavaScript Relational operators are used to compare its operands and determine the relationship between them. They return a Boolean value (true or false) based on the comparison result.
const obj1 = { length: 10 };
console.log("length" in obj1);
console.log([] instanceof Array);

// BigInt operators allow calculations with numbers beyond the safe integer range.
const big1 = 123456789012345678901234567890n;
const big2 = 987654321098765432109876543210n;
console.log(big1 + big2);

// JavaScript String Operators include concatenation (+) and concatenation assignment (+=), used to join strings or combine strings with other data types.
const s = "Hello" + " " + "World";
console.log(s);

// The optional chaining operator allows safe access to deeply nested properties without throwing errors if the property doesn’t exist.
const obj = { name: "Aman", address: { city: "Delhi" } };
console.log(obj.address?.city);
console.log(obj.contact?.phone);
