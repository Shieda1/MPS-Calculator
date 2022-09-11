// https://www.omnicalculator.com/finance/mps
// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const MPSRadio = document.getElementById('MPSRadio');
const increaseindisposableincomeRadio = document.getElementById('increaseindisposableincomeRadio');
const increaseinconsumersavingsRadio = document.getElementById('increaseinconsumersavingsRadio');

let MPS;
let increaseindisposableincome = v1;
let increaseinconsumersavings = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

MPSRadio.addEventListener('click', function() {
  variable1.textContent = 'Increase in disposable income';
  variable2.textContent = 'Increase in consumer savings';
  increaseindisposableincome = v1;
  increaseinconsumersavings = v2;
  result.textContent = '';
});

increaseindisposableincomeRadio.addEventListener('click', function() {
  variable1.textContent = 'MPS';
  variable2.textContent = 'Increase in consumer savings';
  MPS = v1;
  increaseinconsumersavings = v2;
  result.textContent = '';
});

increaseinconsumersavingsRadio.addEventListener('click', function() {
  variable1.textContent = 'MPS';
  variable2.textContent = 'Increase in disposable income';
  MPS = v1;
  increaseindisposableincome = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(MPSRadio.checked)
    result.textContent = `MPS = ${computeMPS().toFixed(2)}`;

  else if(increaseindisposableincomeRadio.checked)
    result.textContent = `Increase in disposable income = ${computeincreaseindisposableincome().toFixed(2)}`;

  else if(increaseinconsumersavingsRadio.checked)
    result.textContent = `Increase in consumer savings = ${computeincreaseinconsumersavings().toFixed(2)}`;
})

// MPS = 1 − (increaseinconsumersavings / increaseindisposableincome)

// calculation

function computeMPS() {
  return 1 - (Number(increaseinconsumersavings.value) / Number(increaseindisposableincome.value));
}

function computeincreaseindisposableincome() {
  return Number(increaseinconsumersavings.value) / (1 - Number(increaseinconsumersavings.value));
}

function computeincreaseinconsumersavings() {
  return (1 - Number(increaseinconsumersavings.value)) * Number(increaseindisposableincome.value);
}