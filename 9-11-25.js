//Part A

let arr = [2, 4, 6];
console.log(arr[1]);
//4

//Acces array element using index , 4 at index 1

//--

let nums = [5, 10, 15, 20];
console.log(nums.length);
//4

//.length property returns the number of elements

//--

let a = [1, 2, 3];
a.push(4);
console.log(a);
//[ 1, 2, 3, 4 ]

//.push() method adds a new element to the end of the array.

//--

let av1 = [10, 20, 30];
av1.pop()
console.log(av1); //[ 10, 20 ]

//Removes the last element of the array and and returns the removed elements also

//--

let arrv1 = [4, 8, 12];
arrv1[1] = 20;
console.log(arrv1);
//[ 4, 20, 12 ]

//here 8 at idex 1 and 8 replace to 20 at index 1

//--

let arrv2 = [3, 6, 9];
let x = arrv2[0] + arrv2[2];
console.log(x);
//12

// here 3 at index 0 and 9 at index 2 so output is 12

//--

let arrv3 = [1, 2, 3, 4];
arrv3.shift();
console.log(arrv3); //[ 2, 3, 4 ]

//remove first element and returns removed element also

let items = [7, 14, 21];
items.unshift(0);
console.log(items); //[ 0, 7, 14, 21 ]

//unshift(0) dds element to the beginning of the array and return new lengthof the array

//--

let av2 = [2, 4, 6, 8];
console.log(av2[3]); //8 

console.log(av2[av2.length - 1]); //8,    its another way to find the last element of an array

//--

let av3 = [5, 10, 15];
for (let i = 0; i < av3.length; i++) {
    console.log(av3[i] * 2);
}
// 10
// 20
// 30

// runs for each element then it multiplies by 2 for each element 

// Part B

//These require writing loops and logic.
//Print Each Element of an Array
//Given [3, 6, 9, 12, 15], print each value.

const arr1 = [3, 6, 9, 12, 15]

for (i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);

}
//3
//6
//9
//12
//15 

//--

//Sum of Elements in an Array. Input array → output sum.

let arr2 = [1, 2, 3, 4, 5, 6]

let summ = 0

for (i = 0; i < arr2.length; i++) {
    summ = summ + arr2[i]

}
console.log(summ); //21

//--

//Find the Largest Number in an Array

const arr8 = [1, 2, 56, 3, 9, 5, 6, 7, 8, 4]

let largestNumber = arr8[0]

for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] > largestNumber) {
        largestNumber = arr8[i]
    }
}
console.log("larget number : ", largestNumber);


//--

//Count How Many Even Numbers in an Array

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let count = 0;

for (let i = 0; i < arr3.length; i++) {
    if (i % 2 === 0) {
        count = count + 1;
    }
}
console.log(count); //5

//--

//Print Array in Reverse Order (Do not use .reverse() yet)

let arr4 = [1, 2]

let reversedArr4 = arr4.map(function (_, index) {
    return arr4[arr4.length - 1 - index]
})

console.log("reversedArr4 : ", reversedArr4)
//reversedArr4 :  [ 2, 1 ]

//--

//Search for an Element in an Array. If found → print index, else print "Not Found".

let arr5 = [1, 2, 3]

let element = 9

let found = false;

for (i = 0; i < arr5.length; i++) {

    if (arr5[i] === element) {
        console.log(i);
        found = true;
        break;

    }

}

if (!found) {
    console.log("Not Fount"); // Not Fount

}


//--

//Copy One Array into Another Array. Make sure not to use reference. Use loop.

let numArr = [9, 8, 7]

let copyNumArr = [];

for (i = 0; i < numArr.length; i++) {
    copyNumArr[i] = numArr[i]
}

console.log("copyNumArr", copyNumArr)

//--

//Create a New Array with Each Element Doubled

let arr6 = [3, 4, 6, 7, 8, 9]

let doubleArr = [];

for (i = 0; i < arr6.length; i++) {

    // console.log(arr6[i]*2)
    doubleArr[i] = arr6[i] * 2

}

console.log("doubleArr", doubleArr);
//doubleArr [ 6, 8, 12, 14, 16, 18 ]


//--

//Find the Second Largest Number in an Array (Without sorting — use logic)

//--

//Remove Duplicates from an Array (Beginner Approach)   Hint: Create new array, insert only if not already present.

let arr7 = [1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 8, 9] // remains to understand logic

let newArr7 = [];

for (i = 0; i < arr7.length; i++) {
    let currArr = arr7[i];

    if (!newArr7.includes(currArr)) {
        newArr7.push(currArr)

    }


}

console.log(newArr7);

//[
//  1, 2, 3, 4, 5,
//  6, 7, 8, 9
//]










