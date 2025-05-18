DESAFIO
Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem 
(x = y = 0).
Se o ponto estiver na origem, escreva a mensagem “Origem”.
Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

ENTRADA
A entrada contem as coordenadas de um ponto.

SAÍDA
A saída deve apresentar o quadrante em que o ponto se encontra.

-----------------------------------------
| EXEMPLO DE ENTRADA | EXEMPLO DE SAÍDA |
-----------------------------------------
|      4.5 -2.2      |        Q4        |
-----------------------------------------
|       0.1 0.1      |        Q1        |
-----------------------------------------
|       0.0 0.0      |      Origem      |
-----------------------------------------

RESOLUÇÃO

var line = gets().split(" ");
let X = parseFloat(line[0]);
let Y = parseFloat(line[1]);

// Verificação do quadrante em que o ponto se encontra
if (X === 0 && Y === 0) {
  print("Origem");
} else if (X === 0 && Y !== 0) {
  print("Eixo Y");
} else if (X !== 0 && Y === 0) {
  print("Eixo X");
} else if (X > 0 && Y > 0) {
  print("Q1");
} else if (X < 0 && Y > 0) {
  print("Q2");
} else if (X < 0 && Y < 0) {
  print("Q3");
} else if (X > 0 && Y < 0) {
  print("Q4");
}
