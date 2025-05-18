DESAFIO
Neste problema, deve-se ler:
O código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1. O código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

ENTRADA
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

SAÍDA
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

-------------------------------------------
| EXEMPLOS DE ENTRADA | EXEMPLOS DE SAÍDA |
-------------------------------------------
|      12 1 5.30      |   VALOR A PAGAR:  |
|      16 2 5.10      |      R$ 15.50     |
-------------------------------------------
|      13 2 15.30     |   VALOR A PAGAR:  |
|      161 4 5.20     |      R$ 51.40     |
-------------------------------------------
|      1 1 15.10      |   VALOR A PAGAR:  |
|      2 1 15.10      |      R$ 30.20     |
-------------------------------------------

RESOLUÇÃO

let valores1 = gets().split(" ");
let valores2 = gets().split(" ");

let codigo1 = parseInt(valores1[0]);
let numero1 = parseInt(valores1[1]);
let valorUnitario1 = parseFloat(valores1[2]);

let codigo2 = parseInt(valores2[0]);
let numero2 = parseInt(valores2[1]);
let valorUnitario2 = parseFloat(valores2[2]);

// Calcula o valor total a ser pago
let valorTotal = (numero1 * valorUnitario1) + (numero2 * valorUnitario2);

print('VALOR A PAGAR: R$ ' + valorTotal.toFixed(2));
