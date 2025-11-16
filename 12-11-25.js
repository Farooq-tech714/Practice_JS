let arr = [3, 6, 9, 12];
console.log(arr[2] - arr[0]);
//6

//--

let nums = [2, 4, 6];
nums.push(8);
nums.shift();
console.log(nums);
//[ 4, 6, 8 ]

//--

let a = [1, 2, 3];
let b = a;
a[0] = 99;
console.log(a, b);
//[ 99, 2, 3 ] [ 99, 2, 3 ]

//--

let x = [10, 20, 30, 40];
let y = x.slice(1, 3);
console.log(y);
//[20,30]

//--

let arr1 = [5, 10, 15];
for (let i = 0; i < arr1.length; i++) {
  arr1[i] = arr1[i] + i;
}
console.log(arr1);
//[ 5, 11, 17 ]


//--

let arr2 = [2, 4, 6, 8];
let result = 1;
for (let i = 0; i < arr2.length; i++) {
  result *= arr2[i];
}
console.log("result", result);
//384
//--

let list = [1, 2, 3, 4];
list.pop();
list.unshift(0);
console.log(list);
//[ 0, 1, 2, 3 ]

//--

let arr3 = [3, 6, 9, 12];
console.log(arr3.indexOf(9) + arr3.indexOf(12));
//5

//--

let arr4 = [2, 4, 6, 8];
console.log(arr4[arr4.length - 1] / arr4[1]);
//2

//--

let arr5 = [1, 3, 5, 7];
for (let i = 3; i >= 0; i--) {
  console.log(arr5[i] * 2);
}
//14
//10
//6
//2

//Part B

//Print Product of All Elements in an Array. Multiply all values, print final result.

let arr7 = [1, 2, 3, 4, 5]
let procuctOfAllElement = 1;

for (i = 0; i < arr7.length; i++) {
  procuctOfAllElement = procuctOfAllElement * arr7[i]
}
console.log("procuctOfAllElement : ", procuctOfAllElement);

//--

//Find the Index of the Largest Number in Array. If largest = 20 and it’s at index 3 → print 3.

let arr55 = [5, 12, 7, 20, 3]; // remains to understand

let max = -Infinity;
let maxIndex = -1;

for (let i = 0; i < arr55.length; i++) {
  if (arr55[i] > max) {
    max = arr55[i];
    maxIndex = i;
  }
}

console.log("Largest Index :", maxIndex);


//--

//Create a New Array of Only Positive Numbers Skip negatives if present.

let arr44 = [1, 2, 3, 4, 5, -6, 7, 8]

let possitiveArr4 = [];

for (i = 0; i < arr44.length; i++) {
  if (arr44[i] > 0) {
    possitiveArr4.push(arr44[i])
  }
}
console.log("possitiveArr4 : ", possitiveArr4);
//possitiveArr4 :  [
//  1, 2, 3, 4,
//  5, 7, 8
//]

//--

//Print Every Second (Alternate) Element. Example: [5,10,15,20] → print: 5, 15

let arr77 = [5, 10, 15, 20]

for (i = 0; i < arr77.length; i = i + 2) {

  console.log(arr77[i]);

}
//5
//15

//--

//Print Elements Until a Negative Number Appears Stop loop when negative found.

let arr12 = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10]

for (i = 0; i < arr12.length - 6; i++) {
  console.log(arr12[i]);
}
//1
//2
//3
//4

//--

//Count How Many Elements Are Divisible by 3

let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]

let Count = 0

for (i = 0; i < arr8.length; i++) {
  if (arr8[i] % 3 === 0) {
    Count++
  }
}
console.log("Count : ", Count);
//Count :  4

//--

//Copy Array but Exclude the First and Last Elements. Example: [1,2,3,4,5] → [2,3,4]

let arr33 = [1, 2, 3, 4, 5]

copyArr = [];

