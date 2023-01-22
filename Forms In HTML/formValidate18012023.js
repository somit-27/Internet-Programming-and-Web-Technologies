function validate(){
    var pass = document.getElementById("password").value;
    var cpass = document.getElementById("cpassword").value;
    var namef = /^[A-Za-z]{1,25}$/;
    if(document.FormVal.username.value == "" || document.FormVal.username.value.match(namef)){
        alert("Enter your name");
        document.FormVal.username.focus();
        return false;
    }
    var mailformat = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z]+\.[a-zA-Z]+$/;
    if(!document.FormVal.email.value.match(mailformat)){
        alert("Enter correct email");
        return false;
    }
    var paasf = /^[A-Z](?=.*[a-z])$/;
    if(document.FormVal.password.value==""){
        alert("Enter Password");
        return false;
    }
    if(document.FormVal.cpassword.value==""){
        alert("Confirm your Password");
        return false;
    }
    if(pass!=cpass){
		alert("Password doesn't match");
		return false;
	}
    var phoformat = /^(\+[0-9]{2,3}[ ])?[0-9]{5}[ ][0-9]{5}$/;
    if(!document.FormVal.phone.value.match(phoformat)){
        alert("Wrong phone number");
        return false;
    }
}