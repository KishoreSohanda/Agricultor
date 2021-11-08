let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let mobile = document.getElementById('mobile');
let state = document.getElementById('state');
let city = document.getElementById('city');
let pass = document.getElementById('pass');
let cpass = document.getElementById('cpass');
let form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    // e.preventDefault();
    formSubmit();
});

function formSubmit() {
    let mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if (fname.value === "" || fname.value == null) {
        alert("Please Enter First Name");
        fname.style.borderColor = "red";
    }

    if (lname.value === "" || lname.value == null) {
        alert("Please Enter Last Name");
        lname.style.borderColor = "red";
    }

    if (email.value === "" || email.value == null) {
        alert("Please Enter Email-Id");
        email.style.borderColor = "red";
    } else if (mailformat.test(email.value)) {
        return true;
    }
    else {
        alert("Please Enter Valid Email-Id");
        email.style.borderColor = "red";
    }

    if (state.value === "" || state.value == null) {
        alert("Please Enter State Name");
        state.style.borderColor = "red";
    }

    if (city.value === "" || city.value == null) {
        alert("Please Enter City Name");
        city.style.borderColor = "red";
    }

    if (mobile.value === "" || mobile.value == null) {
        alert("Please Enter Mobile Number");
        mobile.style.borderColor = "red";
    }
    else if (mobile.value.length == 10) {
        return true;
    }
    else {
        alert("Please Enter Valid 10-Digit Mobile Number");
        mobile.style.borderColor = "red";
    }

    if (pass.value === "" || pass.value == null) {
        alert("Please Enter Password");
        pass.style.borderColor = "red";
    } else if (pass.value.length < 8) {
        alert("Password Should Contains Atleast 8 Characters");
        pass.style.borderColor = "red";
    } else if (pass.value.length > 16) {
        alert("Password Should Not Contains 16+ Characters");
        pass.style.borderColor = "red";
    }

    if (cpass.value === "" || cpass.value == null) {
        alert("Please Re-Enter Password");
        cpass.style.borderColor = "red";
    } else if (cpass.value != pass.value) {
        alert("Password Should Be Same As Above");
        cpass.style.borderColor = "red";
    }

}