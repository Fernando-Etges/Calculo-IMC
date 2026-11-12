const form = document.getElementById("form");
const inputName = document.getElementById("nome");
const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const resultado = document.getElementById("resultado");

function calcularIMC(peso, altura) {
    const alturaEmMetros = altura / 100;
    return peso / (alturaEmMetros * alturaEmMetros);
}

function classificarIMC(imc) {
    let classificacao =""

     if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }
        return classificacao;
    }

function calcularDiferencaPeso(imc, peso, altura) {
    const alturaEmMetros = altura / 100;

    let diferenca = "Você está dentro da faixa de peso adequada.";
    
    if (imc > 24.9) {
        const pesoIdeal = 24.9 * (alturaEmMetros * alturaEmMetros);
        const pesoAperder = peso - pesoIdeal;
        diferenca = `Você precisa perder ${pesoAperder.toFixed(2)} kg para atingir o IMC ideal.`;

    } else if (imc < 18.5) {
        const pesoIdeal = 18.5 * (alturaEmMetros * alturaEmMetros);
        const pesoGanhar = pesoIdeal - peso;
        diferenca = `Você precisa ganhar ${pesoGanhar.toFixed(2)} kg para atingir o IMC ideal.`;
        
    } return diferenca
}

    form.addEventListener("submit", (event) => {
    event.preventDefault();

    const altReal = parseFloat(inputAltura.value);
    const pesoReal = parseFloat(inputPeso.value);
    
        if (Number.isNaN(pesoReal) || Number.isNaN(altReal)) {
            resultado.innerText = "Digite valores numéricos.";
        return;
        }
        
        if (pesoReal <= 0 || altReal <= 0) {
            resultado.innerText = "Digite um valor válido";
        return;
        }

    const imc = calcularIMC(pesoReal, altReal);
    const classificacao = classificarIMC(imc);
    const diferenca = calcularDiferencaPeso(imc,pesoReal,altReal)

    resultado.innerText =
        `Olá, ${inputName.value}!
Seu IMC é ${imc.toFixed(2)}.
Classificação: ${classificacao}.
${diferenca}`;
});

