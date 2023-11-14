
// Define an array to hold our todo items
/*const todoList = [
    'Buy Shopping',
    'Wash Clothes',
    'Pay bills',
    'Walk the dog',
    'Wash the car',
    'Clean the house',
    'Do homework',
    'Get Fuel',
    'Wash the dishes',
    'Cut the Grass',
    'Pick up the kids',
    'Make dinner',
    'Sing Karaoke'
];*/

const todoList = [];

// Function to add a new item to the todo list
function addItem(item) {
  todoList.push(item);
}

// Function to remove an item from the todo list
function removeItem(index) {
  const index = todoList.indexOf(item);
  if (index !== -1) {
    todoList.splice(index, 1);
  }
}

function completeItem(index) {
  const index = todoList.indexOf(item);
  if (index !== -1) {
    todoList.splice(index, 1);
  }
}

// Function to get the current list of todo items
function getList() {
  return todoList;
}

// export the functions to share
module.exports = {
  addItem,
  removeItem,
  completeItem,
  getList,
};