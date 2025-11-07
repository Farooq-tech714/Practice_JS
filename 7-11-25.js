// Part A

let a = 3;
let b = 7;
console.log(a - b);
//-4

//--

let x = 15;
x = x / 3;
console.log(x);
//5

//--

let num = 4;
console.log(num + num * 2);
//12

//--    

let p = 9;
let q = 2;
let r = p % q;
console.log(r);
//1

let count = 10;
count--;
count--;
console.log(count);
//8

//--

let m = 5;
let n = ++m;
console.log(m, n);
//m=6, n=6

//--

let xv1 = 8;
let y = xv1--;
console.log(xv1, y);


//xv1=7, y=8

console.log("4" * 2);
//8

//--

console.log(10 < 5); //false
console.log(10 >= 10); //true

//--

let av1 = 6;
av1 -= 2;
av1 *= 3;
console.log(av1);
//12         

//Part B

// Multiply Two Numbers Take two numbers and print their product.

function multiplyTwoNumbers(num1, num2) {
    //  product = num1 * num2;
    //  return product;


    //return num1 * num2;

    console.log('product of 4 and 5 :', num1 * num2);

}
multiplyTwoNumbers(4, 5); //product of 4 and 5 : 20
//console.log(multiplyTwoNumbers(4, 5)); //20

//--

//Calculate Remainder Take two numbers and print the remainder (use %).

let remainder = function (a, b) {
    console.log('Remainder of 29 and 5 :', a % b);
}

remainder(29, 5);
//Remainder of 29 and 5 : 4

//--

//Convert Days to Weeks Consider 1 week = 7 days.

//--

//Check Divisible by 5 Take a number and print "Yes" if divisible by 5, otherwise "No".

function checkDivisibleBy5() {

    let av2 = 20;

    if (av2 % 5 == 0) {
        console.log("Yes");

    } else {
        console.log("No");
    }

}

checkDivisibleBy5(); //Yes

//using Ternary Operator

let av2 = 23;
av2 % 5 == 0 ? console.log("Yes") : console.log("No"); 
//No

//--

//Sum of First N Odd Numbers ,Example: N = 3 → Output: 1 + 3 + 5 = 9.

//--


//Print Numbers from 1 to N Use loop. (Let N be any number.)


let N = 27;
for (let i = 1; i <= N; i++) {
    console.log(i);
}       

//--

//Print Multiplication Table of Any Number  Use loop. (Let N be any number.)

let multiplicationTable = function () {

    let num = 8;

    for (let i = 1; i <= 10; i++) {

        console.log(`${num} x ${i} = ${num * i}`);
    }   
}
multiplicationTable();

//--

//Print All Numbers Between 20 and 30 Use loop.

for(let i=20; i<=30; i++){
    console.log(i);
}

//--

//Check Which Number is Smaller Take two numbers and print which is smaller.

let checkSmallerNumber = function (a, b) {
    if(a<b){
        console.log(a, "is smaller");
    } else{
        console.log(b, "is smaller");
    } 
}

checkSmallerNumber(200,50);
//50 is smaller

//--

//Calculate Perimeter of a Square     Formula: Perimeter = 4 * side

function perimeterOfSquare(side) 
{
    let perimeter = 4 * side;
    console.log("Perimeter of Square is :", perimeter);
}

perimeterOfSquare(5); 
//Perimeter of Square is : 20


