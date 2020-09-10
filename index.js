//select elements and assign them to let

let newTask = document.getElementById('new-task')
let addTaskBtn = document.getElementById('addTask');

let toDoUl = document.querySelector(".todo-list ul");
let completeUl = document.querySelector(".complete-list ul");


//create functions

let createNewtask = function(task){
    console.log("Creating task...");

    //set up the new list item
    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");
    let label = document.createElement("label");

    //pull the inputed text into label
    label.innerText = task;
}