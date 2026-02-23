// math.js — Math solver using jQuery

$(document).ready(function () {
  // Hide result on load
  $('#result').removeClass('show');

  // Handle form submission
  $('#mathForm').on('submit', function (e) {
    e.preventDefault();

    var a = parseFloat($('#firstNumber').val());
    var b = parseFloat($('#secondNumber').val());
    var op = $('#operator').val();

    var res;

    if (isNaN(a) || isNaN(b)) {
      res = 'Please enter valid numbers.';
    } else {
      switch (op) {
        case '+':
          res = a + b;
          break;
        case '-':
          res = a - b;
          break;
        case '*':
          res = a * b;
          break;
        case '/':
          res = b !== 0 ? a / b : 'Cannot divide by zero';
          break;
      }
    }

    $('#result').text('Result: ' + res).addClass('show');
  });
});
