//1

let arr = [2, 3, 4, 5];

let result = 1;
for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}
console.log(result);

let resultNew = 1;
i = 0;
while (i < arr.length) {
  resultNew *= arr[i];
  i++;
}
console.log(resultNew);

//2

for (i = 0; i <= 15; i++) {
  if (i === 0) {
    console.log(i + " is even");
  } else if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

//3

k = [];
function randArray() {
  for (i = 1; i <= 5; i++) {
    k.push(Math.round(Math.random() * 500));
  }
  console.log(k);
}
randArray(k);

//4

let numberOne = parseInt(prompt("Enter first number"));
let numberTwo = parseInt(prompt("Enter second number"));
let resultRaiseToDegree;
function raiseToDegree(a, b) {
  resultRaiseToDegree = a ** b;
  alert(numberOne + " in degree " + numberTwo + " is " + resultRaiseToDegree);
}
raiseToDegree(numberOne, numberTwo);

//5

function findMin() {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result = Math.min(arguments[i]);
  }
  console.log(result);
}
findMin(5, 7, 10, 90, 35, 77, 105);

//6

function findUnique(arr) {
  let uniqueNumbers = [...new Set(arr)];
  console.log(uniqueNumbers);
  if (uniqueNumbers.length === arr.length) {
    console.log("true");
  } else {
    console.log("false");
  }
}
findUnique([1, 2, 3, 7, 7]);

//7

function lastElem(arr, x) {
  return arr.slice(-x);
}
console.log(lastElem([3, 4, 10, -5], 2));

//8

function letterToUppercase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
  //first letter to uppercase + all string from 1 letter included
}
console.log(letterToUppercase("i love java script"));
