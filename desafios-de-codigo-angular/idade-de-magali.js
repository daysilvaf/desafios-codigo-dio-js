DESAFIO
Magali é mãe de três filhos que têm idades diferentes. Ela notou que, neste ano, a soma das idades dos seus três filhos é igual à idade dela. Neste problema, dada a idade de Magali e as idades de dois dos filhos, 
seu programa deve computar e imprimir a idade do filho mais velho. Por exemplo, se sabemos que Magali tem 52 anos e as idades conhecidas de dois dos filhos são 14 e 18 anos, então a idade do outro filho, que não
era conhecida, tem que ser 20 anos, pois a soma das três idades tem que ser 52. Portanto, a idade do filho mais velho é 20. Em mais um exemplo, se Magali tem 47 anos e as idades de dois dos filhos são 21 e 9 anos,
então o outro filho tem que ter 17 anos e, portanto, a idade do filho mais velho é 21.

ENTRADA
A primeira linha da entrada contém um inteiro M representando a idade de Magali. A segunda linha da entrada contém um inteiro A representando a idade de um dos filhos. 
A terceira linha da entrada contém um inteiro B representando a idade de outro filho.

SAÍDA
Seu programa deve imprimir uma linha, contendo um número inteiro, representando a idade do filho mais velho de Magali.

RESTRIÇÕES
• 40 ≤ M ≤ 110
• 1 ≤ A < M
• 1 ≤ B < M
• A ≠ B

-------------------------------------------
| EXEMPLOS DE ENTRADA | EXEMPLOS DE SAÍDA |
-------------------------------------------
|          52         |          20       |
|          14         |                   |
|          18         |                   |
-------------------------------------------
|          47         |          21       |
|          21         |                   |
|           9         |                   |
-------------------------------------------

RESOLUÇÃO

let M = parseInt(gets());
let A = parseInt(gets());
let B = parseInt(gets());

// Cálculo da idade do filho mais velho
let C = M - A - B;

// Verificação para encontrar a idade do filho mais velho
let res = A;
if (res < B) res = B;
if (res < C) res = C;

print(res);
