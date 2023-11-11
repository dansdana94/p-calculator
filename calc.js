let nums = document.querySelectorAll('.nums')
let input = document.querySelector('#input')
let clearbtn = document.querySelector('#clear')
let op1 = ''
let op2 = ''
let ope = ''

function operation(op1,ope,op2){
    if(ope === '+') {
        return(op1 + op2)
    }
    if(ope === '*') {
        return(op1 * op2)
    }
    if(ope === '-') {
        return(op1 - op2)
    }
    if(ope === '/') {
        return(op1 / op2)
    }
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


function display(){
    nums.forEach(num =>{
        num.addEventListener('click',()=>{
            input.value += num.id
        })
    })
}

clearbtn.addEventListener('click', (c)=>{
        c = location.reload()
})


storeVal()