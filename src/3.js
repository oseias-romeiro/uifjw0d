/*
Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: 
* O menor valor de faturamento ocorrido em um dia do mês; 
* O maior valor de faturamento ocorrido em um dia do mês; 
* Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 

IMPORTANTE: 
a) Usar o json disponível como fonte dos dados do faturamento mensal; 
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/
let faturmentos = require('./faturamentos.json');

let faturmentos_setembro = [];
let date;
for (let date_str in faturmentos) {
    date = new Date(date_str);
    if (date.getMonth() == 8 && // setembro
        date.getDay() != 5 && date.getDay() != 6 // ignora finais de semana
    ) {
        faturmentos_setembro.push(faturmentos[date_str]);
    }
}

function questao3() {
    const dias = faturmentos_setembro.length;
    let menor = faturmentos_setembro[0];
    let maior = faturmentos_setembro[0];
    let soma = 0;
    let diasAcimaDaMedia = 0;
    for (let i = 0; i < dias; i++) {
        if (faturmentos_setembro[i] < menor) {
            menor = faturmentos_setembro[i];
        }
        if (faturmentos_setembro[i] > maior) {
            maior = faturmentos_setembro[i];
        }
        if (faturmentos_setembro[i] > 0) {
            soma += faturmentos_setembro[i];
        }
    }
    const media = soma / dias;
    for (let i = 0; i < dias; i++) {
        if (faturmentos_setembro[i] > media) {
            diasAcimaDaMedia++;
        }
    }
    console.log(`
        Menor valor de faturamento: ${menor}
        Maior valor de faturamento: ${maior}
        Número de dias acima da média: ${diasAcimaDaMedia}
    `);
}

if (require.main === module) {
    questao3();
}else {
    module.exports = questao3;
}
