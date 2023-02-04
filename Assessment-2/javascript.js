function validate(){
    firstval = /^[A-Za-z]{8,10}$/;
    if(!document.Workshop.first.value.match(firstval)){
        alert("Please enter the correct first name");
        return false;
    }
    lastval = /^[A-Za-z]{8,10}$/;
    if(!document.Workshop.last.value.match(lastval)){
        alert("Please enter the correct last name");
        return false;
    }
    compval = /^[A-Za-z0-9 ]{10,15}$/;
    if(!document.Workshop.company.value.match(compval)){
        alert("Please enter the correct company name");
        return false;
    }
    addval = /^[A-Za-z0-9_., ]{5,}$/;
    if(!document.Workshop.address.value.match(addval)){
        alert("Please enter the correct address");
        return false;
    }
    if(document.Workshop.state.selectedIndex == "0"){
        alert("Please choose your state");
        return false;
    }
    if(document.Workshop.country.selectedIndex == "0"){
        alert("Please choose your country");
        return false;
    }
    mailval = /^[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$/;
    if(!document.Workshop.email.value.match(mailval)){
        alert("Please enter the correct email address");
        return false;
    }
    phoneval = /^[0-9]{10}$/;
    if(!document.Workshop.phone.value.match(phoneval)){
        alert("Please enter the correct phone number");

        return false;
    }
    if(document.Workshop.meal.selectedIndex == "0"){
        alert("Please choose your meal");
        return false;
    }
    if((document.Workshop.cash.checked == false) && (document.workshop.cheque.checked == false) && (document.workshop.dd.checked == false)){
        alert("Please choose the payment mode");
        return false;
    }
    ddval = /^[A-Z]{2}\-[0-9]{6}$/;
    if(!document.Workshop.ddcno.value.match(ddval)){
        alert("Please enter the correct DD/Cheque number");
        return false;
    }
    bankval = /^[A-Za-z]+$/;
    if(!document.Workshop.bname.value.match(bankval)){
        alert("Please enter the correct bank name");

        return false;
    } 
    payval = /^[A-Za-z]+$/;
    if(!document.Workshop.pat.value.match(payval)){
        alert("Please enter the payable at field correctly");
       return false;
    } 
}