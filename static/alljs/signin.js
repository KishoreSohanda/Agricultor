let email = document.getElementById('email');
let password = document.getElementById('pass');
let form = document.getElementById('form');

form.addEventListener("submit",function(e) {

    if (email.value === "" || email.value == null) {
        e.preventDefault(); 
        alert("Please Enter Valid Email");
        email.style.borderColor = "red";
    }

    if (password.value === "" || password.value == null) {
        e.preventDefault(); 
        alert("Please Enter Valid Password");
        password.style.borderColor = "red";
    }

    if (password.value.length < 8) {
        e.preventDefault();
        alert("Password Should Contains Atleast 8 Characters");
        password.style.borderColor = "red";
    } 

    if (password.value.length > 16) {
        e.preventDefault();
        alert("Password Should Not Contains 16+ Characters");
        password.style.borderColor = "red";
    }

});