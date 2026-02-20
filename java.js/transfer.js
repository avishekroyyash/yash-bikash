document.getElementById('send-now').addEventListener('click',function(){
    //console.log('clicked by sent now button');
    //take user account number 
    const userAccNum = getValueFromId('transfer-num');
    if(userAccNum.length!=11){
        alert('Enter correct account number')
        return;
    }
    //take amount which is trasfer 
    const amount=getValueFromId('transfer-amount')
     if(amount<0 || getMoney()<amount){
        alert('invalid amount');
        return;
     }
     //money calculation
     let p = 0; 
     const newMoney = sub(getMoney(),amount);
     
    //take pin of user 
    
    const pin = getValueFromId('transfer-pass');
    if(pin=='0000'){
         
        alert(`transfer success full .
            new balance ${newMoney} at time ${new Date}`);
            setMoney(newMoney);    
         
    }
    else{
        alert('wrong pin')
        return;
    }
    
});