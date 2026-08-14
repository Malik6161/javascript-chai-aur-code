
console.log("Hello World!");
console.log("Welcome to JavaScript");


// 2. Variables

let name = "Awais";
let age = 21;

console.log(name);
console.log(age);


// 3. const 

const country = "Pakistan";

console.log(country);


// 4. Changing a let variable

let score = 50;

console.log(score);

score = 80;

console.log(score);


// 5. Different Types of Values

let username = "Awais";       // String
let userAge = 21;             // Number
let isStudent = true;         // Boolean
let city;                     // Undefined
let emptyValue = null;        // Null

console.log(username);
console.log(userAge);
console.log(isStudent);
console.log(city);
console.log(emptyValue);


// 6. Checking Data Types

console.log(typeof username);
console.log(typeof userAge);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof emptyValue);


// 7. Basic Arithmetic

let a = 10;
let b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Remainder


// 8. Variables with Calculations

let price = 1000;
let quantity = 3;

let total = price * quantity;

console.log(total);


// 9. Basic String Concatenation

let firstName = "Muhammad";
let lastName = "Awais";

let fullName = firstName + " " + lastName;

console.log(fullName);


// 10. Template Literals

let product = "Laptop";
let productPrice = 80000;

console.log(`The price of ${product} is ${productPrice} PKR.`);


// 11. Reassigning Variables

let marks = 70;

console.log(marks);

marks = 85;

console.log(marks);


// 12. Constants Cannot Be Reassigned

const university = "University of Agriculture Faisalabad";

console.log(university);

// university = "Other University";
// This will give an error because const cannot be reassigned.