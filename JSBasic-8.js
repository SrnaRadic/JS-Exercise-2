function MultiplyFunction() {
  var x = document.getElementById('1stNo').value;
  var y = document.getElementById('2ndNo').value;
  if (document.getElementById(('1stNo' && '2ndNo')).value == "") {
    document.getElementById('result').innerHTML = "You left some or all the fields empty"
  } else {
    document.getElementById('result').innerHTML = x*y;
  }
}

function DivideFunction() {
  var x = document.getElementById('1stNo').value;
  var y = document.getElementById('2ndNo').value;
  if (document.getElementById(('1stNo' && '2ndNo')).value == "") {
    document.getElementById('result').innerHTML = "You left some or all the fields empty"
  } else {
      document.getElementById('result').innerHTML = x/y;
  }
}

function SumFunction() {
  var x = document.getElementById('1stNo').value;
  var y = document.getElementById('2ndNo').value;
  var x1 = parseInt(x);
  var y1 = parseInt(y);
  if (document.getElementById(('1stNo' && '2ndNo')).value == "") {
    document.getElementById('result').innerHTML = "You left some or all the fields empty"
  } else {
      document.getElementById('result').innerHTML = x1+y1;
  }
}

function SubtractFunction() {
  var x = document.getElementById('1stNo').value;
  var y = document.getElementById('2ndNo').value;

    if (document.getElementById(('1stNo' && '2ndNo')).value == "") {
      document.getElementById('result').innerHTML = "You left some or all the fields empty"
    } else {
      document.getElementById('result').innerHTML = x-y;
    }
}
