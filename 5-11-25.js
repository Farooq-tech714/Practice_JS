// let a=5;
let b = 2;
// console.log("sum of a and b is : ", a+b)
//sum of a and b is :  7

//--

let x = 10;
x = x + 5;
console.log("the value of x : ", x);
//the value of x :  15

//--

let num = 7;
let product = num * num;
console.log("the product is : ", product);
//the product is :  49

//--    

let p = 8;
let q = 3;
let r = p - q * 2;
console.log("value of r :", r);
//value of r : 2


//--

let count = 1;
count++;
count++;
console.log("count : ", count)
//count :  3

//--

let m = 10;
let n = m++;
console.log(m, n)
//m=11, n=10

//--

let c = 6;
d = ++c;
console.log(c, d)
//c=7, d=7

//--

console.log("5" + 3);
//53

//--

console.log(5 == "5");
//true

//--

console.log(5 === "5");
//false

//--

let a = 2;
a *= 3;
a -= 4;
console.log("value of a is : ", a);

// PART B

let num1 = 15;
let num2 = 4;

let sum = num1 + num2;
console.log("Sum: ", sum);

//--

//function to add two numbers
// const addTwoNumbers = function (a, b) {
//     console.log(a + b);
// }

// addTwoNumbers(20, 30); //50

//--

//function to add two numbers and return the result
const addTwoNumbers = function (a, b) {
    return a + b;
}
console.log(addTwoNumbers(20, 30)); //50

//--        
//using arrow function
const add = (a, b) => {
    console.log(a + b);
}

add(5, 7); //12

//--

//using arrow function 
const square = (x) => x * x;
console.log(square(3));

//--

const multiply = function (a, b) {
    return a * b
}

console.log(multiply(40, 4));

//--

// convert to C to F           Formula: F = (C * 9/5) + 32 

// withot parameter
const CtoF = function () {
    let c = 100;
    let f = (c * 9 / 5) + 32;
    return f;
}
console.log(CtoF()); //212

//with parameter
const celciusTOFahrenheit = function (celcius) {
    console.log(celcius * 9 / 5 + 32);
}

celciusTOFahrenheit(1); //33.8

//--

// convert F to C           Formula: C = (F - 32) * 5/9 -----remain to u ndersatnad

const FtoC = function () {
    let F = 33.8;
    let C = (F - 32) * 5 / 9;
    return C;
    // return Number((C).toFixed(2)); // 1
    // return Number(C.toFixed(2)); // 1
}
console.log(FtoC()); // 0.9999999999999984

//--    

//Check Even or Odd
//using patrameter
const CheckEvenOdd = function (x) {
    if (x % 2 == 0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}
CheckEvenOdd(4) //Odd Number

//--
//using without patrameter
const EvenOdd = function () {
    let z = 3;

    if (z % 2 == 0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}

EvenOdd() //Even Number

//--

//Sum of First N Natural Numbers -----remain to u ndersatnad


const sumOfNNaturalNumbers = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumOfNNaturalNumbers(5)); //15

//--

//using Formula: n(n+1)/2
const sumOfNNN = function (n) {
    console.log(n * (n + 1) / 2);
}

sumOfNNN(5); //15

//--

//Print Numbers from 1 to 10 (use loop)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//--

//Print Multiplication Table of a Given Number

const table = function (num, limit = 10) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

table(4); 

// const multiplicationTable = function(number, limit = 10) {
//     for (let i = 1; i <= limit; i++) {
//         console.log(`${number} × ${i} = ${number * i}`);
//     }
// };

// multiplicationTable(7);

//--

//Count from 10 to 1 (reverse loop)

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//--

//Find the Largest of Two Numbers
const largestOfTwoNumbers = function (a, b) {
    if (a > b) {
        console.log(a, "is largest");
    } else if (b > a) {
        console.log(b, "is largest");
    } else {
        console.log("Both are equal");
    }
}

largestOfTwoNumbers(20, 30); //30 is largest


//--

//Simple Interest Calculation   Formula: SI = (P * R * T) / 100

let simpleInterest = function (P, R, T) {
    let SI = (P * R * T) / 100;
    return SI;
}

console.log(simpleInterest(1500, 6, 2)); // 180




