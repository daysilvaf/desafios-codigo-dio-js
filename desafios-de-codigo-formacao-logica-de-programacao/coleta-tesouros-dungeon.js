DESCRIÇÃO
Sua missão é vasculhar as salas da masmorra em busca de recompensas lendárias e desafios perigosos. Cada sala pode conter monstros formidáveis, tesouros preciosos ou ambos. Use suas habilidades estratégicas para enfrentar as ameaças e coletar os tesouros!

TAREFA
Escreva um programa que simule sua jornada heróica pela masmorra. O programa deve percorrer cada sala e verificar se há tesouros ou monstros. Se você encontrar um tesouro, colecionará a recompensa. Se encontrar um monstro, terá que derrotá-lo para continuar.

ATENÇÃO
Em nossa resolução utilizamos a função.includes() do JavaScript para verificar se um número (representando a sala atual) está presente nos arrays salasComTesouro e salasComMonstro.

ENTRADA
O número total de salas no dungeon (um número inteiro).

SAÍDA
Sempre que encontrar um tesouro, imprima " Tesouro na sala X!".
Sempre que encontrar um monstro, imprima "Monstro na sala X!".

EXEMPLOS
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

--------------------------------
| ENTRADA |        SAÍDA       | 
--------------------------------
|    3    | Tesouro na sala 2! | 
|         | Monstro na sala 3! | 
--------------------------------
|    4    | Tesouro na sala 2! | 
|         | Monstro na sala 3! | 
|         | Tesouro na sala 4! |
--------------------------------
|    2    | Tesouro na sala 2! | 
--------------------------------

RESOLUÇÃO 

// Entrada de dados. Use a função parseInt() para converter a entrada de string para inteiro.
const totalSalas = parseInt(gets());

// Defina as salas com tesouros e monstros como arrays de números inteiros
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

// Loop para percorrer cada sala na masmorra
for (let sala = 1; sala <= totalSalas; sala++) {
    // Verifique se a sala atual tem um tesouro
    const temTesouro = salasComTesouro.includes(sala);
    // Verifique se a sala atual tem um monstro
    const temMonstro = salasComMonstro.includes(sala);

    // Verifique e imprima se há tesouro na sala
    if (temTesouro) {
        print(`Tesouro na sala ${sala}!`);
    }

    // Verifique e imprima se há monstro na sala
    if (temMonstro) {
        print(`Monstro na sala ${sala}!`);
    }
}
