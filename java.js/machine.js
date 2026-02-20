// id -> value find 
function getValueFromId(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log('the value of id ', value)
    return value;
}

// id -> text find
function getTextFromId(id){
    const innerT= document.getElementById(id);
    const text=innerT.innerText;
    console.log('the text of id ',text);
    return text;
}

// get money 
function getMoney(){
    const mainMoney = document.getElementById('main-amount-nav')
     const balance = mainMoney.innerText;
     console.log('main money is ',balance);
     return Number(balance);
}

//set money
function setMoney(value){
     const mainMoney = document.getElementById('main-amount-nav');
      mainMoney.innerText=value;
}

// add function
function add(a,b){
    return Number(a)+Number(b);
}

// sub function
function sub(a,b){
    return Number(a)-Number(b);
}