var prompt = require("prompt-sync")();

var num = Number(prompt("Número: "));

var resposta = "";

for (var i = 2; i <= num - 2; i = i + 2) {
    resposta = resposta + i + ", ";
}

resposta = resposta + i;

console.log(`Pares entre 1 e ${num}: ${resposta}`);
