// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtEWid4OPzuGKn8xZ-WaP7pxHFlSh_w2w",
    authDomain: "fir-db-fe752.firebaseapp.com",
    databaseURL: "https://fir-db-fe752.firebaseio.com",
    projectId: "fir-db-fe752",
    storageBucket: "fir-db-fe752.appspot.com",
    messagingSenderId: "1020946338394"
  };
  firebase.initializeApp(config);



var messagesRef = firebase.database().ref('message');

document.getElementById('contactForm').addEventListener('submit',submitForm);


function clicPost(e)
{
	var Name=document.getElementById('name').value;
	var Email=document.getElementById('email').value;
	var Contact=document.getElementById('contact').value;
	var Feedback=document.getElementById('feedback').value;

	savedata(Name,Email,Contact,Feedback);

}

function savedata(Name,Email,Contact,Feedback)
{
var newMessagesRef = messagesRef.push();
newMessagesRef.set({
name:Name,
email:Email,
contact:Contact,
feedback:Feedback
});
}

function retrive(){

var messagesRef = firebase.database().ref('message').on("child_added",function(mydd)
{

var mydata=mydd.val();
console.log(mydata);




});  

}
