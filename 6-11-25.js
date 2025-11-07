//Part A 

let a = 4;
let b = 6;
console.log(a * b); 
//24

//--

let x = 12;
x -= 5;
console.log(x) 
//7

//--    

let num = 9;
console.log(num / 3); 
//3

//--    

let p = 10;
let q = 4;
let r = p % q;
console.log(r); 
//2

//--

let value = 3;
value = value + 1;
value = value * 2;
console.log(value); 
//8

//--    

let m = 7;
let n = m--;
console.log(m, n);
//m=6, n=7

//--    

let av1 = 5;
let bv2 = ++a + 2;
console.log(a, b);
//av1=6, bv1=8

//--

console.log("10" - 2);
//8

//--

console.log(8 > 6); //true
console.log(6 > 8); //false

//--

let xv1 = 2;
xv1 += 4;
xv1 /= 2;
console.log(xv1);
//3         

//--    

//Part B

//Subtract Two Numbers
const subtract = function (n1, n2) {
    return n1 - n2;
}

console.log("first - second :", subtract(5, 2));
//first - second : 3

//--

//Cube of a Number
function cube(num) {
    console.log("Cube of", num, " is : ", num * num * num);
}

cube(3);
//Cube of 3  is :  27

//--    

//Convert Fahrenheit to Celsius  ,Formula: C = (F - 32) * 5/9


const fahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(fahrenheit, "Fahrenheit is equal to ", Number(celsius.toFixed(0)), "Celsius");
}

fahrenheitToCelsius(100);
//100 Fahrenheit is equal to  38 Celsius

//--

//Check Positive or Negative
const checkPositiveNegative = function (num) {
    if (num > 0) {
        console.log(num, "is a Positive Number");
    } else if (num < 0) {
        console.log(num, "is a Negative Number");
    } else {
        console.log(num, "is neither positive nor negative");
    }
}

checkPositiveNegative(-2)
//-2 is a Negative Number

//--    

//Sum of First N Even Numbers
const sumOfFirstNEvenNumbers = function (n) {
    console.log(n * (n + 1));
}

sumOfFirstNEvenNumbers(4);
//20

//--

//Print Numbers from 5 to 15  //Use a loop.

//note: process.stdout.write(i + " "); is used to print in same line          

for(let i=5; i<=15; i++){
    console.log(i);
}


//--

//Print Multiplication Table of 5, No input needed, table of 5 only.

const multiplicationTableOf5 = function () {
    for (let i = 1; i <= 10; i++) {
        console.log(`5 x ${i} = ${5 * i}`);
    }   
}

multiplicationTableOf5();

//--

//Print All Even Numbers from 1 to 20 Use loop and if condition.
 

for(let i=1; i<=20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

//--

//Find the Largest of Three Numbers Use if-else to compare three inputs.

const largestOfThreeNumbers = function (a, b, c) {
    if (a >= b && a >= c) {
        console.log(a, "is the largest number");
    } else if (b >= a && b >= c) {
        console.log(b, "is the largest number");
    } else {
        console.log(c, "is the largest number");
    }
}

largestOfThreeNumbers(10, 5, 6); //20 is the largest number