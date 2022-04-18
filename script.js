
const numOfPeople = document.getElementById('numOfPeople')
const resetBtn = document.getElementById('resetBtn')
const tipAmount = document.getElementById('tipAmount')
const tipTotal = document.getElementById('tipTotal')
const tipInput = Array.from(document.querySelectorAll('input[type=radio] + label'))
const customTipInput = document.getElementById('customAmount')
const billInput = document.getElementById('billInput')

let tipPercentValue = 0
let customTip = 0
let tipSum = 0
let tipAmountperPersonSum = 0
let totalPerPersonSum = 0

console.log(customTipInput)

const calculateTip = (event) => {
    let bill = parseFloat(billInput.value)
    let noOfPeople = document.getElementById('numOfPeople').value
  if (event.target.getAttribute("for") === "5") {
        tipPercentValue = 5
    } else if (event.target.getAttribute("for") === "10") {
        tipPercentValue = 10
    } else if (event.target.getAttribute("for") === "15") {
        tipPercentValue = 15
    } else if (event.target.getAttribute("for") === "25") {
        tipPercentValue = 25
    } else if (event.target.getAttribute("for") === "50") {
        tipPercentValue = 50
    }
  
  if (customTipInput.value === "") {
    console.log(bill, tipPercentValue, noOfPeople, customTip)
    tipSum = (bill * tipPercentValue) / 100 
    tipAmountPerPerson = tipSum/ noOfPeople
    totalPerPersonSum = (bill + tipSum) / noOfPeople

    formatView(tipAmountPerPerson, totalPerPersonSum)
  } else {
    tipAmountPerPerson = customTipInput.value/noOfPeople
    totalPerPersonSum  = (bill + Number(customTipInput.value))/noOfPeople

    formatView(tipAmountPerPerson, totalPerPersonSum)
  }
}

const formatView = (perPerson, total) => {
	if (isNaN(perPerson) || perPerson === Infinity) {
        tipAmount.innerHTML = '$0.00'
        tipTotal.innerHTML = '$0.00'
    } else {
		tipAmount.innerHTML = '$' + perPerson.toFixed(2)
        tipTotal.innerHTML = '$' + total.toFixed(2)
	}
}

const reset = () => {
    tipPercentValue = 0
    customTip = 0
    document.getElementById('numOfPeople').value = ""
    document.getElementById('billInput').value = ""
    tipAmount.innerHTML = ""
    tipTotal.innerHTML = ""
}

const test = () => {
    console.log('test')
}
//Event listeners
tipInput.forEach((item)=> {
    item.addEventListener('click', calculateTip)
})
billInput.addEventListener('input', calculateTip)
numOfPeople.addEventListener('input', calculateTip)

customTipInput.addEventListener('input', calculateTip)
resetBtn.addEventListener('click', reset)