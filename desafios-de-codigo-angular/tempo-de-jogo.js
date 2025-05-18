DESAFIO
Tendo como base a hora inicial e final de um jogo, calcule a duração do dele, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de, 60 minutos e máxima de 24 horas.

ENTRADA
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

SAÍDA
Apresente a duração do jogo conforme exemplo abaixo.

------------------------------------------------
| EXEMPLO DE ENTRADA |     EXEMPLO DE SAÍDA    | 
------------------------------------------------
|        16 2        | O JOGO DUROU 10 HORA(S) |
------------------------------------------------
|        0 0         | O JOGO DUROU 24 HORA(S) | 
------------------------------------------------
|        2 16        | O JOGO DUROU 14 HORA(S) |
------------------------------------------------

RESOLUÇÃO

var line = gets().split(" ");

var hInicial = parseInt(line[0]);
var hFinal = parseInt(line[1]);

if (hInicial < hFinal) { 
    print('O JOGO DUROU ' + (hFinal - hInicial) + ' HORA(S)');
} else if (hInicial > hFinal) {
    print('O JOGO DUROU ' + (24 - (hInicial - hFinal)) + ' HORA(S)');
} else {
   print('O JOGO DUROU 24 HORA(S)');
}
