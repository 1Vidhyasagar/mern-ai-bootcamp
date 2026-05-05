// let numbers = [1, 2, 3, 4, 5];

// // forEach → loop through items
// numbers.forEach((num) => console.log(num));

// // map → transform items
// let doubled = numbers.map((num) => num * 2);
// console.log(doubled); // [2,4,6,8,10]

// // filter → select items
// let evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens); // [2,4]

// // reduce → combine items
// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 15

let tasks = [];

// Add task
function addTask(tasknew) {
  tasks.push(tasknew);
  console.log("Task added:" + tasknew);
}
addTask("Learn JavaScript arrays");
addTask("Learn swimming");
addTask("Routine workout");



// List tasks
function listTasks(){
console.log("Your tasks:");
tasks.forEach((task, index) => {
  console.log(index + 1 + "." + task);
});
}
listTasks();

// Remove task
function removeTask(indx){
tasks.splice(indx-1, 1);
console.log("Task removed at position : ", indx )
}
removeTask(3);
listTasks();
