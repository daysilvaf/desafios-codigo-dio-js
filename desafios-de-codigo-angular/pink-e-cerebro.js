DESAFIO
Pink e Cérebro dividem um apartamento e estão juntos 24h por dia desde o começo da pandemia. Para passar o temp, Pink cria problemas matemáticos para Cérebro resolver, o último deles foi uma lista de números com a 
seguinte pergunta: quantos números da lista são múltiplos de 2, 3, 4 e 5? Apesar de parecer simples, porém, quando a lista contém muitos números, Cérebro se confunde e acaba errando alguns cálculos.
Ajude Cérebro a resolver o desadio de Pink.

ENTRADA
A primeira linha da entrada consiste em um inteiro N (1 ≤ N ≤1000), representando a quantidade de números na lista de Pink.
A segunda linha contém N inteiros Li (1 ≤ Li ≤ 100), representando os números da lista de Pink.

SAÍDA
Imprima a quantidade de números múltiplos de 2, 3, 4 e 5 presentes na lista. Observe a formatação da saída nos exemplos, pois ela deve ser seguida rigorosamente.

-------------------------------------------
| EXEMPLO DE ENTRADA |  EXEMPLO DE SAÍDA  |
|          5         | 4 Multiplo(s) de 2 |
|     2 5 4 20 10    | 0 Multiplo(s) de 3 |
|                    | 2 Multiplo(s) de 4 |
|                    | 3 Multiplo(s) de 5 |
-------------------------------------------

RESOLUÇÃO

let N = parseInt(gets());
let numeros = gets().split(" ").map(num => parseInt(num));
let multiplos = 0;

for (let i = 2; i < 6; i++) {
    numeros.forEach(numero => {
        if (numero % i === 0) {
            multiplos++;
        }
    })
    print(`${multiplos} Multiplo(s) de ${i}`);
    multiplos = 0;
}
