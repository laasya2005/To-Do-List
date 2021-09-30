var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul= document.querySelector("ul");


var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}


//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

//click on a list item and it strikethroughs the text
function lineThrough(event){
	var a=event.target;
	
	if(count==0)
	{
		
	    a.classList.add("done");
	}
	else
	{
		a.classList.toggle("done");
	}
	count++;


}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var linebreak= document.createElement("br");


function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	var linebreak= document.createElement("br");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delButton);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.classList.add("delClass");
	delButton.innerHTML='Done';
	ul.appendChild(linebreak);
}

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(task) {
	if (task.target.tagName === "li"){
		task.target.classList.toggle("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
}

ul.addEventListener("click", handleUlClick)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);