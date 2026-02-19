document.getElementById('withdraw').addEventListener('click',function(){
    // console.log('cliced')
    //get the agent number
    const agentNum = document.getElementById('cash-agent-num')
    const contact = agentNum.value ;
    console.log(contact);
    if(contact.length!=11){
        alert('this is invalid number');
        return ;
    }
    //get the main amount
    const mainAmount = document.getElementById('main-amount-nav')
    const maintaka = mainAmount.innerText;
    console.log(maintaka);
    //get the cash amount 
    const cashAmount = document.getElementById('cash-amount');
    const withdraw=cashAmount.value ;
    console.log(withdraw);
    //balance calculate 
    const newAmount=parseInt(maintaka) - Number(withdraw) ;
    if(newAmount<0){
        alert('insufficient fund');
        return ;
    }
    //get the pin
    const agentPass= document.getElementById('cash-agent-pass');
    const pin=agentPass.value;
    console.log(pin);
    if(pin=='0000'){
        alert('cash out successfully');
        console.log('new amount : ',newAmount);
       mainAmount.innerText = newAmount

    }
    else{
        alert('wrong pin number');
        return;
    }
    
})