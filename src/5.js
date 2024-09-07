/*
Escreva um programa que inverta os caracteres de um string. 

IMPORTANTE: 
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
b) Evite usar funções prontas, como, por exemplo, reverse; 
*/

function questao5(string) {
    let invertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string[i];
    }
    console.log(`String: ${string}\nInvertida: ${invertida}`);
}

if (require.main === module) {
    const readline = require('node:readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question('Digite uma string: ', (s) => {
        questao5(s);
        rl.close();
    });
} else {
    module.exports = questao5;
}