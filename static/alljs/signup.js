let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let mobile = document.getElementById('mobile');
let state = document.getElementById('state');
let city = document.getElementById('city');
let pass = document.getElementById('pass');
let cpass = document.getElementById('cpass');
let form = document.getElementById('form');

form.addEventListener("submit",function(e) {

    let mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    
    if (fname.value === "" || fname.value == null) {
        e.preventDefault(); 
        alert("Please Enter First Name");
        fname.style.borderColor = "red";
    }
    
    if (lname.value === "" || lname.value == null) {
        e.preventDefault(); 
        alert("Please Enter Last Name");
        lname.style.borderColor = "red";
    }
    
    if (email.value === "" || email.value == null) {
        e.preventDefault(); 
        alert("Please Enter Email-Id");
        email.style.borderColor = "red";
    } 

    if (mailformat.test(!email.value)) {
        e.preventDefault(); 
        alert("Please Enter Valid Email-Id");
        email.style.borderColor = "red";
    }
    
    if (state.value === "" || state.value == null) {
        e.preventDefault(); 
        alert("Please Enter State Name");
        state.style.borderColor = "red";
    }
    
    if (city.value === "" || city.value == null) {
        e.preventDefault(); 
        alert("Please Enter City Name");
        city.style.borderColor = "red";
    }

    if (mobile.value === "" || mobile.value == null) {
        e.preventDefault();
        alert("Please Enter Mobile Number");
        mobile.style.borderColor = "red";
    }
    
    if (mobile.value.length !== 10) {
        e.preventDefault();
        alert("Please Enter Valid 10-Digit Mobile Number");
        mobile.style.borderColor = "red";
    }
    
    if (pass.value === "" || pass.value == null) {
        e.preventDefault();
        alert("Please Enter Password");
        pass.style.borderColor = "red";
    } 
    
    if (pass.value.length < 8) {
        e.preventDefault();
        alert("Password Should Contains Atleast 8 Characters");
        pass.style.borderColor = "red";
    } 
    
    if (pass.value.length > 16) {
        e.preventDefault();
        alert("Password Should Not Contains 16+ Characters");
        pass.style.borderColor = "red";
    }
    
    if (cpass.value === "" || cpass.value == null) {
        e.preventDefault();
        alert("Please Re-Enter Password");
        cpass.style.borderColor = "red";
    } 
    
    if (cpass.value != pass.value) {
        e.preventDefault();
        alert("Password Should Be Same As Above");
        cpass.style.borderColor = "red";
    }
    
});