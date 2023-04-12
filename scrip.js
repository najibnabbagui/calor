const $numSigns = [ ...document.querySelectorAll('.numbers, .sign')];
const $clearButton = document.querySelector('.clear');
const $calculatebutton = document.querySelector('.equals');
const $input = document.querySelector('#input');

let result = ""

$clearButton.addEventListener('click', clearResult)
$calculatebutton.addEventListener('click', calculateResult)

function clearResult() {
    result = ""
    $input.value = "0"
}

$numSigns.forEach(($numSigns)=>{
$numSigns.addEventListener('click', handlebuttonClick)
})
function handlebuttonClick(event) {
    const value = event.target.value;
    if ($input.value === 0  && value === 0) {
        return
    }
    if (result.length === 0) {
        $input.value = ""
        
    }

const operator = ['/', '*', '+', '-']
if (operator.includes(result[result.length - 1]) && operator.includes(value)) {
  $input.value = $input.value.replace(/.$/, value)  
  result.value = $input.value.replace(/.$/, value) 
  return
}
result += value;
$input.value += value ;
}
function calculateResult(){
    try{
        $input.value = eval (result)

    }catch (e){
        $input.value = "error"
        setTimeout(() =>{
        if (confirm("ghalat")) 
            clearResult()
            
        }, 1000 )
    }
}