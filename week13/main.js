// assume this info is from login
var currentUser = {
	first: "Jin",
	last: "Kuwata",
	id: "a1"
};

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
