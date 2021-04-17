var phoneNo= document.getElementById("phno");
var ageInput= document.getElementById("age");
var emailInput= document.getElementById("email");
var passWord= document.getElementById("pass");
var cpassWord= document.getElementById("cpass");
var nameInput= document.getElementById("name");
var cityInput= document.getElementById("city");

phoneNo.addEventListener("blur", function(){
    let regex= /^(\+91-|91|0)?[6-9]{1}[0-9]{9}$/;
    let phnoInput=phoneNo.value;
    if(regex.test(phnoInput)){
        document.getElementById("phoneError").innerHTML="";
    }
    else{
        document.getElementById("phoneError").innerHTML="**Invalid Phone number";

    }

});
ageInput.addEventListener("blur", function(){
    let regex= /[0-9]{1,3}/;
    let ageInputValue = ageInput.value;
    if(regex.test(ageInputValue)){
        document.getElementById("ageError").innerHTML="";
    }
    else{
        document.getElementById("ageError").innerHTML="**Invalid age input";
    }
});
emailInput.addEventListener("blur", function(){
    let regex= /^([0-9a-zA-Z_\-\.]+)@([0-9a-zA-Z_\-\.]+)\.([a-zA-Z]){2,7}$/;
    let emailInputValue=emailInput.value;
    if(regex.test(emailInputValue)){
        document.getElementById("emailError").innerHTML="";
    }
    else{
        document.getElementById("emailError").innerHTML="**Invalid email address";
    }
});
passWord.addEventListener("blur", function(){
    let regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let passInputValue=passWord.value;
    if(regex.test(passInputValue)){
        document.getElementById("passError").innerHTML="";
    }
    else{
        document.getElementById("passError").innerHTML="**Invalid password";
    }
});
cpassWord.addEventListener("blur", function(){

    
    if(cpassWord.value==passWord.value){
        document.getElementById("cpassError").innerHTML="";
    }
    else{
        document.getElementById("cpassError").innerHTML="**Does not match password";
    }
});
nameInput.addEventListener("blur", function(){

    let regex=/^[a-zA-Z '\.\-]{2,30}$/;
    let nameInputValue=nameInput.value;
    if(regex.test(nameInputValue)){
        document.getElementById("nameError").innerHTML="";
    }
    else{
        document.getElementById("nameError").innerHTML="**Name should contain only alphabets and spaces";
    }
});
cityInput.addEventListener("blur", function(){

    let regex=/^[a-zA-Z 0-9]{2,30}$/;
    let cityInputValue=cityInput.value;
    if(regex.test(cityInputValue)){
        document.getElementById("cityError").innerHTML="";
    }
    else{
        document.getElementById("cityError").innerHTML="**City should contain only alphabets and spaces";
    }
});
function sub(){
    if(phoneNo.value==""||ageInput.value==""|| emailInput.value==""||passWord.value==""||cpassWord.value==""||cityInput.value==""){
        alert("Fill all the fields");
        console.log("hello")
    }
}
