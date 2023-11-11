let nums = document.querySelectorAll('.nums')
let input = document.querySelector('#input')
let clearbtn = document.querySelector('#clear')
let equalsBtn = document.querySelector('#equalsBtn')
let op1 = ''
let op2 = ''
let ope = ''

function operation(op1,ope,op2){
    op1 = parseFloat(op1);
    op2 = parseFloat(op2);

    if(ope === '+') {
        input.value = (op1 + op2)
    }
    if(ope === '*') {
        input.value =(op1 * op2)
    }
    if(ope === '-') {
        input.value = (op1 - op2)
    }
    if(ope === '/') {
        input.value(op1 / op2)
    }
}

function display(){
    nums.forEach(num =>{
        num.addEventListener('click',()=>{
            input.value += num.id
        })
    })
}

function storeVal(){
    let e = '';
    nums.forEach(num =>{
        num.addEventListener('click', ()=>{
            e = num.id;
            if (e == '+' || e == '-' || e === '/' || e == '*'){
                ope = e
            }
            else if (ope != ''){
                op2 += e
            } else {
                op1 += e
            }
        })
    })
}

function calc(){
  display()
  storeVal()
  let result = equalsBtn.addEventListener('click',()=>{
        operation(op1,ope,op2)
 })
}


clearbtn.addEventListener('click', (c)=>{
        c = location.reload()
        input.value = ''
})

calc()
