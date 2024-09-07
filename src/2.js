/*
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; 
*/

function questao2(numero) {
    let a = 0, b = 1, c = 0;
    let pertence = false;
    while (c < numero) {
        c = a + b;
        a = b;
        b = c;
    }
    if (c === numero) {
        pertence = true;
    }
    console.log(`O número ${numero} ${pertence ? 'PERTENCE' : 'NÃO PERTENCE'} a sequência de Fibonacci`);
}

if (require.main === module) {
    const readline = require('node:readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Digite um número: ', (n) => {
        n = parseInt(n);
        if (isNaN(n)) {
            console.log('Digite um número válido');
            rl.close();
            return;
        }
        questao2(n);
        rl.close();
    });
}else {
    module.exports = questao2;
}
