// requires node packet, and then connects to a port
const io = require('socket.io')(3000); 

// create the first set of instructions
// this is saying on the connection, run a callback (socket)
io.on('connection', (socket) => { 
    // important to understand that the server is the cook, and when we console log it in the server we see it in the "kitchen" and when we console log in the script, we console log in the "front" of the restaurant 
    // the below code will show up in our server terminal--notice the "new-user" console is pushed to your server status
    console.log('new-user');
    socket.on('send-chat-message', message => 
    {
        // broadcast will display to everyone but the sender
        socket.broadcast.emit('chat-message', message);
        console.log('server', message);
    }); 

    // the server is going to "emit" i.e. on connection, say a chat message--hello lambda
    // hello-lambda is the data that goes into callback, it is hard coded right now (if correct the console when the index.html page is ran will log the "hello lambda")
    // socket.emit("chat-message", "hello lambda");
});



