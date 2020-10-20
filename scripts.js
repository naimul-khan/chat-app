// invoke the io varibale from the backend node server
// call the io variable from its local host, declared in server.js
const socket = io('http://localhost:3000');

// dom manipulation is using javascript to control the web app
// we are connecting the messageContainer varibale to the messge-container id,
// messageForm to send-form (again in index.html)
// meesageInput to message-input 
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-form');
const messageInput = document.getElementById('message-input'); 

// calls on the server socket, calls the data function and logs the emit function in server.js

//we tested the console log, and it worked :D
socket.on('chat-message', (data) => 
{ 
    // calls the appendMessage function and adds it 
        // console.log(data);
    appendMessage(data); 
})

// a function that uses an event listener
// calls the addEventListener, which listens for an event, when the submit button is passed, it will perform e(a common syntax for event, e.g. evt, etc.)
messageForm.addEventListener('submit', (e) =>
{
    // below prevents page from refreshing when submit is hit
    e.preventDefault();
    // the function gets the value inside of the form
    const message = messageInput.value;
    // takes in a value and then sends out a value
    socket.emit('send-chat-message', message);
    // then we want to clear the input box of whatever we typed in 
    messageInput.value = ''; 
})

// this function will add the message to the last previous message, to create a chat log
function appendMessage(message) {
    const messageElement = document.createElement('div');
    // adds the message to the new element
    messageElement.innerText = message; 
    // appends new element to the message container div
    messageContainer.append(messageElement);


}