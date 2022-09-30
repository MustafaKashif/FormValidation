function formValidationButton(){
    if(fName.value == 0){
        alert("Please enter the first Name !");
    }
    else{
        console.log(fName.value);
    }

    if(lName.value == 0){
        alert("Please enter the Last Name !");
    }
    else{
        console.log(lName.value);
    }

    if(PhoneNumber.value == 0 || PhoneNumber.value.length != 11){
        alert("Please enter a valid Phone Number !");
    }
    else{
        console.log(PhoneNumber.value);
    
    }

    if(eMail.value == null || eMail.value.match("@")){
         console.log(eMail.value);

    }
    else{
        alert("Invalid Email address !")
    }

    if(zip.value == 0 || zip.value.length != 5){
        alert("Please enter a valid zip code !");
    }
    else{
        console.log(zip.value);
    }
}