for (i = 1; i < arr33.length - 1; i++) {
  copyArr.push(arr33[i])
}
console.log("copyArr : ", copyArr);
//copyArr :  [ 2, 3, 4 ]

//--

//Join Two Arrays Into One Without Using .concat() Use loop to push elements.

let arr11 = [3, 4, 5, 6]

let arr22 = [7, 8, 9, 10]

let joinTwoArr = [];

for (i = 0; i < arr11.length; i++) {
  joinTwoArr.push(arr11[i])
}
for (i = 0; i < arr22.length; i++) {
  joinTwoArr.push(arr22[i])
}

console.log("joinTwoArr : ", joinTwoArr);
//joinTwoArr :  [
//  3, 4, 5,  6,
//  7, 8, 9, 10
//]

//--

//Form a New Array Containing Squares of All Elements

let arr9 = [1, 2, 3, 4, 5]

let newArr = [];

for (i = 0; i < arr9.length; i++) {
  newArr.push(arr9[i] * arr9[i])
}
console.log("newArr : ", newArr);

//--

//Remove an Element at a Given Index Shift elements left manually.

let arr88 = [10, 20, 30, 40, 50]; //remains to understand
let removeIndex = 2;

for (let i = removeIndex; i < arr88.length - 1; i++) {
  arr88[i] = arr88[i + 1];     // shift every element to the left
}

//reduce array size (remove extra last element)
arr88.length = arr88.length - 1;

console.log("hhhhhhhhhhhhhhhh", arr88);

//Part C

//Find Missing Number in a Sequence (Assume 1 to N)
//Example: [1,2,4,5] → Missing = 3
//Use sum formula, no sorting.

// sum of first N natural number = n*(n+1)/2 

let arr66 = [1, 2, 4, 5]

let N = arr66.length + 1;

sum = N * (N + 1) / 2

mainSum = 0;

let missingElement = 0

for (i = 0; i < arr66.length; i++) {
  mainSum += arr66[i]
}

missingElement = sum - mainSum
console.log("missingElement : ", missingElement);
//missingElement :  3

//--

//Find Element With Minimum Frequency Opposite of max frequency.

//--

//Check If Array Is a Palindrome. Example: [1,2,3,2,1] → true

let arr6 = [1, 2, 3, 2, 1];

let palindrome = false;

for (let i = 0; i < arr6.length / 2; i++) {
  if (arr6[i] == arr6[arr6.length - 1 - i]) {

    palindrome = true;

    break;

  }
}

console.log("palindrome", palindrome);

//--

//Rearrange Array So That All Even Numbers Come First, Then Odd Numbers
//Maintain order inside each group.

let arr99 = [1, 4, 7, 3, 5, 2, 6, 8, 10, 9]

let rearrangeArr99 = [];

for (i = 0; i < arr99.length; i++) {
  if (arr99[i] % 2 == 0) {
    rearrangeArr99.push(arr99[i])
  }
}
for (i = 0; i < arr99.length; i++) {
  if (arr99[i] % 2 !== 0) {
    rearrangeArr99.push(arr99[i])
  }
}

console.log("rearrangeArr99 : ", rearrangeArr99);
//rearrangeArr99 :  [
//  4, 2, 6, 8, 10,
//  1, 7, 3, 5,  9
//]

//--

//Find All Triplets That Sum to a Given Target
//Example: [1,2,3,4,5], target = 9 → Triplets could be (1,3,5), (2,3,4)
//(No sorting required, use triple loop carefully.)

let arr10 = [1, 2, 3, 4, 5];  // remains to understand
let target = 9;

for (let i = 0; i < arr10.length; i++) {
  for (let j = i + 1; j < arr10.length; j++) {
    for (let k = j + 1; k < arr10.length; k++) {
      if (arr10[i] + arr10[j] + arr10[k] === target) {
        console.log("(" + arr10[i] + ", " + arr10[j] + ", " + arr10[k] + ")");
      }
    }
  }
}
//(1, 3, 5)
//(2, 3, 4)













