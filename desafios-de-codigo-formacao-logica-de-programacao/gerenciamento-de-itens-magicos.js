DESCRIÇÃO
Você é um aventureiro em um mundo mágico cheio de perigos e monstros. Durante suas missões, você coleta diversos itens mágicos, cada um com seus próprios atributos e habilidades especiais. Agora, você está desenvolvendo um sistema aprimorado 
para gerenciar esses itens. Neste novo sistema, você pode criar diferentes tipos de itens mágicos, como armas, armaduras, poções, entre outros. Cada tipo de item terá atributos específicos e contribuirá de maneiras únicas para suas aventuras.

TAREFA
Crie um objeto que represente um item mágico personalizado. O objeto deve ter atributos como tipo de item, dano e resistência, de acordo com o tipo escolhido. Além disso, crie uma função que calcule o dano causado por um item durante um combate, 
levando em consideração o tipo de item.

ENTRADA
Peça ao usuário para digitar o tipo do item mágico que deseja criar, o dano e a resistência

SAÍDA
Imprima o tipo do item, o dano, a resistência e o dano em combate.
Use a função de cálculo de dano para imprimir o dano causado por esse item em um combate simulado. Quando o tipo do item for igual a 'arma' deve-se multiplicar o dano por dois this.dano * 2 e quando não for arma, é retornado no dano this.dano.

EXEMPLOS
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis. 

----------------------------------
| ENTRADA |        SAÍDA         | 
|  Espada |     Tipo: Espada     | 
|   200   |       Dano: 200      | 
|   300   |   Resistencia: 300   | 
|         | Dano em combate: 200 | 
----------------------------------
| Cajado  |     Tipo: Cajado     | 
|   600   |       Dano: 600      | 
|   800   |   Resistencia: 800   | 
|         | Dano em combate: 600 | 
----------------------------------
| Arco    |     Tipo: Arco       | 
|   900   |       Dano: 900      | 
|   500   |   Resistencia: 500   | 
|         | Dano em combate: 900 | 
----------------------------------

RESOLUÇÃO

// Definição da classe ItemMagico
class ItemMagico {
  // Construtor que recebe tipo, dano e resistência
  constructor(tipo, dano, resistencia) {
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
  }

  // Função que calcula o dano de combate com base no tipo
  calcularDano() {
    return this.tipo.toLowerCase() === 'arma' ? this.dano * 2 : this.dano;
  }
}

// Entradas: tipo, dano e resistência
const tipoItem = gets();
const danoItem = parseInt(gets());
const resistenciaItem = parseInt(gets());

// Criação do objeto com os dados fornecidos
const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// Impressão das informações do item
print("Tipo: " + itemPersonalizado.tipo);
print("Dano: " + itemPersonalizado.dano);
print("Resistencia: " + itemPersonalizado.resistencia);

// Cálculo e exibição do dano de combate
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);
