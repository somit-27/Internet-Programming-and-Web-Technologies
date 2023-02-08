function validate(){
    var userinput = document.getElementById("dob").value;
    if(userinput==''){
        alert("Enter date");
    }
    var dob = new Date(userinput);
    var diff = Date.now() - dob.getTime();
    diff = diff/(24*3600*1000*365);
    if(diff<18){
        alert("You cannot register as you are under age.");
        return false;
    }
    if(diff<0){
        alert("Enter appropriate birthdate.");
        return false;
    }
}