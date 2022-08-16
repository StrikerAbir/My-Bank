// step 1: add event listener to the deposit button 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('withdraw')
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmount = withdrawField.value;
    withdrawField.value = '';
    const withdrawBoard = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawBoard.innerText;
    const withdrawSum = parseFloat(newWithdrawAmount) + parseFloat(previousWithdrawTotal);
    withdrawBoard.innerText = withdrawSum;
    
    const balanceBoard = document.getElementById('balance-total');
    const previousBalanceTotal = balanceBoard.innerText;
    const balanceSubtract = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    balanceBoard.innerText = balanceSubtract;
})