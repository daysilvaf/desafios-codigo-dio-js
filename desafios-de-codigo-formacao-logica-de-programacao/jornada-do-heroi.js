DESCRIÇÃO
Você é um jovem herói que embarca em uma jornada épica para derrotar o temido dragão que aterroriza o reino. No entanto, você precisa atravessar uma floresta perigosa para chegar à caverna do dragão. Cada passo é crucial, e sua jornada será determinada 
pela lógica afiada que você possuir.
Tarefa: Escreva um algoritmo que simule a jornada do herói pela floresta. O herói começa em uma posição inicial e deve dar uma série de passos para atravessar a floresta até a caverna do dragão.

ENTRADA
A posição inicial do herói na floresta (um número inteiro).
O número total de passos que o herói deve dar (um número inteiro).

SAÍDA
Imprima a posição final do herói após dar a quantidade de passos especificada.

EXEMPLOS
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

----------------------------------------
| ENTRADA |            SAÍDA           | 
----------------------------------------
|    2    |  Posicao final do heroi: 5 | 
|    3    |                            |
----------------------------------------
|    15   | Posicao final do heroi: 18 | 
|    3    |                            |
----------------------------------------
|    10   | Posicao final do heroi: 16 | 
|    6    |                            |
----------------------------------------

RESOLUÇÃO

// Lê a posição inicial do herói
const posicaoInicial = parseInt(gets());

// Lê o total de passos que o herói dará
const totalPassos = parseInt(gets());

// Calcula a posição final do herói
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
print("Posicao final do heroi: " + posicaoFinal);
