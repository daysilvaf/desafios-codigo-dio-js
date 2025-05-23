DESCRIÇÃO
Você é um mestre construtor em um mundo de blocos e tem a tarefa de gerar biomas em diferentes regiões do mundo. Cada bioma tem características únicas, como tipos de solo, vegetação e clima.

TAREFA
Sua tarefa é coletar minérios enquanto ataca uma rocha com sua picareta. Use loops e lógica de programação para representar cada golpe na rocha e determinar qual minério foi obtido.

ENTRADA
O programa irá solicitar que você digite um número inteiro positivo representando a quantidade de golpes que você deseja dar com a picareta.

SAÍDA
Para cada golpe que você der, o programa exibirá uma mensagem indicando o resultado do golpe. Será mostrado o número do golpe e o minério obtido, que pode ser 1: Carvao, 2: Ferro, 3: Diamante e 4: Pedra.

EXEMPLOS
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

-------------------------
| ENTRADA |    SAÍDA    | 
-------------------------
|    4    | 1: Carvao   | 
|         | 2: Ferro    | 
|         | 3: Diamante | 
|         | 4: Pedra    | 
-------------------------
|    3    | 1: Carvao   |
|         | 2: Ferro    |
|         | 3: Diamante |
-------------------------
|    2    | 1: Carvao   |
|         | 2: Ferro    |
-------------------------

RESOLUÇÃO

// Lê a quantidade de golpes informada pelo usuário. 
const quantidadeGolpes = parseInt(gets());

// Defina os tipos de minerais. O índice 0 será ignorado para facilitar o uso do operador módulo.
let minerais = ["", "Carvao", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Usa módulo 4 (quantidade de tipos) para rotacionar entre os minerais de 1 a 4
  let minaIndex = i % 4;
  if (minaIndex === 0) minaIndex = 4;

  // Exibe o número do golpe e o mineral correspondente
  print(i + ": " + minerais[minaIndex]);
}
