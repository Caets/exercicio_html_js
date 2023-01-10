const form = document.getElementById('formulario');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');

function compararNumeros(numeroA, numeroB){
	return numeroB.valueAsNumber > numeroA.valueAsNumber
}

const mensagemSucesso = 'Parabéns, o número B é maior que o número A';
const erro = 'Incorreto, o número B precisa ser maior que o número A'

form.addEventListener('submit', function(e) {
    e.preventDefault();

let testeNumeros = compararNumeros(numeroA, numeroB) 

if (testeNumeros) {
    alert(mensagemSucesso)
} else {
    alert(erro)
}
});