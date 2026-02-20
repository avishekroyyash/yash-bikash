document.getElementById('add-money').addEventListener('click',function(){
    //console.log('clicked add money')
    //take the selected bank
    const selectBank=getValueFromId('select-bank');
    //console.log('selected button',selectBank)
    if(selectBank=='Select a bank'){
        alert('Add a bank');
        return;
    }
    //take account number
    const accountNo = getValueFromId('add-agent-num')
    if(accountNo.length != 11){
        alert('Enter a 11 digit account number');
        return;
    }
    //console.log('account no ',accountNo);
    //add amount of money
    const addMoney=getValueFromId('add-amount')
    //console.log('add money',addMoney);
    //new money calculation
    const newMoney = add(getMoney(),addMoney);
    //add pin number
    const pin =getValueFromId('add-agent-pass')
    //console.log('add pin ',pin)
    if(pin=='0000'){
        alert('money add succesfully');
        setMoney(newMoney)
    }
    else{
        alert('pin is incurrect');
        return;
    }
})