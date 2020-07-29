var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var remove = document.getElementsByClassName("remove");

function inputLength() {
    return input.value.length;
}

//function to create a new list element
function createListElement() {
    var remove = document.createElement("button");
    remove.classList.add("remove");
    remove.appendChild(document.createTextNode("X"));

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(remove);

    addListActions(li, remove);
    
    ul.appendChild(li);
    input.value = "";
}

//creating list element by clicking on "Enter" button
function addListAfterClick() {
    if (inputLength() > 0){
        createListElement();
    }
}

//creating list element by using enter key
function addListAfterKeypress(event) {
    if ((inputLength() > 0) && (event.keyCode == 13)){
        createListElement();
    }
}


//toggles done css parameter 
function crossOut(li) {
    return function() {
        li.classList.toggle ("done");
    }
}

//delete parent list item
function deleteItem(remove){
    return function(){
        remove.parentElement.remove();
    }
    
}

//function to add actions to list items
function addListActions(li, remove){
    li.addEventListener("click", crossOut(li));
    remove.addEventListener("click", deleteItem(remove));
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//add actions for current list elements
for (var i = 0; i  < li.length; i++){
    addListActions(li[i], remove[i]);
}


