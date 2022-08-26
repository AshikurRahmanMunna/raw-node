const events = require('events');

const eventEmitter = new events.EventEmitter();

const chitkarDibo = () => {
    console.log('Oi beta');
}

eventEmitter.on('scream', chitkarDibo).chitkarDibo

eventEmitter.emit('scream');