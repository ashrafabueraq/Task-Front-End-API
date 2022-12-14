
const form = document.getElementById('form')
const inputname = document.querySelector("[name ='username']");
const inputemail = document.querySelector("[name='email']");
const inputpassword = document.querySelector("[name='password']");
const inputconfirm = document.querySelector("[name='confirm-password']");

const errorname = document.getElementById('error')
const erroremail = document.getElementById('erroremail')
const errorpass = document.getElementById('errorpass')
const errorconfirm = document.getElementById('errorconfirm')

const emailexsit = localStorage.getItem('email')

form.addEventListener('submit', (e) => {

    let flag = false


    if (inputname.value == '') {

        errorname.innerHTML = 'cannot be blank'


    } else if (inputname.value.length < 5 || inputname.value.length > 15) {


        errorname.innerHTML = 'must consist of 5 to 15 characters';

    } else if (inputemail.value.length == '') {

        erroremail.innerHTML = 'cannot be blank'
    
    } else if (inputemail.value == emailexsit) {

         erroremail.innerHTML = 'email is already exist';

    } else if (inputpassword.value.length < 8) {

        errorpass.innerHTML = 'Password must be at least 8 characters'

    } else if (inputconfirm.value !== inputpassword.value) {

        errorconfirm.innerHTML = 'password not match';
    } else {

        sendData();
        
        flag == true
    }

    if (flag == false) {

        e.preventDefault();

    }

})




async function sendData() {

    const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName: inputname.value,
            userEmail: inputemail.value,
            userPassword: inputpassword.value,
            userConfirm: inputconfirm.value,
        })
    })
    // Handle the response from the API
    const data = await response.json();
    if (response.ok) {
        console.log('Data was successfully sent to the API!');
        localStorage.setItem('Success', 'Successfully logged in');
        localStorage.setItem('email', inputemail.value)
    } else {
        console.log(`Error: ${data.error}`);
    }

    window.location.href = './logged.html'

}







// https://goldblv.com/api/hiring/tasks/register // this endpoint dosn't working 