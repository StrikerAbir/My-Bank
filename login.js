// step 1 : add click handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step 2 :get the email address from input field
    // alwalys remember to use .value to get text from an input field.
    const emailField = document.getElementById('user-email')
    const email = emailField.value;

    // step 3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);
    
    // ! Do not varify email password on the client side.
    // step 4: varify email and password on the server side
    if (email === 'jahanaratisha@gmail.com' && password === 'tisha loves abir') {
        console.log('valid user');

    } else {
        alert('Invalid user. Enter corret email and password');
        console.log('invalid user');
    }
})