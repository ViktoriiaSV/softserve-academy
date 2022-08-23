//1
let cat = {
  name: "Maggie",
  age: 2,
  town: "Lviv",
};
function propsCount(currentObject) {
  let val = Object.keys(currentObject).length;
  console.log(val);
}
propsCount(cat);

//2

let ocean = {
  name: "Indian Ocean",
  color: "blue",
  north: "Asia",
  west: "Africa",
  east: "Australia",
};

function showProps(obj) {
  console.log(Object.values(obj));
  console.log(Object.keys(obj));
}
console.log(showProps(ocean));

//3

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return this.name + " " + this.surname;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(midleName) {
    return super.showFullName() + " " + midleName;
  }

  showCourse() {
    let date = new Date();
    let currentYear = date.getFullYear();
    return currentYear - this.year;
  }
}
let studentJoey = new Student("Joseph", "Tribbiani", 2019);
console.log(studentJoey.showFullName("Francis"));
console.log("Current course: " + studentJoey.showCourse());

//4

let workerList = [];

class Worker {
  #experience = 1.2;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    workerList.push(this);
  }

  showSalary() {
    console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
  }
  showSalaryWithExperience() {
    console.log(
      `${this.fullName} salary: ${
        this.dayRate * this.workingDays * this.#experience
      }`
    );
  }

  showSalaryWorker() {
    return `${this.dayRate * this.workingDays * this.#experience}`;
  }

  get showExperience() {
    return this.#experience;
  }

  set setExperience(experience) {
    this.#experience = experience;
  }

  sortSalaries(workersArray) {
    let sortedSalary = workersArray.sort(function (a, b) {
      return a.showSalaryWorker() - b.showSalaryWorker();
    });
    // console.log(sortedSalary);

    for (let i = 0; i < sortedSalary.length; i++) {
      console.log(
        sortedSalary[i].fullName + ":" + sortedSalary[i].showSalaryWorker()
      );
    }
  }
}

let worker1 = new Worker("Rachel Green", 200, 30);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience : " + worker1.showExperience);
worker1.showSalaryWithExperience();
worker1.setExperience = 1.5;
console.log("New experience : " + worker1.showExperience);
worker1.showSalaryWithExperience();
console.log("----------------");

let worker2 = new Worker("Monica Geller-Bing", 300, 30);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience : " + worker2.showExperience);
worker2.showSalaryWithExperience();
worker2.setExperience = 1.5;
console.log("New experience : " + worker2.showExperience);
worker2.showSalaryWithExperience();
console.log("----------------");

let worker3 = new Worker("Phoebe Buffay-Hannigan", 100, 30);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience : " + worker3.showExperience);
worker3.showSalaryWithExperience();
worker3.setExperience = 1.5;
console.log("New experience : " + worker3.showExperience);
worker3.showSalaryWithExperience();
console.log("----------------");

let worker4 = new Worker("Chandler Bing", 500, 30);

// let workersArray=[worker1, worker2, worker3, worker4];

worker3.sortSalaries(workerList);

//5

class GeometricFigure {
  getArea() {
    return 0;
  }

  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(b, h) {
    super();
    this.base = b;
    this.height = h;
  }

  getArea() {
    return (this.base * this.height) / 2;
  }
}

class Square extends GeometricFigure {
  constructor(a) {
    super();
    this.side = a;
  }
  getArea() {
    return this.side ** 2;
  }
}

class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.radius = r;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

function handleFigures(figures) {
  return figures.reduce(function (sum, figure) {
    if (figure instanceof GeometricFigure) {
      console.log(
        `Geometric figure : ${figure.toString()} - area: ${figure.getArea()}`
      );
      return sum + figure.getArea();
    }
    throw Error("Bad arguments figure");
  }, 0);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
