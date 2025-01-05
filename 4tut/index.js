const { EventEmitter } = require('stream');
const logEvents=require('./logEvents')

const eventEmitter=require('events')

class MyEmitter extends EventEmitter{};

//initialize obj
const myEmitter = new MyEmitter();

//add the listner for log events
myEmitter.on('log',(message)=>logEvents(message))

setTimeout(()=>{
    //emit thr log event 
    myEmitter.emit('log','Log event emitted!')

},2000)