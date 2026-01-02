//semigrupo = conjunto + operação binária associativa 

//associativa => poder agrupar números de formas diferentes ao somar/multiplicar, o resultado sempre será o mesmo

/*
Ex: tenho um conjunto S (não vazio) ou S !== {}
fazer uma operação de * (multiplicação)

pega 2 elementos de S -> devolve 1 elemento de S
ou seja associativa: (a*b)*c = a*(b*c)
*/

/*
(S, *) onde:
S ≠ ∅ (conjunto nao vazio)
∀ a,b ∈ S, a*b ∈ S (fechado) (fechado: a operação nunca "escapa" do conjunto)
∀ a,b,c ∈ S, (a*b)*c = a*(b*c) (associativo)
*/

//exemplo operação "fechado"
const naoFechado = (a, b) => a + b  // 3+4=7 pode sair do conjunto {0,1,2}

const fechado = (a, b) => Math.min(10, a + b)  // nunca passa de 10

//outro exemplo operação * = soma (fechada em >= 0)
const soma = (a, b) => Math.max(0, a + b)


// Teste associatividade com inteiros
const a = 2, b = 3, c = 4
console.log("(a*b)*c =", soma(soma(a, b), c))  // 9
console.log("a*(b*c) =", soma(a, soma(b, c)))  // 9


// Operação * = concatenação
const concat = (s1, s2) => s1 + s2

// Teste associatividade string/concatenação  
console.log('("ab"+"c")+"d" =', concat(concat("ab", "c"), "d"))  // "abcd"
console.log('"ab"+("c"+"d") =', concat("ab", concat("c", "d")))  // "abcd"

// Fechado: sempre string
console.log('"" * "123" =', concat("", "123"))  // "123"

//exemplo de associatividade com matrizes
/*
Multiplicar matrizes, o resultado nao muda se voce agrupar diferente maneiras: (A × B) × C é igual a A × (B × C)
na multiplicação de matrizes nao é comutativa (A × B nem sempre é B × A), 
e isso nao importa para ser um "semigrupo" só a questão de associatividade é obrigatoria
*/

/* Ex: multiplicação de matrizes 3x3 */

// fn de multiplicação matrizes 3x3
const mult = (A, B) =>
  A.map((linhaAtual, _) =>
    linhaAtual.map((_, indiceColuna) =>
      A.reduce((soma, linhaA, indiceLinhaA) => 
        soma + linhaA[indiceColuna] * B[indiceLinhaA][indiceColuna], 
        0
      )
    )
  )

// matrizes 3x3
const A = [[1,0,0], [0,2,0], [0,0,3]]
const B = [[4,0,0], [0,5,0], [0,0,6]]
const C = [[2,0,0], [0,3,0], [0,0,4]]

const AB = mult(A, B)
console.log("A x B =", AB) // [ 'A x B =', [ [ 4, 10, 18 ], [ 4, 10, 18 ], [ 4, 10, 18 ] ] ] fechado

// associatividade funcional
const assoc1 = mult(mult(A, B), C)
const assoc2 = mult(A, mult(B, C))
console.log("Associativo?", JSON.stringify(assoc1) === JSON.stringify(assoc2)) // [ 'Associativo?', true ] 

console.log("A x B =", AB) // [ 'A x B =', [ [ 4, 10, 18 ], [ 4, 10, 18 ], [ 4, 10, 18 ] ] ]

// visualização em formato de tabela, visualmente melhor
console.table(AB)

//ou seja, um "semigrupo" só precisa da associatividade: (agrupar diferente não muda o resultado final) -> (A × B) × C = A × (B × C)
