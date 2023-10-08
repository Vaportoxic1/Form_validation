var name_error = document.getElementById("name-error");
var phone_error = document.getElementById("phone-error");
var email_error = document.getElementById("email-error");
var message_error = document.getElementById("message-error");
var submit_error = document.getElementById("Submit-error");
var validate_form = document.getElementById("validateform-btn");

validate_form.addEventListener("click",(event)=>{
   if(!validateform()){
       event.preventDefault();
   }
});

function validatename(){
    var name = document.getElementById("contact-name").value;
    if(name.length == 0){
        name_error.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/\b\w+\b\s+\b\w+\b/)){
        name_error.innerHTML = 'Write a full name';
        return false;
    }
    name_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatephone(){
    var phone = document.getElementById("phone-number").value;

    if(phone.length == 0){
        phone_error.innerHTML = 'Phone No. required';
        return false;
    }
    
    if(phone.length !== 10){
        phone_error.innerHTML = 'Phone No. should be 10 digits';
        return false;
    }
    /*if(!phone.match(/^[0-9]{10}$/)){
        phone_error.innerHTML = 'Only digits please';
        return false;
    }*/
    phone_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateemail(){
    var email = document.getElementById("email").value;
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if(email.length == 0){
        email_error.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(emailRegex)){
        email_error.innerHTML = 'Email Invalid';
        return false;
    }
    email_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatemessage(){
    var message = document.getElementById("message").value;
    var required = 30;
    var left = required - message.length;
    if(left > 0){
        message_error.innerHTML = left+ 'more characters required';
        return false;
    }
    message_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateform(){
    if(!validatename() || !validatephone() || !validateemail() || !validatemessage()){
        submit_error.style.display = 'block';
         submit_error.innerHTML = 'Please fix the error';
         setTimeout(function(){submit_error.style.display = 'none';
            
         }, 3000);
         return false;
    }
    return true;
}

