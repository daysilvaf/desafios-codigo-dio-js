DESCRIÇÃO
Você é um herói em um mundo mágico repleto de monstros e desafios. Sua missão agora é enfrentar inimigos e ganhar pontos de experiência (XP) para se tornar mais forte. A cada vitória, você ganha XP e se aproxima 
de se tornar um lendário campeão.

TAREFA
Escreva um programa simples que simule o ganho de XP após derrotar um monstro. O programa deve calcular e exibir a quantidade de XP ganhos com base no nível do monstro e na dificuldade da batalha.

CÁLCULO DO XP 
Para calcular a quantidade de XP ganhos, o programa precisa considerar o nível do monstro e a dificuldade da batalha. A fórmula num1 * num2 * 100 é usada para calcular essa quantidade com base nos valores fornecidos.

EXPLICAÇÃO
num1: Este é o nível do monstro. Quanto maior o nível do monstro, mais XP você ganhará ao derrotá-lo. Portanto, multiplicar o nível do monstro por um valor maior ajudará a refletir o aumento da recompensa de 
XP para monstros mais poderosos.
num2: Este é o valor da dificuldade da batalha, variando de 1 a 100. Quanto maior a dificuldade da batalha, mais XP você deve ganhar para enfrentar um desafio maior. Multiplicar pela dificuldade ajuda a ajustar 
a recompensa de XP com base na intensidade da batalha.
100: Este é o multiplicador constante que determina a escala geral de recompensa de XP. Multiplicar pelo nível do monstro e pela dificuldade aumenta a recompensa em 100 vezes o valor do nível e da dificuldade.

ENTRADA
O nível do monstro (um número inteiro).
A dificuldade da batalha, representada por um valor de 1 a 100 (um número inteiro).

SAÍDA
Imprima a quantidade de XP ganhos após a batalha.

EXEMPLOS
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

------------------------------------
| ENTRADA |         SAÍDA          | 
------------------------------------
|    45   | Voce ganhou 180000 XP! | 
|    40   |                        |
------------------------------------
|    41   | Voce ganhou 155800 XP! | 
|    38   |                        |
------------------------------------
|    15   |  Voce ganhou 30000 XP! | 
|    20   |                        |
------------------------------------

RESOLUÇÃO

// Lê o nível do monstro (num1)
let num1 = parseInt(gets());

// Lê a dificuldade da batalha (num2)
let num2 = parseInt(gets());

// Calcula o XP ganho
const xpGanho = num1 * num2 * 100;

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");
