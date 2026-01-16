A propriedade *comutativa* permite trocar a ordem dos operandos sem alterar o
resultado: **(3 + 5 = 8) (5 + 3 = 8)**

Já a *associativa* permite reagrupar os operandos com parênteses: **((2 + 3) + 4)** = **(2 + (3 + 4) = 9)**

*Ex:*

*Comutativa* : (7 + 2 = 2 + 7) (**troca de posição**)

*Associativa* : ((1 + 4) + 6 = 1 + (4 + 6)) (**mudança de agrupamento**)

----

**Monóide**: é um conjunto com **uma operação binária associativa** que **possui** um **elemento identidade**,
	 *ele surge quando um semigrupo ganha esse elemento especial(**identidade**)*

---
Exemplos Simples:
##### Números naturais com soma: identidade é 0
##### Multiplicação entre inteiros: identidade é 1
##### Multiplicação entre matrizes: diagonais 0 
##### Strings com concatenação: identidade é a string vazia

----
#### Números com fn Soma
Monóide clássico: números não negativos sob adição, onde 0 é o identidade (*não altera o valor*)

    const soma = (x, y) => x + y;  // Operação associativa
    const identidade = 0; // 0 + x = x + 0 = x

    console.log(soma(2, 3)); // 5
    console.log(soma(identidade, 5)); // 5

#### Strings com Concatenação
##### String vazia ("") como identidade

    const concatena = (x, y) => x + y; // Associativa
    const identidade = "";   // "" + x = x + "" = x
    console.log(concatena("Olá, ", "mundo!")); // "Olá, mundo!"
    console.log(concatena(identidade, "teste")); // "teste"


### Arrays com Concatenação
##### Array vazio ([]) como identidade
    const concatenaArray = (x, y) => x.concat(y);  // Associativa
    const identidade = []; // [] + x = x + [] = x
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    console.log(concatenaArray(arr1, arr2));  // [1, 2, 3, 4]
    console.log(concatenaArray(identidade, arr1)); // [1, 2] 
---
## Functor:
#### Funtor é uma estrutura que permite aplicar uma função a valores dentro de um contexto (como arrays), preservando a estrutura original
##### Um funtor encapsula valores em um "container" e oferece o método map, que aplica uma função aos valores internos sem alterar o formato do container e composição (map de funções compostas equivale a maps sequenciais)

### Array como Functor

    const xs = [1, 2, 3];
    const dobrar = x => x * 2;
    const resultado = xs.map(dobrar); // [2, 4, 6]
    console.log(resultado); // preserva estrutura

---
### Implementação do maybe
    const Maybe = value => ({
      map: fn => value == null ? Maybe(null) : Maybe(fn(value))
    });
    
    const dobro = x => x * 2;
    const maybeNum = Maybe(5);
    console.log(maybeNum.map(dobro).value); // 10
    console.log(Maybe(null).map(dobro).value); // null
---

## Um semigrupo é um conjunto com uma operação associativa, sem necessidade de identidade
##### Exemplo: fn Max
 Max é associativo, sem identidade natural

    const max = (x, y) => Math.max(x, y); // Associativo
    console.log(max(max(1, 3), 2)); // 3
    console.log(max(1, max(3, 2))); // 3 (igual)
