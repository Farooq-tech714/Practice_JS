let arr = [2, 5, 8, 11];
console.log(arr[1] + arr[3]);
//16

//--

let nums = [3, 6, 9, 12];
nums.push(15);
nums.pop();
console.log(nums.length);
//4

//--

let a = [10, 20, 30];
let b = a;
b[1] = 99;
console.log(a, b);
//[ 10, 99, 30 ] [ 10, 99, 30 ]

//--

let x = [4, 8, 12];
let y = x.slice();
y[2] = 100;
console.log(x, y);
//[ 4, 8, 12 ] [ 4, 8, 100 ]

//--

let arrv1 = [1, 2, 3, 4];
for (let i = 1; i < arrv1.length; i++) {
    console.log(arrv1[i] * arrv1[i - 1]);
}
// 2
// 6
// 12

//--

let list = [5, 10, 15, 20];
let sum = 0;
for (let i = 0; i < list.length; i += 2) {
    sum += list[i];
}
console.log(sum);
//20

//--

let arrv2 = [1, 2, 3];
arrv2.unshift(arrv2.pop());
console.log(arrv2);
//[ 3, 1, 2 ]

//--

let av1 = [7, 14, 21];
console.log(av1.indexOf(14) !== -1);
//true

//--

let arrv3 = [1, 2, 3, 4, 5];
console.log(arrv3[arrv3.length - arrv3[0]]);
//5

//--

let data = [2, 4, 6, 8];
for (let i = 0; i < data.length; i++) {
    data[i] = data[i] / 2;
}
console.log(data);
//[ 1, 2, 3, 4 ] 

//Part B

//Find the Second Smallest Number in an Array (Do not sort; solve logically.)

let arr6 = [5, 2, 8, 1, 3, 4];  // remais logic to understand

let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < arr6.length; i++) {
    let num = arr6[i];

    if (num < smallest) {
        // Update secondSmallest first
        secondSmallest = smallest;
        smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
    }
}

console.log("Second Smallest:", secondSmallest);


//--

//Count How Many Odd Numbers Are in an Array

let arrv4 = [1, 2, 3, 4, 5, 7]

let Count = 0;

for (i = 0; i < arrv4.length; i++) {
    if (arr[i] % 2 !== 0) {
        Count++
    }
}
console.log("Count : ", Count);
//4

//--

//Form a New Array Containing Only Numbers Greater Than N. Example: array = [5,12,7,20], N = 10 → [12,20]

let arrayv2 = [5, 12, 7, 20]

let newArray2 = [];

for (let i = 0; i < arrayv2.length; i++) {
    if (arrayv2[i] > 10) {
        newArray2.push(arrayv2[i])
    }
}

console.log(newArray2);
//[ 12, 20 ]

//--

//Rotate Array One Step to the Right. Example: [1,2,3,4] → [4,1,2,3]

let array = [1, 2, 3, 4]

array.unshift(array.pop())

console.log(array);
//[ 4, 1, 2, 3 ]

//--

//Reverse Array In-Place (No new array) Swap elements manually.

let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // remains to unserstand

for (let i = 0; i < arr8.length / 2; i++) {
    let temp = arr8[i];
    arr8[i] = arr8[arr8.length - 1 - i];
    arr8[arr8.length - 1 - i] = temp;
}

console.log(arr8);
//[
//  10, 9, 8, 7, 6,
//   5, 4, 3, 2, 1
//]

//--

//Check If an Array Is Sorted in Ascending Order
let arrv6 = [2, 1]
let val = false;
for (let i = 0; i < arrv6.length; i++) {
    if (arrv6[i] < arrv6[i + 1]) {

        val = true
        // console.log(val);
        break;
    }

}

console.log("mmmmmmmmmmmmmmmmmmmmmm",val);
//false

//--

//Calculate the Difference Between Max and Min in an Array

let arr7 = [5, 6, 8, 3, 4, 9]

let mx = arr7[0];
let mn = arr7[0];



for (i = 0; i < arr7.length; i++) {
    if (arr7[i] > mx) {
        mx = arr7[i]
    }
    if (arr7[i] < mn) {
        mn = arr7[i]
    }
}

let diff = mx - mn
console.log("...........", diff);


//--

