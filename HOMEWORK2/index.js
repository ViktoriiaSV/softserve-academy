//1

let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = (x !== y) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = y > x;
console.log(res3);
console.log(typeof res3);

let res4 = (x - x) / (y - y) ;
console.log(res4);
console.log(typeof res4);

//2

let writeNumber = prompt("Please, write a number");
let checkNumber = (writeNumber > 0) && (writeNumber % 2 == 0)|| (writeNumber % 7 == 0);
console.log(checkNumber);

//3

let arr = new Array();
arr[0] = 5;
arr[1] = "fruits";
arr[2] = true;
arr[3] = null;
console.log(arr.length);
console.log(arr);
let fiveElement = prompt("Please, write a number");
arr[4] = Number(fiveElement);
console.log(arr[4]);
arr.shift(0);
console.log(arr);

//4

let cities = ["Rome", "Lviv", "Warsaw"];
let citiesNew = cities.join('*');
console.log(citiesNew);

//5

let isAdult =  prompt("Please tell, if you are 18 years old?");
if (isAdult == "yes") {
    alert("You have reached the age of majority!")
} else {
    alert("You are still too young!")
};

//6

let firstSide = parseFloat(prompt("Please write length of the side of the triangle"));
let secondSide = parseFloat(prompt("Please write length of the side of the triangle"));
let thirdSide = parseFloat(prompt("Please write length of the side of the triangle"));

if (firstSide < 0 || secondSide < 0 || thirdSide < 0) {
    alert("Incorrect data")
}; 

let semiPerimeter = (firstSide + secondSide + thirdSide) / 2;
let areaTriangle = Math.sqrt(
  semiPerimeter *
    (semiPerimeter - firstSide) *
    (semiPerimeter - secondSide) *
    (semiPerimeter - thirdSide)
);
console.log("Area of triangle: " + (Math.round( areaTriangle * 1000 ) / 1000));

 if ((firstSide*firstSide) === (secondSide*secondSide) + (thirdSide*thirdSide)) {
    console.log("Triangle is right angle")
 } else if ((secondSide*secondSide) === (firstSide*firstSide) + (thirdSide*thirdSide)) {
    console.log("Triangle is right angle")
 } else if ((thirdSide*thirdSide) === (secondSide*secondSide) + (firstSide*firstSide)) {
    console.log("Triangle is right angle")
 } else {
    console.log("Triangle is NOT right angle")
 };

 //7


