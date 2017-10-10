function MultiplyFunction() {
  var x = parseFloat(document.getElementById('1stNo').value);
  var y = parseFloat(document.getElementById('2ndNo').value);
  if (isNaN(x) || isNaN(y)) {
    document.getElementById('result').innerHTML = "You left some or all the fields empty"
  } else {
    document.getElementById('result').innerHTML = x*y;
  }
}

function DivideFunction() {
  var x = parseFloat(document.getElementById('1stNo').value);
  var y = parseFloat(document.getElementById('2ndNo').value);
  if (isNaN(x) || isNaN(y)) {
    document.getElementById('result').innerHTML = "You left some or all the fields empty"
  } else {
    document.getElementById('result').innerHTML = x/y;
  }
}

function SumFunction() {
  var x = parseFloat(document.getElementById('1stNo').value);
  var y = parseFloat(document.getElementById('2ndNo').value);
  if (isNaN(x) || isNaN(y)) {
    document.getElementById('result').innerHTML = "You left some or all the fields empty"
  } else {
    document.getElementById('result').innerHTML = x+y;
  }
}

function SubtractFunction() {
  var x = parseFloat(document.getElementById('1stNo').value);
  var y = parseFloat(document.getElementById('2ndNo').value);
  if (isNaN(x) || isNaN(y)) {
    document.getElementById('result').innerHTML = "You left some or all the fields empty"
  } else {
    document.getElementById('result').innerHTML = x-y;
  }
}
