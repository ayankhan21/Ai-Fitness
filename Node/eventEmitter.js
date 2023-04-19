const EventEmitter = require('events')
const emitter = new EventEmitter(); // creating an instance of the object

//Registering a listener
emitter.on('messageLogged',(arg)=>{
    console.log("Yes man the event was triggered",arg)
})

// this order is important (first listener then raiser)

// Raising an Event
emitter.emit('messageLogged');


//sending extra arguements
emitter.emit('messageLogged',{id:1,message:"YOLO"})