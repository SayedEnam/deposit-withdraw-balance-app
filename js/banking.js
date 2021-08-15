// Deposit Money

document.getElementById("deposit-button").addEventListener("click", function(){
    
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // get Current deposit

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);


    depositTotal.innerText = previousDepositTotal + depositAmount;
 


    //update total balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    // clear input field

    depositInput.value = '';

})


// Withdraw Money

document.getElementById('withdraw-button').addEventListener('click', function(){
        
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    

    // Get current withdraw amount

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdraTotalText = withdrawTotal.innerText;
    const prevwithdrawTotal = parseFloat(withdraTotalText);

    withdrawTotal.innerText = prevwithdrawTotal + withdrawAmount;

    //Update Balance after withdraw

    const balanceTotal = document.getElementById('balance-total');

    const withdrawBalanceTotalText = balanceTotal.innerText;
    const previousWithdrawBalanceTotal = parseFloat(withdrawBalanceTotalText);

    balanceTotal.innerText = previousWithdrawBalanceTotal - withdrawAmount;



    // Clear input field

    withdrawInput.value = '';

});

