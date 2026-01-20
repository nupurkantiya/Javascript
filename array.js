let a = [];
console.log(a);

let b = [10,20,30];
console.log(b);

let c = new Array(20,34,56);
console.log(c);

let lang = ["HTML","CSS","Js"];
console.log(lang[2]);
console.log(lang[0]);
let fst = a[1];
console.log("First item: ",fst);

let lst = a[a.length - 1];
console.log("Last item: ",lst);

//modifying array elements
let ak = ["HTML","CSS","JS"];
console.log(ak);
ak[1] = "ReactJS";
console.log(ak);

//adding elements to array
let fruits = ["Apple","Mango"];
fruits.push("Banana");
fruits.unshift("Pineapple");
console.log(fruits);

//remove elements from array
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);

fruits.splice(0,1); //index, no of elements to remove
console.log(fruits);

////////////////////////
// Creating an Array and Initializing with Values
let an = ["HTML", "CSS", "JS"]

// Increase the array length to 7
an.length = 7;

console.log("After Increasing Length: ", an);

// Decrease the array length to 2
an.length = 2;
console.log("After Decreasing Length: ", an)

// Iterating through for loop
for (let i = 0; i < an.length; i++) {
    console.log(an[i])
}

// Iterating through forEach loop
a.forEach(function myfunc(x) {
    console.log(x);
});


// Creating an Array and Initializing with Values
let am = ["HTML", "CSS", "JS", "React"];
let bm = ["Node.js", "Expess.js"];

// Concatenate both arrays
let concateArray = am.concat(bm);
console.log("Concatenated Array: ", concateArray);

// Convert array ot String
console.log(bm.toString());

// Check type of array
console.log(typeof am);

//join()method
console.log(am.join(" | "));

//delete operator
delete am[1];
console.log("After Deletion: ", am);

//concat() method
let array1 = ["A", "B", "C"];
let array2 = ["D", "E", "F"];
let combinedArray = array1.concat(array2);
console.log("Combined Array using concat(): ", combinedArray);

//flat() method
const a1 = [['1', '2'], ['3', '4', '5',['6'], '7']];
const a2 = a1.flat(Infinity);
console.log(a2);

// unshift() method
const numbers = [3, 4, 5];
numbers.unshift(1, 2);
console.log("After unshift(): ", numbers);

// shift() method
const nums = [1, 2, 3, 4, 5];
const firstElement = nums.shift();
console.log("Removed Element using shift(): ", firstElement);
console.log("Array after shift(): ", nums); 

// splice() method
const letters = ['A', 'B', 'C', 'D', 'E'];
letters.splice(2, 1, 'X', 'Y');
console.log("After splice(): ", letters);

// slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
const akk = [1, 2, 3, 4, 5];
const ret = akk.slice(1, 4);
console.log(ret); 
console.log(akk)

// The some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument function.
const at = [1, 2, 3, 4, 5];
let res = at.some((val) => val > 4);
console.log(res);

// The reduce() method is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator.
let arr = [88, 50, 25, 10];
let sub = arr.reduce(geeks);

function geeks(tot, num) {
    return tot - num;
}
console.log(sub);

