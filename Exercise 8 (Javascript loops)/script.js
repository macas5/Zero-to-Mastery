var todos = [
    "clean room", 
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosLength = todos.length;
for (var i = 0; i < todosLength; i++){
    console.log(todos[i]);
}

todos.forEach(function(todo, i){
    console.log(todo, i);
})

// var counterOne = 10;
// while (counterOne > 0){
//     console.log(counterOne);
//     counterOne--;
// }
// var counterTwo = 10;
// do {
//     counterTwo--;
//     console.log(counterTwo);
// } while (counterTwo > 0);