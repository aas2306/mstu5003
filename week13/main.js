// assume this info is from login
var currentUser = {
	first: "Jin",
	last: "Kuwata",
	id: "a1"
};

<<<<<<< HEAD
//
// var userMsg;
//
// document.querySelector('#postBtn').addEventListener('click', function() {
// 	userMsg = document.querySelector('#messageText').value;
// 	alert(userMsg);
// 	document.querySelector('#messageText').value = "";
// });

// var userMsg = [];
//
// document.querySelector('#postBtn').addEventListener('click', function() {
// 	userMsg.push(document.querySelector('#messageText').value);
// 	alert(userMsg);
// 	document.getElementById('messageText').value = "";
//
// 	document.querySelector('#messages').createElement('p').innerHTML(userMsg);
// });



var messageList = [];
var userMsg;

document.querySelector('#postBtn').addEventListener('click', function() {
	userMsg = document.querySelector('#messageText').value;
	messageList.push(userMsg);
	alert(userMsg);
	document.querySelector('#messageText').value = "";
	var newMsg = document.createElement('p');
	newMsg.innerHTML = userMsg;
	document.querySelector('#messages').appendChild(newMsg);
});

// document.querySelector('#postBtn').addEventListener('click', function() {
// 	userMsg = document.querySelector('#messageText').value;
// 	messageList.push(userMsg);
// 	alert(userMsg);
// 	document.querySelector('#messageText').value = "";
// 	var newMsg = document.createElement('p');
// 	var node = document.createTextNode(userMsg);
// 	newMsg.appendChild(node);
// 	var messagesDiv = document.querySelector('#messages');
// 	messagesDiv.appendChild(newMsg);
// });
=======
var messageList = []; // ary.push(thingToPush)
var userMsg = "xxx";

// Program the component to take text data... and store it / when the button is pushed.

document.querySelector('#postBtn').addEventListener('click', function(){
	userMsg = document.querySelector('#userText').value;
	messageList.push(userMsg);
	console.log(messageList);

	var el = document.createElement('P'); // <p></p>
			el.innerText = userMsg;			// <p>Message here</p>

	document.querySelector('#messages').appendChild(el);


	document.querySelector('#userText').value = "";
});
>>>>>>> jmk2142/master
