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

display()

