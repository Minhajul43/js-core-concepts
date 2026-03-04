function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Minhaj", sayBye);

// write description about callback! a callback is a function that is passed as an argument to another function and is executed after some operation has been completed! in the above example greet is the function that takes a name and a callback function as arguments! when we call greet it logs "Hello " + name and then calls the callback function which logs "Goodbye!"! callbacks are commonly used in asynchronous programming to handle events or to perform actions after a certain task has been completed!