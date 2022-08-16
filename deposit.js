// step 1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit')
    // step 2: get the deposit amount from the deposit input field
    // use .value to get value from input field
    const depositField = document.getElementById('user-deposit');
    const depositAmount = depositField.value;
    // console.log(depositAmount);

    // step 3: get the current deposit amount
    // for non-input field use inner text to get the text 
    const depositBoard = document.getElementById('deposit-total');
    const depositTotal = depositBoard.innerText;
    depositBoard.innerText = depositAmount;
})