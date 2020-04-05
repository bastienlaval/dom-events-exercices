var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = ul.getElementsByTagName("li");
var listButtons = ul.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function addTheMissingButtons(i) {
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("x"));
	btn.classList.add("delete");
	listItems[i].appendChild(btn);
	btn.addEventListener("click", removeParent);
}

function addButton(li) {
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("x"));
	btn.classList.add("delete");
	li.appendChild(btn);
	btn.addEventListener("click", removeParent);
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	addButton(li);
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

function tickTheItem(event) {
	var targetedItem = event.target;
	targetedItem.classList.toggle("done"); 
}

function removeParent(evt){
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

function listLength(){
	return listItems.length;
}

for( i=0;i<listLength();i++){
	addTheMissingButtons(i);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", tickTheItem);

