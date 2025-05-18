DESCRIÇÃO
Imagine um universo onde você é um Mestre Pokémon com o poder de criar novas criaturas através da combinação de nomes. Seu algoritmo é a chave para dar vida a esses seres incríveis. Você receberá uma primeira parte do nome de um Pokémon e sua tarefa é completá-la com o sufixo mágico adequado, revelando o nome completo do Pokémon.

TAREFA
Sua missão é criar uma função extraordinária chamada combinarNomePokemon. Essa função possui um toque mágico que transforma uma entrada simples em algo verdadeiramente especial.

ENTRADA
A entrada consistirá em uma única string representando a primeira parte do nome de um Pokémon.

SAÍDA
A função deve retornar uma nova string que é a combinação da parte inicial(Préfixo) do nome do Pokémon com o sufixo final do nome, formando um nome de Pokémon completo.

EXEMPLOS
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

-----------------------
| ENTRADA |   SAÍDA   | 
-----------------------
|  Bulba  | Bulbasaur | 
-----------------------
|   Ivy   |  Ivysaur  | 
-----------------------
|   Venu  |  Venusaur | 
-----------------------

RESOLUÇÃO 

// Definindo a função que recebe a parte inicial do nome
function combinandoNomesPokemons(palavra) {
  // Concatena o sufixo mágico "saur" ao nome recebido
  let palavraPokemon = palavra + "saur";
  // Retorna o nome completo
  return palavraPokemon;
}

// Entrada da palavra usando o gets():
var nomeEntrada = gets();

// Chamada da função para gerar o nome completo
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo o nome final do Pokémon
print(palavraGerada);
