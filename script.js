function sum(n1, n2) {
  return n1 + n2;
}
function res(n1, n2) {
  return n1 - n2;
}

function mult(n1, n2) {
  return n1 * n2;
}

function divi(n1, n2) {
  return n1 / n2;
}
let n1 = "";
let n2 = "";
let operador = "";

const numeros = document.querySelector(".numers");
const display = document.querySelector(".pantalla");
const operadores = document.querySelector(".oper");
const dispn1 = document.querySelector(".pn1");
const dispn2 = document.querySelector(".pn2");
const disop = document.querySelector(".pop");
function generateN() {
  const retro = document.createElement("div");
  retro.style.flex = "1 0 30%";
  retro.style.border = "1px solid #9c9c9c";
  retro.style.height = "50px";
  retro.style.fontSize = "25px";
  retro.style.cursor = "pointer";
  retro.style.display = "flex";
  retro.style.justifyContent = "center";
  retro.style.alignItems = "center";
  retro.style.userSelect = "none";
  retro.style.gap = "50px";
  retro.style.borderRadius = "5px";
  retro.style.backgroundColor = "#FFCC00";
  retro.style.color = "#333333";
  numeros.appendChild(retro);
  retro.textContent = "←";
  const punto = document.createElement("div");
  punto.textContent = ".";
  punto.style.flex = "1 0 30%";
  punto.style.border = "1px solid #9c9c9c";
  punto.style.height = "50px";
  punto.style.fontSize = "25px";
  punto.style.cursor = "pointer";
  punto.style.display = "flex";
  punto.style.justifyContent = "center";
  punto.style.alignItems = "center";
  punto.style.userSelect = "none";
  punto.style.borderRadius = "5px";
  punto.style.backgroundColor = "#FAFAFA";
  punto.style.color = "#333333";
  numeros.appendChild(punto);
  for (let i = 0; i < 10; i++) {
    const n = document.createElement("div");
    n.style.flex = "1 0 30%";
    n.style.border = "1px solid #9c9c9c";
    n.style.height = "50px";
    n.style.fontSize = "25px";
    n.style.cursor = "pointer";
    n.style.display = "flex";
    n.style.justifyContent = "center";
    n.style.alignItems = "center";
    n.style.userSelect = "none";
    n.style.gap = "50px";
    n.style.borderRadius = "5px";
    n.style.backgroundColor = "#FAFAFA";
    n.style.color = "#333333";

    numeros.appendChild(n);
    n.textContent = i;
  }
  retro.addEventListener("click", () => {
    borrar();
  });
  numeros.addEventListener("click", (e) => {
    const valor = e.target.textContent;
    if (valor === ".") {
      agregarPunto();
      return;
    }
    if (!isNaN(valor)) {
      if (operador === "") {
        n1 += valor;
        dispn1.textContent = n1;
      } else {
        n2 += valor;
        dispn2.textContent = n2;
      }
    }
  });
}
function operate(operador) {
  console.log(operador);

  switch (operador) {
    case "+":
      return sum(Number(n1), Number(n2));
      break;
    case "-":
      return res(Number(n1), Number(n2));
      break;
    case "*":
      return mult(Number(n1), Number(n2));
      break;
    case "/":
      return divi(Number(n1), Number(n2));
      break;
  }
}
function agregarPunto() {
  if (operador === "") {
    if (n1 === "" || n1.includes(".")) return;
    n1 += ".";
    dispn1.textContent = n1;
  } else {
    if (n2 === "" || n2.includes(".")) return;
    n2 += ".";
    dispn2.textContent = n2;
  }
}

function borrar() {
  if (operador === "") {
    n1 = n1.slice(0, -1);
    dispn1.textContent = n1;
  } else {
    if (n2 !== "") {
      n2 = n2.slice(0, -1);
      dispn2.textContent = n1;
    } else {
      operador = "";
      disop.textContent = "";
    }
  }
}
function keyOperador(opValue) {
  if (operador === "/" && Number(n2) === 0) {
    alert("No se puede dividir por cero (0)");
    n2 = "";
    dispn2.textContent = "";
    return null;
  } else if (["+", "-", "*", "/"].includes(opValue)) {
    if (n1 !== "" && n2 !== "" && operador !== "") {
      let resultado = operate(operador);
      dispn1.textContent = resultado;
      dispn2.textContent = "";
      n1 = resultado.toString();
      n2 = "";
    }
    operador = opValue;
    disop.textContent = operador;
  } else if (opValue === "=") {
    if (n1 !== "" && n2 !== "" && operador !== "") {
      let resultado = operate(operador);
      console.log(operador);
      operate(operador);
      dispn1.textContent = resultado;
      n1 = resultado.toString();
      n2 = "";
      operador = "";
      dispn2.textContent = "";
      disop.textContent = "";
    }
  } else if (opValue === "C") {
    n1 = "";
    n2 = "";
    operador = "";
    dispn1.textContent = "";
    dispn2.textContent = "";
    disop.textContent = "";
  }
}
operadores.addEventListener("click", (e) => {
  keyOperador(e.target.textContent);
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (!isNaN(key) || key === ".") {
    if (key === ".") {
      agregarPunto();
    } else if (!isNaN(key)) {
      if (operador === "") {
        n1 += key;
        dispn1.textContent = n1;
      } else {
        n2 += key;
        dispn2.textContent = n2;
      }
    }
  } else if (
    ["+", "-", "*", "/"].includes(key) ||
    key === "=" ||
    key === "Enter"
  ) {
    if (key === "Enter") {
      e.preventDefault();
      keyOperador("=");
    } else {
      keyOperador(key);
    }
  } else if (key === "Backspace") {
    e.preventDefault();
    borrar();
  } else if (key === "Escape" || key === "c" || key === "C") {
    keyOperador("C");
  }
});
generateN();
