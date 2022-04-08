var prompt = require("prompt-sync")();

let resposta = "";

var i = 0;

while (true) {
    var num = (Number(prompt(`${i + 1}º Número: `)));
    i++;
    if (num == 0) {
        break;
    }
    if (num > 100 && num % 2 !== 0) {
        resposta += num + ', ';
    }
}

if (resposta !== '') {
    console.log(`Números impares maiores que 100: ${resposta}`);
} else {
    console.log(`Obs.: Nenhum número impar maior que 100.`);
}