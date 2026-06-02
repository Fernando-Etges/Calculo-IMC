const form = document.getElementById("form");
const inputName = document.getElementById("nome");
const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const altReal = parseFloat(inputAltura.value);
    const pesoReal = parseFloat(inputPeso.value);

    const alturaEmMetros = altReal / 100;

    const imc = pesoReal / (alturaEmMetros * alturaEmMetros);

    let classificacao = "";

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

    let diferenca = "Você está dentro da faixa considerada normal.";

    if (imc > 24.9) {
        const pesoIdeal = 24.9 * (alturaEmMetros * alturaEmMetros);
        const pesoAperder = pesoReal - pesoIdeal;

        diferenca = `Você precisa perder ${pesoAperder.toFixed(2)} kg para atingir o IMC ideal.`;
    } else if (imc < 18.5) {
        const pesoIdeal = 18.5 * (alturaEmMetros * alturaEmMetros);
        const pesoGanhar = pesoIdeal - pesoReal;

        diferenca = `Você precisa ganhar ${pesoGanhar.toFixed(2)} kg para atingir o IMC ideal.`;
    }

    resultado.innerText =
        `Olá, ${inputName.value}!
Seu IMC é ${imc.toFixed(2)}.
Classificação: ${classificacao}.
${diferenca}`;
});