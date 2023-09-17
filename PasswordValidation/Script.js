let pswrd = document.querySelector('#pass');
let toggleBtn = document.querySelector('#toggleBtn');

let lowercase = document.querySelector('#lower');
let uppercase = document.querySelector('#upper');
let digit = document.querySelector('#number');
let specialcharacter = document.querySelector('#special');
let minlength = document.querySelector('#length');

// For verify the requirements for creating password
function check(data){
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    // For lowercase verification
    if(lower.test(data)){
        lowercase.classList.add('valid');
    }else{
        lowercase.classList.remove('valid');
    }
    // For uppercase verification
    if(upper.test(data)){
        uppercase.classList.add('valid');
    }else{
        uppercase.classList.remove('valid');
    }
    // For digit verification
    if(number.test(data)){
        digit.classList.add('valid');
    }else{
        digit.classList.remove('valid');
    }
    // For special character verification
    if(special.test(data)){
        specialcharacter.classList.add('valid');
    }else{
        specialcharacter.classList.remove('valid');
    }
    // For minimuim length verification
    if(length.test(data)){
        minlength.classList.add('valid');
    }else{
        minlength.classList.remove('valid');
    }
}

// For show password
toggleBtn.onclick = function(){
    if (pswrd.type === 'password'){
        pswrd.setAttribute('type', 'text');
        toggleBtn.innerHTML = "Hide";
    }else{
        pswrd.setAttribute('type', 'password');
        toggleBtn.innerHTML = "Show";
    }
}