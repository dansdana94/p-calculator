let nums = document.querySelectorAll('.nums')
let input = document.querySelector('#input')
let clearbtn = document.querySelector('#clear')
let oper = document.querySelectorAll('.oper')
let equalsBtn = document.querySelector('#equalsBtn')
let op1 = ''
let op2 = ''
let ope = ''

/* function to perform a mathematical calculation */
function operate(op1,ope,op2){
  op1 = parseFloat(op1)
  op2 = parseFloat(op2)
      switch(ope){
        case '+': return(op1 + op2)
        break;
        case '-': return(op1 - op2)
        break;
        case '*': return(op1 * op2)
        break;
        case '/': return(op1 / op2)
        break;
      }
}

/* functio to display content on the input based on user selection */
function display(){
  nums.forEach(no =>{
    no.addEventListener('click',()=>{
    return input.textContent +=(`${no.id}`)
    })
  })
 /* oper.forEach(op =>{
    op.addEventListener('click',()=>{
      return input.textContent +=(`${op.id}`)
    })
  }) */
}

/* function to store input in variable */
function storeVal(){
  let d = ''
  nums.forEach(no =>{
    no.addEventListener('click',()=>{
      d = no.id; console.log(d)
        if(d == '+' || d == '-' || d == '*' || d == '/'){
           ope = d
        }
        else if(ope != ''){op2 += d}
        else{op1 += d}
        console.log(op1)
        console.log(ope)
        console.log(op2)
      
    })
  })
}

/* alt function to store value using screen input */
function storeVal2(){
  display()
  let n = '';
  let o = '';
  
   oper.forEach(op =>{
    op.addEventListener('click', ()=>{
          n = input.textContent; input.textContent = ''; 
          o = op.id; console.log(n);  ope = o;
        if(op1 == ''){
          op1 = n
        } else if(op1 != ''){op2 = n}
       
       
    })
   })
}

/* function to run the calculator */
function calc(){
  storeVal2()
  let result = equalsBtn.addEventListener('click',()=>{
        op2 = input.textContent;
        input.textContent=(`${operate(op1,ope,op2)}`)
        console.log(op1)
        console.log(ope)
        console.log(op2)
  })
}

clearbtn.addEventListener('click',(r)=>{
  r = location.reload();
  ope = '';
  op1 = ''
  op2 = ''
})
// code still has some kinks that you will need to iron out, lookup the odin projects
// calculator page to find out the issues and fix thems
calc()