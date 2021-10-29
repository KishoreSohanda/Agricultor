let email = document.getElementById('email');
let password = document.getElementById('pass');

function submit() {
    let mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if (email.value === "" || email.value==null) {
        email.style.borderColor = 'red';
        alert("Please Enter Email");
    } 
    else if (mailformat.test(email.value)){
        console.log("ok");
    }
    else{
        email.style.borderColor = 'red';
        alert("Please Enter Valid Email");
    }
    if (password.value === "" || password.value==null) {
        password.style.borderColor = 'red';
        alert("Please Enter Password");
    } else {
        return true;
    }
    
}