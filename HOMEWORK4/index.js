// 1

let height = parseInt(prompt("Enter heighth of rectangle"));
let width = parseInt(prompt("Enter width of rectangle"));

function calcRectangleArea(height, width) {
  let rectangleArea = height * width;

  if (isNaN(height) || isNaN(width)) {
    throw new Error("Please, input only numbers");
  }
  return rectangleArea;
}

try {
  alert(calcRectangleArea(height, width));
} catch (exeption) {
  console.log(exeption);
}
calcRectangleArea(height, width);

// 2
let age = parseInt(prompt("Please, input your age"));

function checkAge() {
  try {
    if (age === "") {
      throw new Error("Please, input your age");
    } else if (isNaN(age)) {
      throw new Error("Please, input only numbers");
    } else if (age < 14) {
      throw new Error("You are too young");
      alert("You can watch the movie");
    }
  } catch (exeption) {
    alert(exeption.name + " " + exeption.message);
  }
}
checkAge();

// 3

class MonthException {
  constructor(message) {
    this.message = message;
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  month = month - 1;
  if (months[month] !== undefined) {
    return months[month];
  } else {
    throw new MonthException("Incorrect month number");
  }
}

try {
  let chooseMonth = parseInt(prompt("Enter month"));
  let monthName = showMonthName(chooseMonth);
  console.log(monthName);
} catch (exeption) {
  console.error(exeption.name + " " + exeption.message);
}

//4

function showUser(id) {
    if (id < 0) {
        throw new Error("ID can not be negative" + " " + id);
    }
    return {id};
}

function showUsers(ids) {
let arrClients = [];
ids.forEach(function(id){

    try {
let client = showUser(id);
arrClients.push(client);
    } catch (exeption){
console.log(exeption.message);
    }
});
return arrClients;
}
showUsers([5, 7, -8, 10]);
