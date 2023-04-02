// Exp 1. registering for the event to be fired only one time using once. 
// Exp 2. create an event emitter instance and register a multiple of callback.
// Exp 3. registering for the evnet with callback parameters

// if you want to create your own envent you create a class.
const EventEmitter = require("events");
// its a class syntax, use new keyword and first letter is capital.
const event = new EventEmitter(); 

//work as response
event.on("SayMyName", () => {
    console.log("My Name is Asad")
});

event.on("SayMyName", () => {
    console.log("My Name is  Ali")
});

event.on("SayMyName", () => {
    console.log("My Name is Usman")
});

// work as a listner 
event.emit("SayMyName");

// Exp 3.
event.on("checkPage", (sc, msg) => {
    console.log(`chk page status ${sc} and page is ${msg}`)
});

event.emit("checkPage", 200, 'ok');
