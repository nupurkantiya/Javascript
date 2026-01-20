// In functions, parameters are placeholders defined in the function, while arguments are the actual values you pass when calling the function
function greet(name) {   // 'name' is a parameter
  console.log("Hello " + name);
}

greet("Alice");  // "Alice" is the argument


function add(a, b){
    console.log("Sum is: " + (a + b));
}
add(5,15); // 5 and 15 are arguments passed to the function

// ////////////////////////

function greet(name = "Guest") { // Default parameter
  console.log("Hello, " + name);
}

greet();        // Hello, Guest (default used)
greet("Aman");  // Hello, Aman


// ///////////////////////////////

function subtract(k, l){
    return k-l;
}
let difference = subtract(30, 22);
console.log("Difference is: " + difference);

// ///////////////////////////////

// Named function
function greet(){
    return "Welcome Noobs!";
}
console.log(greet());

// Anonymous function assigned to a variable
const farewell = function(){
    return "Goodbye Noobs!";
};
console.log(farewell()); 

// Arrow function

const multiply = (x, y) => x * y;
console.log("Product is: " + multiply(4, 6));

const Divide = (x,y) => x / y;
console.log("Quotient is: " + Divide(40,4));

// IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("This function runs immediately upon definition!");
})();
// IIFE with parameters
(function(a, b){
    console.log("Sum from IIFE: " + (a + b));
})(7, 8);

// Callback function is a function passed into another function as an argument
function num(n, callback){
    return callback(n);
}   
 const double = (n) => n * 2;
 console.log("Double is: " + num(10, double));

 //Constructor Function is used to create multiple objects with similar properties and methods.
 function Person(name, age){
    this.name = name;   
    this.age = age;
    this.introduce = function(){
        console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
    }
    }

    //Async Function allows you to write asynchronous code using the async/await syntax.
    async function fetchData(){
        return "Data fetched!";
    }
    fetchData().then(console.log);

    // Generator Function is a special type of function that can pause its execution and resume later, allowing you to generate a sequence of values over time.
    function* numberGenerator(){
        yield 1;
        yield 2;
        yield 3;
    }
    const gen = numberGenerator();
    console.log(gen.next().value);  
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
// The first three calls to gen.next().value will output 1, 2, and 3 respectively. The fourth call will output undefined since there are no more yield statements left in the generator function.

// Recursive Function is a function that calls itself in order to solve a problem.
function factorial(n){
    if(n === 0 || n === 1){ 
        return 1;
    }
    return n * factorial(n - 1);
}

// Example: Calculating factorial of 5
console.log("Factorial of 5 is: " + factorial(5)); // Output: 120

// Higher-Order Function is a function that takes another function as an argument or returns a function as its result.
function operateOnNumbers(a, b, operation){
    return operation(a, b);
}
const addNumbers = (x, y) => x + y;
const result = operateOnNumbers(10, 20, addNumbers);
console.log("Result of addition: " + result); // Output: 30

// Nested Function is a function defined inside another function.
function outerFunction(msg){
    function innerFunction(){
        console.log(msg);
    }
    innerFunction();
}

// Pure Function is a function that, given the same input, will always return the same output and does not have any side effects (it doesn't modify any external state).
function pureAdd(x, y){
    return x + y;
}
console.log("Pure Function Result: " + pureAdd(3, 4)); // Output: 7

// Default Parameter Function is a function that has default values for its parameters.
function greetUser(name = "Guest"){
    console.log("Hello, " + name + "!");
}
greetUser(); // Output: Hello, Guest!
greetUser("Ravi"); // Output: Hello, Ravi!

// Rest Parameter Function allows a function to accept an indefinite number of arguments as an array.
function sumAll(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of all numbers: " + sumAll(1, 2, 3, 4, 5)); // Output: 15

