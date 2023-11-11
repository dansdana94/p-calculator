let nums = document.querySelectorAll('.nums');
let input = document.querySelector('#input');
let clearBtn = document.querySelector('#clear');
let equalsBtn = document.querySelector('#equals');
let op1 = '';
let op2 = '';
let operator = '';

function operate(op1, operator, op2) {
  op1 = parseFloat(op1);
  op2 = parseFloat(op2);

  if (operator === '+') {
    return op1 + op2;
  }
  if (operator === '*') {
    return op1 * op2;
  }
  if (operator === '-') {
    return op1 - op2;
  }
  if (operator === '/') {
    if (op2 === 0) {
      return 'Error';
    }
    return op1 / op2;
  }
}

function display() {
  nums.forEach(num => {
    num.addEventListener('click', () => {
      if (operator === '') {
        op1 += num.id;
      } else {
        op2 += num.id;
      }
      input.value += num.id;
    });
  });
}

clearBtn.addEventListener('click', () => {
  input.value = '';
  op1 = '';
  op2 = '';
  operator = '';
});

equalsBtn.addEventListener('click', () => {
  if (op1 !== '' && op2 !== '' && operator !== '') {
    const result = operate(op1, operator, op2);
    input.value = result;
    op1 = result.toString();
    op2 = '';
    operator = '';
  }
});

display();
