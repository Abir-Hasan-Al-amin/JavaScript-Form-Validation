let user =document.getElementById('user');
let email =document.getElementById('email');
let password =document.getElementById('password');
let form =document.getElementById('form');
let error = document.querySelectorAll('.error');
let successIcon = document.querySelectorAll('.succ-icon');
let failIcon = document.querySelectorAll('.fail-icon');

let emailV= /^([a-zA-Z0-9\._]+)@([a-zA-Z])+.([a-z]+)(.[a-z]+)?$/

form.addEventListener('submit',e=>{
    e.preventDefault();
    check(user,0,"Username cannot be blank");
    check(email,1,"Email cannot be blank");
    check(password,2,"Password cannot be blank");
});
let check = (id, idx, msg) => {
    if (id.value.trim() === '') {
        error[idx].innerHTML = msg;
        failIcon[idx].style.opacity = 1;
        successIcon[idx].style.opacity = 0;
    } else if (id === email && !emailV.test(id.value)) { 
        error[idx].innerHTML = "Invalid Email";
        failIcon[idx].style.opacity = 1;
        successIcon[idx].style.opacity = 0;
    } else {
        error[idx].innerHTML = "";
        successIcon[idx].style.opacity = 1;
        failIcon[idx].style.opacity = 0;
    }
}

