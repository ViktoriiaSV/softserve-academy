// 1

document.getElementById("test").innerHTML = "Last";
document.getElementsByTagName("div")[0].innerHTML = "Last";
document.querySelector("#test").innerHTML = "Last";

//2

let cat = document.getElementsByClassName("image")[0];
cat.src = "cat.jpg";
alert(cat.outerHTML);

//3
console.log(`Selector text 0: ${document.querySelectorAll("p")[0].innerHTML}`);
console.log(`Selector text 1: ${document.querySelectorAll("p")[1].innerHTML}`);
console.log(`Selector text 2: ${document.querySelectorAll("p")[2].innerHTML}`);

let elems = document.querySelectorAll("#text p");
for (let i = 0; i < elems.length; i++) {
  alert("Selector text " + i + ": " + elems[i].innerHTML);
}

// 4

// let parentEl = document.getElementById("list");
// let firstEl = parentEl.childNodes[0].innerHTML;
// let lastEl = parentEl.childNodes[4].innerHTML;
// let secondEl = parentEl.childNodes[1].innerHTML;
// let fourthEl = parentEl.childNodes[3].innerHTML;
// let thirdtEl = parentEl.childNodes[2].innerHTML;

let firstEl = document.getElementById("list").firstChild.innerHTML;
let lastEl = document.getElementById("list").lastChild.innerHTML;
let secondEl = document.getElementById("list").firstChild.nextSibling.innerHTML;
let fourthEl =
  document.getElementById("list").lastChild.previousSibling.innerHTML;
let thirdtEl =
  document.getElementById("list").firstChild.nextSibling.nextSibling.innerHTML;

console.log(firstEl);
console.log(lastEl);
console.log(secondEl);
console.log(fourthEl);
console.log(thirdtEl);

//5

document.body.children[0].style.backgroundColor = "lightgreen";
document.getElementById("myDiv").children[0].style.fontWeight = "700";
document.getElementById("myDiv").children[1].style.color = "red";
document.getElementById("myDiv").children[2].style.textDecoration = "underline";
document.getElementById("myDiv").children[3].style.fontStyle = "italic";
document.getElementById("myList").style.listStyle = "none";
document.getElementById("myList").style.display = "flex";
document.getElementsByTagName("span")[0].style.display = "none";

//6

let firstMessage = prompt("Please, write your First Name");
let secondMessage = prompt("Please, write your Last Name");

let firstInput = document.getElementById("input1");
let secondInput = document.getElementById("input2");

firstInput.value = firstMessage;
secondInput.value = secondMessage;

firstInput.value = secondMessage;
secondInput.value = firstMessage;

//7
let check = "check code";
document.body.innerHTML = `<main class="mainClass check item"> 	
<div id="myDiv">${check}
<p>First paragraph</p>           
</div>
</main>`;
