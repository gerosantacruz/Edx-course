var addbutton = document.getElementById("add");
var textinput = document.getElementById("task");
var list= document.getElementById("tasklist");
var clear = document.getElementById("clear");

addbutton.addEventListener("click",addtask);
clear.addEventListener("click",delall);


function addtask(){
    task=textinput.value;
    //dont allow a empty string
    if (task.trim()){
        //create a element in the list and a Done button
        var newItem = document.createElement("LI");
        var donebutton = document.createElement("BUTTON");
        var done = document.createTextNode("Done");
        donebutton.addEventListener("click",doneRemove)
        donebutton.appendChild(done);

        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        newItem.appendChild(donebutton);
        textinput.value="";
        list.appendChild(newItem);
    }
    else{
        alert("To Do can not be empty");
    }
    
}

//deleta all
function delall(){
    list.innerHTML = "";
}

//delete a specific task with done button
function doneRemove(e){
   var taskitem= e.target.parentElement;
   list.removeChild(taskitem);
}