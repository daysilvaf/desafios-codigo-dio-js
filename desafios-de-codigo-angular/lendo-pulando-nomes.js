DESAFIO
Faça um programa com as características abaixo:
Leia 10 nomes, sem espaço em branco;
Imprima o terceiro nome da lista;
Imprima o sétimo nome da lista;
Imprima o nono nome da lista.

ENTRADA
A entrada consiste vários arquivos de teste, cada um com dez linhas e em cada linha tem um nome de no até 30 caracteres e sem espaço em branco. Conforme mostrado no exemplo de 
entrada a seguir.

SAÍDA
Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, gere três linhas conforme os procedimentos 2, 3 e 4. Use o exemplo abaixo para clarear 
o que está sendo pedido.

-------------------------------------------
| EXEMPLOS DE ENTRADA | EXEMPLOS DE SAÍDA |
-------------------------------------------
|         USP         |         UFCG      |
|         UFPE        |         ITA       |
|         UFCG        |         URI       |
|         UFRN        |                   |
|         UFRJ        |                   |
|         IME         |                   |
|         ITA         |                   |
|         UNIOESTE    |                   |
|         URI         |                   |
|         UFG         |                   |
-------------------------------------------
|         UnB         |         UNIFEI    |
|         UFMG        |         UFRGS     |
|         UNIFEI      |         UFU       |
|         UECE        |                   |
|         UNICAMP     |                   |
|         INATEL      |                   |
|         UFRGS       |                   |
|         UNIFESO     |                   |
|         UFU         |                   |
|         PUC         |                   |
-------------------------------------------

RESOLUÇÃO

// Criação do array para armazenar os nomes
let nomes = new Array(10);
		
// Loop para ler os 10 nomes da entrada e armazenar no array
for (let i = 0; i < 10; i++) {
    nomes[i] = gets();
}

// Impressão do terceiro, sétimo e nono nome da lista
print(nomes[2]);
print(nomes[6]);
print(nomes[8]);
