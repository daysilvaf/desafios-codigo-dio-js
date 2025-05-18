DESAFIO
Dados dois números inteiros, A e B, quantos dígitos tem nm ?

EXEMPLOS
2 e 10 - 210 = 1024 - 4 dígitos
3 e 9 - 39 = 19683 - 5 dígitos

ENTRADA
A primeira linha tem um número inteiro E, representando a quantidade de casos de teste. As E linhas seguintes contém dois números inteiros A e B (1 <= A, B <= 100).

SAÍDA
Para cada caso de teste de entrada do seu programa, você deve imprimir um número inteiro contendo a quantidade de dígitos do resultado da potência calculada no 
respectivo caso de teste.

-----------------------------------------
| EXEMPLO DE ENTRADA | EXEMPLO DE SAÍDA |
|          4         |         1        |
|          1 1       |         4        |
|          2 10      |         5        |
|          3 9       |         201      |
|          100 100   |                  |
-----------------------------------------

RESOLUÇÃO

let C = parseInt(gets());

for (let i = 0; i < C; i++) {
    var input = gets().split(" ");
    let N = parseInt(input[0]);
    let M = parseInt(input[1]);
    let digitos = Math.floor(M * Math.log10(N) + 1);
    print(digitos);
}
