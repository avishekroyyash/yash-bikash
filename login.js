//console.log('add to login page')
document.getElementById('btn').addEventListener('click',function(){
    //get number of the input
    const inputNum = document.getElementById('input-num');
    const contactNum = inputNum.value; 
    console.log(contactNum)
    //get pin of the input
    const inputPin = document.getElementById('input-pin')
    const pin = inputPin.value;
    console.log(pin)
})