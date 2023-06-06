// Callbacks
// 1) Declare duas funções:
// a) A primeira deve receber um array de números, e retornar um novo array com todos os números do array original multiplicados por 3.

// function multiplicarPor3(arrayDeNumeros){
//   let novoArray = []
//   for (let i=0; i < arrayDeNumeros.length; i++){
//     novoArray.push (arrayDeNumeros[i] * 3)
//   }
//   return novoArray
// }

// // // finalizar assim:
// const arrayNumerico = [1,3,5,6,10]
// console.log("Array inicial:", arrayNumerico);
// console.log("Array inicial (x3):", multiplicarPor3(arrayNumerico));

// // //ou finalizar assim:
// console.log(multiplicarPor3([1, 3, 5, 6, 10]));


// b) A segunda deve receber um array de números, e retornar um novo array apenas com os números pares do array original.

// const retornarPares = (arrayDeNumeros) => {
//   let novoArray = []
//   for(let i=0; i < arrayDeNumeros.length; i++){
//     if(arrayDeNumeros[i] %2 === 0){
//       novoArray.push(arrayDeNumeros[i])
//     }
//   }
//   return novoArray
// }
// // const arrayNumerico = [1,3,5,6,10]
// console.log("Array inicial (pares):", retornarPares(arrayNumerico));



//------------------------------------------------------------------

// 2) Agora, crie uma função que recebe como parâmetros um array e uma função de callback:
// → A função principal deve chamar a função de callback passando o array como argumento. O valor do novo array deve ser guardado em uma variável, e a variável, retornada.
// → Faça duas chamadas da função acima, utilizando como callback as funções criadas anteriormente.

// function fazerOperacoes (array, callback) {
//   const novoArray = callback(array)
//   return novoArray
// }

// console.log("callback função multiplicando por 3", fazerOperacoes(arrayNumerico, multiplicarPor3));
// console.log("callback função retornar pares", fazerOperacoes(arrayNumerico, retornarPares));



//------------------------------------------------------------------

// map()
// Usando o map(), percorra um array de números, calcule o triplo de cada número e retorne um novo array com os valores triplicados.
// Atenção: ○ map() sempre retorna um novo array do mesmo tamanho do array original!


// fazendo com função callback dentro da função:

// const arrayNumerico = [1,3,5,6,10]

// const triplicarValor = arrayNumerico.map((numero) => {
//   return numero * 3
// })
// console.log("map", triplicarValor);



// fazendo com função callback fora da função:

// const arrayNumerico = [1,3,5,6,10]

// const multiplicar = (numero) => {
//   return numero * 3
// }
// const triplicarValor = arrayNumerico.map(multiplicar)
// console.log("map", triplicarValor);


//------------------------------------------------------------------

// filter()+
// Usando o filter(), percorra um array de números e retorne um novo array que contenha apenas números pares presentes no array original.
// Atenção: o filter() sempre retorna um novo array do mesmo tamanho ou menor que o array original!

// fazendo com função callback fora da função:

// const arrayNumerico = [1,3,5,6,10]

// const retornarPares = (numero) => {
//   return numero %2 === 0
// }
// const filtrarPares = arrayNumerico.filter(retornarPares)

// console.log("filter", filtrarPares);


// // fazendo com função callback dentro da função:

// // const arrayNumerico = [1,3,5,6,10]

// const pegarPares = arrayNumerico.filter ((numero) => {
//   return numero %2 === 0
// })

// console.log("filter2", pegarPares);


//------------------------------------------------------------------

// Pra guardar na cabeça
// Com o array de pokémons disponibilizado, faça o que se pede:
// 1. Declare uma função que receba como parâmetro o objeto poke, e que defina a propriedade vida como 100.
// 2. Utilize o map() e a função criada no item 1 para alterar a propriedade vida de todos os objetos do array pokemons. Guarde o novo array numa variável pokemonsVidaCheia.
// 3. Utilize o filter() e uma função não-nomeada para retornar apenas os pokémons de fogo. Guarde O novo array numa variável pokemonsDeFogo.


const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

// 1.

// function pokemonsVida (poke){
//   const novoValorVida = {
//     nome: poke.nome,
//     tipo: poke.tipo,
//     vida: poke.vida = 100
//   }
//   return novoValorVida
// }
// console.log(pokemonsVida(pokemons[0]))
// // tem que ir mudando o valor do indice para aparecer no console [0], por isso, a solução para mudar o valor vida de todos os pokemons esta abaixo

// const pokemonsVidaCheia = pokemons.map(pokemonsVida)
// console.log(pokemonsVidaCheia);


// 2. usando o map

const pokemonsVidaCheia = pokemons.map ((poke) => {
    nome: poke.nome;
    tipo: poke.tipo;
    vida: poke.vida = 100;
    return poke
  })
console.log(pokemonsVidaCheia)


// 3. usando filter

const pokemonDeFogo = pokemons.filter ((poke) => {
    return poke.tipo === "fogo"
})
console.log(pokemonDeFogo)