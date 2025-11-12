

function sum(n1, n2){
   return n1 + n2;
}
function res(n1, n2){
    return n1 - n2
}

function mult( n1, n2){
    return n1 * n2;
}

function divi(n1, n2){
    return n1 / n2
}
const n1 = document.querySelector(".n1")
const n2 = document.querySelector(".n2")
const operador = ""
const numeros = document.querySelector(".numers");

function generateN(){
for( let i = 0; i < 10; i++){
    const n = document.createElement("div");
    n.style.flex = '1 0 30%'
    n.style.border = '1px solid black';
    n.style.height = '50px';
    n.style.fontSize = '25px';
    n.style.cursor = 'pointer';     
    n.style.display = 'flex'
    n.style.justifyContent = 'center'
    n.style.alignItems = 'center'
    n.style.userSelect = 'none'
    n.style.gap = '50px'
    n.style.borderRadius = '5px'
    numeros.appendChild(n)
    n.textContent = i
    
}

}
generateN()

function operate(n1, op, n2){
if (op === "+"){
    return n1 + n2;
    }
    else if (op === "-"){
        return n1 - n2;
    }
}