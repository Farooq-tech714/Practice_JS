let arr = [10, 20, 30];
console.log(arr[0]);
//10

//--

let values = [5, 10, 15, 20];
console.log(values[values.length - 2]);
//15

//--

let a = [2, 4, 6];
a.push(8);
a.push(10);
console.log(a.length);
//5

//--

let av1 = [9, 8, 7];
av1.pop();
console.log(av1);
//[ 9, 8 ]


//--

let aV1 = [1, 3, 5, 7];
aV1[2] = 100;
console.log(aV1);
//[ 1, 3, 100, 7 ]

//--

let arrV1 = [4, 8, 12];
let sum = arrV1[1] + arrV1[2];
console.log(sum);
//20

//--

let list = [7, 14, 21, 28];
list.shift();
console.log(list);
//[ 14, 21, 28 ]

//--

let items = [3, 6, 9];
items.unshift(0);
items.unshift(-3);
console.log(items);
//[ -3, 0, 3, 6, 9 ]

//--

let x = [11, 22, 33, 44];
console.log(x.indexOf(33));
//2

//--

let arrV2 = [2, 4, 6];
for (let i = 0; i < arr.length; i++) {
    console.log(arrV2[i] + 1);
}
//3
//5
//7

//------------------------

//Part B

//Print Only the First N Elements of an Array. Example: If N = 3 and array = [5,10,15,20,25], output → 5,10,15

let array = [5, 10, 15, 20, 25]
let N = 3

for (i = 0; i < N; i++) {

    console.log(array[i]);
}
//5
//10
//15

//--

//Find the Smallest Number in an Array

let arrV3 = [3, 4, 1]

smallestNumber = arrV3[0];

for (let i = 1; i < arrV3.length; i++) {

    if (arrV3[i] < smallestNumber) {

        smallestNumber = arrV3[i];
    }

}

console.log("smallest number : ", smallestNumber);
//smallest number :  1

//--

//Count How Many Numbers Are Greater Than 50. Example: [10, 55, 60, 45] → Output: 2

let arr4 = [10, 55, 60, 45]

let Count = 0;

for (i = 0; i < arr4.length; i++) {
    if (50 < arr4[i]) {
        Count++
    }
}

console.log("Count : ", Count);
//Count :  2


//--

//Multiply Each Element in the Array by 3 and Store result in a new array.

let arr5 = [1, 2, 3, 4]

let NewArr5 = [];

NewArr5 = arr5.map(n => n * 3);

console.log(NewArr5);


//--

//Print Only Odd Numbers from an Array

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 45]

for (i = 0; i < arr6.length; i++) {
    if (arr6[i] % 2 !== 0) {
        console.log(arr6[i]);

    }
}

//--

//Find the Average of All Numbers in an Array

let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 45]

let sumV1 = 0;

for (i = 0; i < arr7.length; i++) {
    sumV1 = sumV1 + arr7[i];
}

let average = sumV1 / arr7.length

console.log("average is : ", average);
//average is :  9.76923076923077


//--

//Check Whether a Given Value Exists in an Array or Not. If yes → print "Found" else "Not Found".

let arrv6 = [13, 20, 50, 40];
let value = 1;
let found = false;  

for (let i = 0; i < arrv6.length; i++) {
  if (arrv6[i] === value) {
    found = true;   
    break;          
  }
}

if (found) {
  console.log("Found");
} else {
  console.log("Not Found");
}
//Not Found

//--

//Copy an Array in Reverse Order Example: Input: [1,2,3,4] → Output: [4,3,2,1] (Must use loop, no .reverse())

let arr1 = [1, 2, 3, 4];

let reverseArr1 = [];

for (let i = arr1.length - 1; i >= 0; i--) {

    reverseArr1.push(arr1[i]);

}

console.log(reverseArr1);
//[ 4, 3, 2, 1 ]

//--

//Create an Array Containing Only Unique Elements Build new array and avoid duplicates.

let arrv5 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]

let uniqueArr = [];

for (i = 0; i < arrv5.length; i++) {

    if (!uniqueArr.includes(arrv5[i])){
        uniqueArr.push(arrv5[i])

    }
}


console.log(uniqueArr);
//[ 1, 2, 3, 4, 5 ]

//--

//Count How Many Times a Number Appears in an Array. Example: array = [2,4,2,6,2] and number = 2 → Output: 3

let arrayV1 = [2, 4, 2, 6, 2];

let CountV1 = 0

for (let i = 0; i < arrayV1.length; i++) {
    
  if (arrayV1[i] === 2) { 

    CountV1++;      

  }
}

console.log("Count : ", CountV1);












