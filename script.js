
// const customAmount = document.getElementById('customAmount')
const numOfPeople = document.getElementById('numOfPeople')
// const resetBtn = document.getElementById('resetBtn')
// const tipAmount = document.getElementById('tipAmount')
// const tipTotal = document.getElementById('tipTotal')
const tipInput = document.querySelectorAll('input[type=radio]')
const customTipInput = document.querySelectorAll('input[name=customTip]')
const billInput = document.getElementById('billInput')


const calculateTip = () => {
    let bill = parseFloat(billInput.value)
    let noOfPeople = document.getElementById('numOfPeople').value
    let tipPercent = document.querySelectorAll('input[type=radio]').value
console.log(bill, tipPercent, noOfPeople)
}



//Event listeners
tipInput.forEach((item)=> {
    item.addEventListener('click', calculateTip)
})

numOfPeople.addEventListener('input', calculateTip)
