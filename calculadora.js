

function insert(num) {
  let numero = document.getElementById ('display').innerHTML;
  document.getElementById('display').innerHTML = numero + num
}

function clean ()

{
  document.getElementById('display').innerHTML = ""
}
function back ()
{
  let display = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = display.substring(0, display.length -1);
}
function calculate()
{
  let display = document.getElementById('display').innerHTML;
  if(display)
  {
    document.getElementById('display').innerHTML = eval(display)
  }
  else{
    document.getElementById('diplay').innerHTML = "nada..."
  }
} 

document.addEventListener('keydown', function(event) {
  const tecla = event.key;
  const calculatorRegex = /[0-9+\-*/().]/;
  
  if(calculatorRegex.test(tecla)) {
    document.getElementById(tecla).focus();
    getValue(tecla)
  } else if (tecla === "Backspace") {
    document.getElementById("<").focus();
    back
  } else if (tecla === "=") {
    document.getElementById("=").focus();
    getResult();
  }
});