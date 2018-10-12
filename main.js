var config = {
    apiKey: "AIzaSyCX47dx41zC-Q2J-CocWrSMTWSflbMXAbY",
    authDomain: "myname-f56fe.firebaseapp.com",
    databaseURL: "https://myname-f56fe.firebaseio.com",
    projectId: "myname-f56fe",
    storageBucket: "",
    messagingSenderId: "797633021067"
  };
  firebase.initializeApp(config);

var messageRef=firebase.database().ref('NewForm');
document.getElementById('contactForm').addEventListener('submit',submitform);
function clickpost(e) {
	var fname=document.getElementById('fname').value;
	var lname=document.getElementById('lname').value;
	var email=document.getElementById('email').value;
	var country=document.getElementById('country').value;
	var gender=document.getElementById('gen').value;
	var check=document.getElementById('chec').value;
	var yof=document.getElementById('yof').value;
	savedata(fname,lname,email,country,gender,check,yof);
}
function savedata(fname,lname,email,country,gender,check,yof)
{
	var newMessageRef=messageRef.push();
	newMessageRef.set({
		Fname:fname,
		Lname:lname,
		email:email,
		country:country,
		gender:gender,
		year:year,
		check:check,
		yof:yof
	});
}