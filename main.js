  var config = {
    apiKey: "AIzaSyCtEWid4OPzuGKn8xZ-WaP7pxHFlSh_w2w",
    authDomain: "fir-db-fe752.firebaseapp.com",
    databaseURL: "https://fir-db-fe752.firebaseio.com",
    projectId: "fir-db-fe752",
    storageBucket: "fir-db-fe752.appspot.com",
    messagingSenderId: "1020946338394"
  };
  firebase.initializeApp(config);




var messageRef=firebase.database().ref('NewFormDeails');
document.getElementById('contactForm').addEventListener('submit',submitform);
function clickpost(e) {
	e.preventDefault();
	var fname=document.getElementById('fname').value;
	var lname=document.getElementById('lname').value;
	var email=document.getElementById('email').value;
	var country=document.getElementById('country').value;
	var gender=querySelector("input[name=gender]:checked").value;
	// check=querySelector("input[name=ckb]:checked").value;
	var yof=document.getElementById('yos').value;
	//savedata(fname,lname,email,country,gender,check,yof);
}
console.log(fname);
console.log(lname);
console.log(email);
console.log(country);
console.log(gender);
//console.log(yof);
//function savedata(fname,lname,email,country,gender,check,yof)
/*{
	var newMessageRef=messageRef.push();
	newMessageRef.set({
		Fname:fname,
		Lname:lname,
		Email:email,
		Country:country,
		Gender:gender,
		//Check:check,
		Yos:yof
	});
}*/