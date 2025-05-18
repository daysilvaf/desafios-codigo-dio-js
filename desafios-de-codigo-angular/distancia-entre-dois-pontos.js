DESAFIO
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais 
após a vírgula.

ENTRADA
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

SAÍDA
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.

-------------------------------------------
| EXEMPLOS DE ENTRADA | EXEMPLOS DE SAÍDA |
-------------------------------------------
|       1.0 7.0       |      4.4721       | 
|       5.0 9.0       |                   |
-------------------------------------------
|       -2.5 0.4      |      16.1484      | 
|       12.1 7.3      |                   |
-------------------------------------------
|       2.5 -0.4      |      16.4575      | 
|       -12.2 7.0     |                   |
-------------------------------------------

RESOLUÇÃO

let p1 = gets().split(" ");
let p2 = gets().split(" ");

let x1 = parseFloat(p1[0]);
let y1 = parseFloat(p1[1]);
let x2 = parseFloat(p2[0]);
let y2 = parseFloat(p2[1]);

// Calcula a distância euclidiana entre os pontos
let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

print(distancia.toFixed(4));
