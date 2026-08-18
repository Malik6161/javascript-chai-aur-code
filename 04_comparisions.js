console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);

// Comparing different data types

console.log("2" > 1); // js automatically convert string to number and than compare with the 1

console.log(null > 1);
console.log(null == 1);
console.log(null >= 0);// here comparision occurs it first convert null to a number and than treating it as a 0 ; thats why it gaves true .
console.log(null <= 0); // same as the upper one

// == checks whether the values are equal, and JavaScript may convert the types before comparing.

console.log(5 == "5"); // true

// 5       → number
// "5"     → string

// === checks both value AND data type.
// It does not perform type conversion.

// NOTE:
        // In most of the cases we avoid the conversion of the Null and the undefined because they can confuse us at any time by giving seprate valuse