//Create an Array That Contains Only Even Indexed Elements. Example: [5,10,15,20,25] → [5,15,25]

let arr1 = [5, 10, 15, 20, 25]

let onlyEvenIndexedElements = [];

for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
        onlyEvenIndexedElements.push(arr1[i])

    }
}
console.log(onlyEvenIndexedElements);
//[ 5, 15, 25 ]

//--

//Merge Two Arrays into One (Using Loop Only). No .concat() allowed.

let arrOne = [1, 2, 3]
let arrTwo = [8, 9, 10]
let mergeArr = [];

for (i = 0; i < arrOne.length; i++) {
    mergeArr.push(arrOne[i])
}
for (j = 0; j < arrOne.length; j++) {
    mergeArr.push(arrTwo[j]);
}

console.log("Merge Array : ", mergeArr);
//Merge Array :  [ 1, 2, 3, 8, 9, 10 ]

//--

//Remove All Occurrences of a Given Element from Array. Example: array = [2,3,2,4,2], value = 2 → [3,4]

let arrayv1 = [2, 3, 2, 4, 2]

let uniqueArray1 = [];


for (i = 0; i < arrayv1.length; i++) {
    if (arrayv1[i] !== 2)
        if (!uniqueArray1.includes(arrayv1[i])) {
            uniqueArray1.push(arrayv1[i]);
        }
}

console.log("uniqueArray1",uniqueArray1);

//Part C

//Find the Frequency of Each Element in an Array
//Output example:
//[2,3,2,4,3] → {2:2, 3:2, 4:1}
//(No Maps yet — use nested loops.)

let arr2 = [2, 3, 2, 4, 3];
let frequency = {};

for (let i = 0; i < arr2.length; i++) {
    let element = arr2[i];

    if (frequency[element]) {
        frequency[element]++;
    } else {
        frequency[element] = 1;
    }
}

console.log(frequency);
//{ '2': 2, '3': 2, '4': 1 }

//--

//Find the Element That Appears Maximum Number of Times. Example: [1,2,2,3,3,3] → output = 3

let arr3 = [1, 2, 2, 3, 3, 3];

let frequency1 = {};
let maxElementCount = 0;
let maxElement = 0;

for (let i = 0; i < arr3.length; i++) {
    let element = arr3[i];

    if (frequency1[element]) {
        frequency1[element]++;
    } else {
        frequency1[element] = 1;
    }

    if (frequency1[element] > maxElementCount) {
        maxElementCount = frequency1[element];
        maxElement = element;
    }
}

console.log(maxElement);
// Output: 3

//--

//Check If Two Arrays Are Equal (Same Values & Same Order)

let arrX = [1, 2, 3, 5];

let arrY = [1, 2, 3];

let Check = true;

if (arrX.length !== arrY.length) {

    Check = false;

} else {

    for (let i = 0; i < arrX.length; i++) {

        if (arrX[i] !== arrY[i]) {

            Check = false;

            break;
        }
    }
}

console.log("Check : " ,Check);
//Check :  false

//--

//Find All Pairs That Sum to a Given Number
//Example: array = [1,4,2,3,5], sum = 6
//Output pairs: (1,5), (4,2)

let arr4 = [1, 4, 2, 3, 5];  //remains to understand 
let sum1 = 6;

for (let i = 0; i < arr4.length; i++) {
    for (let j = i + 1; j < arr4.length; j++) {
        if (arr4[i] + arr4[j] === sum1) {
            console.log("(" + arr4[i] + "," + arr4[j] + ")");
        }
    }
}
//(1,5)
//(4,2)
//--

//Remove Duplicates In-Place (No extra array). Concept: shifting and reducing length.

let arr5 = [1, 2, 2, 3, 4, 3, 5]; //remains to undrstand

for (let i = 0; i < arr5.length; i++) {
    for (let j = i + 1; j < arr5.length; j++) {
        if (arr5[i] === arr5[j]) {
            // Shift elements left
            for (let k = j; k < arr5.length - 1; k++) {
                arr5[k] = arr5[k + 1];
            }
            arr5.length--; // Reduce length
            j--;          // Recheck the same position
        }
    }
}

console.log(arr5); // Output: [1, 2, 3, 4, 5]





