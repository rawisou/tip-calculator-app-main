const billInput = document.getElementById('billInput')
const customAmount = document.getElementById('customAmount')
const numOfPeople = document.getElementById('numOfPeople')
const resetBtn = document.getElementById('resetBtn')
const tipAmount = document.getElementById('tipAmount')
const tipTotal = document.getElementById('tipTotal')
const tipInput = document.querySelectorAll('input[type=radio]');


let bill = billInput.value
let tip = tipInput.value


const onTipAmountCal = () => {
    (billInput.value  *  percentage.value)  / 100 / numOfPeople
}


const reset = () => {
    billInput.value = ""
    numOfPeople.value = ""
}






//All event listeners
resetBtn.addEventListener("click", reset);