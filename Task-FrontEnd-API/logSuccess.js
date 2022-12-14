const valEmail = localStorage.getItem('email');
const successfully = localStorage.getItem('Success')
const para = document.getElementById('par');
const head = document.getElementById('head')

if (valEmail == null) {
    
    head.innerHTML = 'Successfully logged in';
    para.innerHTML = 'User@gmail.com';

}else {
    head.innerHTML = successfully
    para.innerHTML = valEmail
}