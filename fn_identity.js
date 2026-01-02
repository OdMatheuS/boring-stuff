// fn identidade: fn que devolve o que recebe
const id = (x) => x

//Ex:
const users = [{name:"Ana", enable:true}, {name:"joao",enable:false}]

//filtra users ativos
const filterUsersEnable = (list) => list.filter(user => user.enable)

//Composição id . filterUsersEnable
const result1 = filterUsersEnable(users)

const composeResult = filterUsersEnable(id(users))
console.log(result1 === composeResult) //"True"

//Obs:Em JavaScript, objetos e arrays são comparados por referência, e não pelo valor. 
//Isso significa que, mesmo que o conteúdo de dois arrays ou objetos seja o mesmo, 
//se eles forem referências diferentes, a comparação '===' vai retornar false

//Apenas para esse caso de JavaScript
console.log(JSON.stringify(result1) === JSON.stringify(composeResult)) //True
