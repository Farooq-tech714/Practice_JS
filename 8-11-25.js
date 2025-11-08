let a = 2;
let b = 3;
let c = a + b * 2;
console.log(c);
//8

//--

let x = 10;
x += 5;
x -= 3;
console.log(x);
//12

//--    


let num = 5;
num = num * num - num;
console.log(num);
//20

//--

let p = 12;
let q = 5;
console.log(p % q);
//2

//--

let count = 4;
count++;
count = count * 2;
console.log(count);
//10

//--

let m = 10;
let n = m++ + ++m;
console.log(m, n);  // remain to understand


//--    

let xv1 = 6;
let y = xv1-- - --xv1;
console.log(xv1, y);  // remain to understand


//--

console.log("8" + 2); //82   
console.log("8" - 2); //6

//--

console.log(7 <= 7); //true
console.log(7 < 7);  //false

//--

let av1 = 3;
av1 *= 4;
av1 /= 2;
av1 += 5;
console.log(av1);
//11

//--


//Part B

//Sum of Digits of a Number   Example: 123 → output = 1+2+3 = 6 (use loop or math)

let sum = 0;

for (let num = 1234; num > 0; num = Math.floor(num / 10)) {
    let digit = num % 10;
    sum = sum + digit;
    
}

console.log("Sum of digits:", sum);

//--

//Check if a Number is a Multiple of 3 and 5 If yes print "YES", else "NO"

let checkMultipleOf3And5 = function (n) {
    if (n % 5 === 0 && n % 3 === 0) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

checkMultipleOf3And5(17); //NO


//--

//Print All Numbers from 1 to N That Are Even , Use loop + condition

let N = 45;
for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//--

//Print Squares of Numbers from 1 to N Example: 1→1, 2→4, 3→9, …

let nv1 = 10;
for (let i = 1; i <= nv1; i++) {
    // console.log(i * i);
    process.stdout.write(i + "→" + (i * i) + " ");    //process.stdout.write(); print horizontally
}

//--

//Count How Many Numbers Between 1 and 50 Are Divisible by 7;
let countv1 = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
        countv1++;
    }
}

console.log("Count:", countv1);
//Count: 7


//--

//Find the Largest Among Three Numbers ,  Use nested if.
let av2 = 12;
let bv1 = 25;
let cv1 = 90;

if (av2 > bv1) {
    if (av2 > cv1) {
        console.log(av2, "is largest");
    } else {
        console.log(cv1, "is largest");
    }
} else {
    if (bv1 > cv1) {
        console.log(bv1, "is largest");
    } else {
        console.log(cv1, "is largest");
    }
}
//90 is largest

//--

//Print the Sum of Even Numbers from 1 to N

let sumOfEvenNumbers = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
        }
    }
    console.log(sum);

}

sumOfEvenNumbers(10); //30

//--

//Print Numbers from N Down to 1 ,  Reverse counting loop.

function reverseNumber() {
    let n = 15
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}

reverseNumber()

//--

//Print Multiplication Table of Any Number but Only Up to 5

function multiplicationTable(N) {
    for (let i = 1; i <= N; i++) {
        console.log(`${N} x ${i} = ${N * i}`);
    }
}
multiplicationTable(5)

//--

let numv1 = 11;
let isPrime = true;

if (numv1 <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < numv1; i++) {
        if (numv1 % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(numv1 + " is a Prime Number");
} else {
    console.log(numv1 + " is NOT a Prime Number");
}


