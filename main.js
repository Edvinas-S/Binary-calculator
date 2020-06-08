"use strict"

const DOMres = document.querySelector('.result');

const DOMbtn0 = document.getElementById('btn0');
const DOMbtn1 = document.getElementById('btn1');
const DOMbtnSum = document.getElementById('btnSum');
const DOMbtnSub = document.getElementById('btnSub');
const DOMbtnMul = document.getElementById('btnMul');
const DOMbtnDiv = document.getElementById('btnDiv');

function enter0() {
  DOMres.innerHTML += DOMbtn0.innerHTML;
}
function enter1() {
  DOMres.innerHTML += DOMbtn1.innerHTML;
}
function enterSum() {
  DOMres.innerHTML += DOMbtnSum.innerHTML;
}
function enterSub() {
  DOMres.innerHTML += DOMbtnSub.innerHTML;
}
function enterMul() {
  DOMres.innerHTML += DOMbtnMul.innerHTML;
}
function enterDiv() {
  DOMres.innerHTML += DOMbtnDiv.innerHTML;
}


function clr() {
  DOMres.innerHTML = '';
}

function equal() {
  let operands = DOMres.innerHTML.split(/[\+\-\*\/]/);
  if (DOMres.innerHTML.indexOf('+') !== -1) {
    DOMres.innerHTML = (
      Math.floor(
          eval(parseInt(operands[0], 2)
          + parseInt(operands[1], 2)
          )
      )
    ).toString(2);
  } else if (DOMres.innerHTML.indexOf('-') !== -1) {
    DOMres.innerHTML = (
      Math.floor(
          eval(parseInt(operands[0], 2)
          - parseInt(operands[1], 2)
          )
      )
    ).toString(2);
  } else if (DOMres.innerHTML.indexOf('*') !== -1) {
    DOMres.innerHTML = (
      Math.floor(
          eval(parseInt(operands[0], 2)
          * parseInt(operands[1], 2)
          )
      )
    ).toString(2);
  } else if (DOMres.innerHTML.indexOf('/') !== -1) {
    DOMres.innerHTML = (
      Math.floor(
          eval(parseInt(operands[0], 2)
          / parseInt(operands[1], 2)
          )
      )
    ).toString(2);
  }
  else {DOMres.innerHTML = 'Error :)'}
}